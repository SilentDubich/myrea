import React from "react";
import Spinner from '../../img/Preloaders/Spinner-1.4s-3a356a.svg';
import Preloaders from '../../CssModules/Preloader/Preloaders.module.css'


function Preloader(props) {
    return(
        <div>
            <img className={Preloaders.Preloader__position} src={Spinner}/>
        </div>
    )
}

export default Preloader
