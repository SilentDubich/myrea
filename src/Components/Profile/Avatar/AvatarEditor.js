import React, {useCallback, useReducer, useState} from 'react'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from "react-dropzone";
import Sarumyan from '../../../img/Avatars/sarumyan 300x300.jpg'
import Avatar from "react-avatar-edit";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import Content from "../../../CssModules/content.module.css";


export default function MyEditor(props) {
    const [upImg, setUpImg] = useState();
    const [imgRef, setImgRef] = useState(null);
    const [crop, setCrop] = useState({ unit: 'px', width: 300, height: 300 });
    const [previewUrl, setPreviewUrl] = useState();
    const [previewLoad, setPreviewLoad] = useState(null)
    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onLoad = useCallback(img => {
        setImgRef(img);
        // setCrop({ unit: 'px', width: 300, height: 300, x: 0, y: 0 })
    }, []);

    const makeClientCrop = async crop => {
        if (imgRef && crop.width && crop.height) {
            createCropPreview(imgRef, crop, 'newFile.jpeg');
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
    let uploadFile = () => {
        let formData = new FormData();
        formData.append('image', previewLoad);
        props.updatePhoto(formData, props.id)
    }

    return (
        <div>
            <div>
                <input id={'photo'} type="file" accept="image/*" onChange={onSelectFile} />
            </div>
            <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={c => setCrop(c)}
                onComplete={makeClientCrop}
                maxHeight={300}
                maxWidth={300}
                // locked={true}
            />
            {previewUrl && <img alt="Crop preview" src={previewUrl} />}
            <div>
                <button onClick={uploadFile}>loaddd</button>
            </div>
        </div>
    );
}

