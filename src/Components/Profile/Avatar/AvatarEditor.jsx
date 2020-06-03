import React, {useCallback, useState} from 'react'
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import {Modal} from "../../../index";
import Portal from "../../../CssModules/portal.module.css"
import AvaEdit from "../../../CssModules/AvatarEditor/avatarEditor.module.css"


export default function MyEditor(props) {
    const [upImg, setUpImg] = useState();
    const [imgRef, setImgRef] = useState(null);
    const [crop, setCrop] = useState({unit: 'px', width: 300, height: 300});
    const [previewUrl, setPreviewUrl] = useState();
    const [previewLoad, setPreviewLoad] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
            setPreviewLoad(e.target.files[0])
            setEditMode(true)
        }
    };

    const onLoad = useCallback(img => {
        setImgRef(img);
        setCrop({unit: 'px', width: 300, height: 300})
    }, []);

    const makeClientCrop = async crop => {
        if (imgRef && crop.width && crop.height) {
            await createCropPreview(imgRef, crop, 'newFile.jpeg');
        }
    };

    const createCropPreview = async (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }
                blob.name = fileName;
                let file = new File([blob], 'image.jpeg', [blob.type])
                setPreviewLoad(file)
                window.URL.revokeObjectURL(previewUrl);
                setPreviewUrl(window.URL.createObjectURL(blob));
            }, 'image/jpeg');

        });
    };
    let uploadFile = async () => {
        setDisabled(true)
        let formData = new FormData();
        formData.append('image', previewLoad);
        await props.updatePhoto(formData, props.id)
        clearImgData()
    }
    const clearImgData = () => {
        setUpImg(null)
        setPreviewLoad(null)
        setPreviewUrl(null)
        setEditMode(false)
        setCrop({unit: 'px', width: 300, height: 300})
        setDisabled(false)
        document.getElementById('photo').value = ''
    }
    const buttonClasses = `${AvaEdit.avaEdit__button} ${AvaEdit.avaEdit_button__padding} ${AvaEdit.avaEdit_button__margin}`
    return (
        <div>
            <div className={AvaEdit.fileUpload}>
                <label>
                    <input id={'photo'} type="file" accept="image/*" onChange={onSelectFile}/>
                    <span>Change photo</span>
                </label>
            </div>
            {editMode && <Modal>
                <div className={Portal.modal}>
                    <div className={Portal.cropImage__width}>
                        <ReactCrop
                            src={upImg}
                            onImageLoaded={onLoad}
                            crop={crop}
                            onChange={c => setCrop(c)}
                            onComplete={makeClientCrop}
                            maxHeight={300}
                            maxWidth={300}
                        />
                    </div>
                    <div>
                        <button
                            disabled={disabled}
                            className={`${buttonClasses} ${disabled && AvaEdit.avaEdit__buttonDisabled}`}
                            onClick={uploadFile}
                        >Load
                        </button>
                    </div>
                    <div>
                        <button className={`${buttonClasses}`} onClick={() => clearImgData()}>Cancel</button>
                    </div>
                </div>
            </Modal>
            }
        </div>
    );
}


