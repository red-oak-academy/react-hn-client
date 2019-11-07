import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Expansion(props) {
    return (
        <span
            className="react-hn-comment-expansion"
            onClick={props.expansionToggleCallback}>
            {props.expanded ? ('[-]') : getExpandString(props.childCount)}
        </span>
    )
}

Expansion.propTypes = {
    expanded: PropTypes.bool.isRequired,
    childCount: PropTypes.number,
    expansionToggleCallback: PropTypes.func.isRequired
}

function getExpandString(count) {
    if(count > 0) {
        return `[+${count}]`
    } else {
        return '[+]'
    }
}

export default Expansion
