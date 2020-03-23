import React from "react";
import PagesButtons from '../../../../../CssModules/UsersSearch/pagesSearch.module.css'



function Pages(props) {
    debugger
    let totalPages = () => {
        let count = [];
        let pagesNumbers = Math.ceil((props.totalUsers / props.pageSize) / 50);
        for (let i = 1; i <= pagesNumbers; i++){
            count.push(i);
        }
        return count.map(number => <span onClick={event => currentPage(event)} className={`
            ${PagesButtons.button__decor} 
            ${PagesButtons.button__padding} 
            ${PagesButtons.button__margins}
            `}>{number}</span>)
    };
    let currentPage = e => {
        props.setPage(e)
    };

    return(
        <div>
            {totalPages()}
        </div>
    )
}

export default Pages
