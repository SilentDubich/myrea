import React from "react";
import coon from "../../img/NoResultSearch/coon.jpg"
import ResultS from "../../CssModules/NoResultSearch/resultStyles.module.css"

function NoResultSearch(props) {
    const imgClasses = `${ResultS.noResult_img__decor} ${ResultS.noResult_img__width}`
    return (
        <div>
            <div className={ResultS.noResult_text__decor}>
                <span>We haven't found anything, but we've already sent our agent to punish the culprit</span>
            </div>
            <div className={ResultS.noResult_img__margin}>
                <img className={imgClasses} src={coon}/>
            </div>
        </div>
    )
}


export default NoResultSearch
