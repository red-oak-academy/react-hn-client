import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";
import clsx from "clsx";

function Pagination(props) {

    const { maxPage, currentPage, pageSpread } = props;

    const firstVisiblePage = (currentPage - pageSpread) > 1 ?
        (maxPage - currentPage) < pageSpread
            ? maxPage - 2 * pageSpread
            : currentPage - pageSpread
        : 1;


    const lastVisiblePage = (firstVisiblePage + 2 * pageSpread) < maxPage
        ? firstVisiblePage + 2 * pageSpread
        : maxPage;


    let buttons = [];

    for (let page = firstVisiblePage; page <= lastVisiblePage; page++) {
        buttons.push(
            <li className="page-item" key={page}><Link className="page-link" to={`/${props.postsSection}/${page}`} >{page}</Link></li>
        );
    }

    return (
        <div className="row react-hn-navbar-row mt-2">
            <nav>
                <ul className="pagination pagination-sm">

                    <li className="page-item">
                        <Link 
                            className={clsx({"page-link" : true, "disabled" : currentPage === 1})}
                            onClick={currentPage === 1 ? (e) => e.preventDefault() : undefined} 
                            to={`/${props.postsSection}/${currentPage === 1 ? currentPage : currentPage-1}`}>
                            <span>&laquo;</span>
                        </Link>
                    </li>    
                            
                    {buttons}

                    <li className="page-item">
                        <Link className={clsx({"page-link" : true, "disabled" : currentPage === maxPage})}
                            onClick={currentPage === maxPage ? (e) => e.preventDefault() : undefined}
                            to={`/${props.postsSection}/${currentPage === maxPage ? currentPage : currentPage+1}`}
                        >
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
    pageSpread: PropTypes.number.isRequired
}

Pagination.defaultProps = {
    pageSpread: 1
}

export default Pagination
