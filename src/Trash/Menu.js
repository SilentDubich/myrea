import React from "react";

function Menu() {
    return(
        <nav>
            <ul className="site-nav">
                <li><a href="">Главная</a></li>
                <li><a href="">Услуги</a></li>
                <li><a href="">Цена</a></li>
                <li className="nav-right">
                    <a href="/about">Контакты</a>
                </li>
            </ul>
        </nav>
    )
}

// return (
//     <BrowserRouter>
//         <div className={`${Content.content}`}>
//             <div className={`${Content.content__asideLeft}`}>
//                 <LeftMenu/>
//             </div>
//             <div className={`${Content.content__mainContent}`}>
//                 <Route path='/profile' component={ProfileCenterInfo}/>
//             </div>
//             <div className={`${Content.content__asideRight}`}>
//                 <Route path='/profile' component={ProfileRightAside}/>
//             </div>
//         </div>
//     </BrowserRouter>
// )
export default Menu