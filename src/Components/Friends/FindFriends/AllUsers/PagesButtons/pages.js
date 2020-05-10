import React, {useState} from "react";
import PagesButtons from '../../../../../CssModules/UsersSearch/pagesSearch.module.css'
import {API} from "../../../../DataBases/API/API";


function Pages(props) {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPageNumber = (portionNumber - 1) * props.portionSize
    let rightPageNumber = portionNumber * props.portionSize;
    const numberButtonsClasses = `${PagesButtons.button__decor} ${PagesButtons.button__padding} ${PagesButtons.pages_pageButtons__width} ${PagesButtons.pages_pageButtons__margin}`
    const portionButtonsPrevClasses = `${PagesButtons.button__decor} ${PagesButtons.button__padding} ${PagesButtons.pages_portionButtons__width} ${PagesButtons.pages_portionButtonsPrev__margin}`
    const portionButtonsNextClasses = `${PagesButtons.button__decor} ${PagesButtons.button__padding} ${PagesButtons.pages_portionButtons__width} ${PagesButtons.pages_portionButtonsNext__margin}`
    let totalButtons = pages
        .filter(number => number > leftPageNumber && number <= rightPageNumber)
        .map(number => <button
            disabled={props.pageButton}
            onClick={() => currentPage(number)}
            className={` ${numberButtonsClasses} ${props.currentPage === number && PagesButtons.button_selected__decor}`}>{number}</button>);
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

        <div className={`${PagesButtons.pages_container__flex}`}>
            <div><button className={`${portionButtonsPrevClasses} ${PagesButtons.pages_pageButtons__margin}`} disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button></div>
            <div className={`${PagesButtons.pages_pageButtons__size}`}>{totalButtons}</div>
            <div className={`${PagesButtons.pages_portionButtons__size}`}>{portionNumber < portionCount && <button className={`${portionButtonsNextClasses}`} onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}</div>
        </div>
    )
}

export default Pages
