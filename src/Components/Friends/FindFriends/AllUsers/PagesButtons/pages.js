import React, {useState} from "react";
import PagesButtons from '../../../../../CssModules/UsersSearch/pagesSearch.module.css'
import * as axios from "axios";
import {API} from "../../../../DataBases/API/API";


function Pages(props) {
    // debugger

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPageNumber = (portionNumber - 1) * props.portionSize
    let rightPageNumber = portionNumber * props.portionSize;

    let totalButtons = pages
        .filter(number => number > leftPageNumber && number <= rightPageNumber)
        .map(number => <button
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

    return (

        <div>
            <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            {totalButtons}
            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    )
}

export default Pages
