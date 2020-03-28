import React from "react";
import PagesButtons from '../../../../../CssModules/UsersSearch/pagesSearch.module.css'
import * as axios from "axios";
import {API} from "../../../../DataBases/API/API";


function Pages(props) {
    // debugger

    let pagesCount = Math.ceil((props.totalUsers / props.pageSize) / 25);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let totalButtons = pages.map(number => <button
        disabled={props.pageButton}
        onClick={event => currentPage(number)}
        className={`
            ${PagesButtons.button__decor} 
            ${PagesButtons.button__padding} 
            ${PagesButtons.button__margins}
            ${props.currentPage === number && PagesButtons.button_selected__decor}
            `}>{number}</button>);


    let currentPage = page => {
        props.switchIsFetching(true);
        props.switchIsButton(true);
        props.setPage(page);
        API.getUsers(props.pageSize, page)
            .then(data => {
                props.setUsers(data.items);
                        props.switchIsFetching(false);
                        props.switchIsButton(false);
            })
    };

    return(

        <div>
            {totalButtons}
        </div>
    )
}

export default Pages
