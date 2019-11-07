import React, {Fragment} from 'react'
import {NavLink} from "react-router-dom"
import "./index.css";

function NavLinks() {
    return (
        <Fragment>
            <NavLink className="unstyled" to="/newest" activeClassName="react-hn-nav-link-active">new</NavLink> |&nbsp;
            <NavLink className="unstyled" to="/ask" activeClassName="react-hn-nav-link-active">ask</NavLink> |&nbsp;
            <NavLink className="unstyled" to="/show" activeClassName="react-hn-nav-link-active">show</NavLink> |&nbsp;
            <NavLink className="unstyled" to="/jobs" activeClassName="react-hn-nav-link-active">jobs</NavLink>
        </Fragment>
    )
}

export default NavLinks