// import React, {FC, useCallback, useState} from 'react'
// import ReactCrop from "react-image-crop";
// import 'react-image-crop/dist/ReactCrop.css';
// import {Modal} from "../../../index";
// import Portal from "../../../CssModules/portal.module.css"
// import AvaEdit from "../../../CssModules/AvatarEditor/avatarEditor.module.css"
//
// type mapStateType = {
//     id: number
//     updatePhoto: (formData: File, id: number) => void
// }
//
// type CropType = {
//     aspect?: number;
//     x?: number;
//     y?: number;
//     width?: number;
//     height?: number;
//     unit?: 'px' | '%';
// }
//
// export const MyEditor:FC<mapStateType> = (props) => {
//     const [upImg, setUpImg] = useState<string | ArrayBuffer | null>();
//     const [imgRef, setImgRef] = useState(null);
//     const [crop, setCrop] = useState({unit: 'px', width: 300, height: 300});
//     const [previewUrl, setPreviewUrl] = useState<string | null>();
//     const [previewLoad, setPreviewLoad] = useState<string | Blob>('')
//     const [editMode, setEditMode] = useState(false)
//     const [disabled, setDisabled] = useState(false)
//     const onSelectFile = (e: any) => {
//         if (e.target.files && e.target.files.length > 0) {
//             const reader = new FileReader();
//             reader.addEventListener('load', () => setUpImg(reader.result));
//             reader.readAsDataURL(e.target.files[0]);
//             setPreviewLoad(e.target.files[0])
//             setEditMode(true)
//         }
//     };
//
//     const onLoad = useCallback(img => {
//         setImgRef(img);
//         setCrop({unit: 'px', width: 300, height: 300})
//     }, []);
//
//     const makeClientCrop = async (crop: CropType) => {
//         if (imgRef && crop.width && crop.height) {
//             await createCropPreview(imgRef, crop, 'newFile.jpeg');
//         }
//     };
//
//     const createCropPreview = async (image: any, crop: CropType, fileName: string) => {
//         const canvas = document.createElement('canvas');
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         const ctx = canvas.getContext('2d');
//         if (ctx && crop.width && crop.height && crop.x && crop.y) {
//             canvas.width = crop.width;
//             canvas.height = crop.height;
//             ctx.drawImage(
//                 image,
//                 crop.x * scaleX,
//                 crop.y * scaleY,
//                 crop.width * scaleX,
//                 crop.height * scaleY,
//                 0,
//                 0,
//                 crop.width,
//                 crop.height
//             );
//         }
//         return new Promise((resolve, reject) => {
//             canvas.toBlob(blob => {
//                 if (!blob) {
//                     reject(new Error('Canvas is empty'));
//                     return;
//                 }
//                 blob.name = fileName;
//                 // @ts-ignore
//                 let file = new File([blob], 'image.jpeg', [blob.type])
//                 setPreviewLoad(file)
//                 if (previewUrl != null) {
//                     window.URL.revokeObjectURL(previewUrl);
//                 }
//                 setPreviewUrl(window.URL.createObjectURL(blob));
//             }, 'image/jpeg');
//
//         });
//     };
//     let uploadFile = async () => {
//         setDisabled(true)
//         let formData = new FormData();
//         formData.append('image', previewLoad);
//         // @ts-ignore
//         props.updatePhoto(formData, props.id)
//         clearImgData()
//     }
//     const clearImgData = () => {
//         setUpImg(null)
//         setPreviewLoad('')
//         setPreviewUrl(null)
//         setEditMode(false)
//         setCrop({unit: 'px', width: 300, height: 300})
//         setDisabled(false)
//         // @ts-ignore
//         document.getElementById('photo').value = ''
//     }
//     const buttonClasses = `${AvaEdit.avaEdit__button} ${AvaEdit.avaEdit_button__padding} ${AvaEdit.avaEdit_button__margin}`
//     return (
//         <div>
//             <div className={AvaEdit.fileUpload}>
//                 <label>
//                     <input id={'photo'} type="file" accept="image/*" onChange={onSelectFile}/>
//                     <span>Change photo</span>
//                 </label>
//             </div>
//             {editMode && <Modal>
//                 <div className={Portal.modal}>
//                     <div className={Portal.cropImage__width}>
//                         // @ts-ignore
//                         <ReactCrop
//                             src={upImg}
//                             onImageLoaded={onLoad}
//                             crop={crop}
//                             // @ts-ignore
//                             onChange={c => setCrop(c)}
//                             onComplete={makeClientCrop}
//                             maxHeight={300}
//                             maxWidth={300}
//                         />
//                     </div>
//                     <div>
//                         <button
//                             disabled={disabled}
//                             className={`${buttonClasses} ${disabled && AvaEdit.avaEdit__buttonDisabled}`}
//                             onClick={uploadFile}
//                         >Load
//                         </button>
//                     </div>
//                     <div>
//                         <button className={`${buttonClasses}`} onClick={() => clearImgData()}>Cancel</button>
//                     </div>
//                 </div>
//             </Modal>
//             }
//         </div>
//     );
// }

