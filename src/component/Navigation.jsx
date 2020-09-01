import React from 'react'
import data from '../data'
import {NavLink} from 'react-router-dom'
import SubNav from './SubNav'

const Navigation =({path}) =>{
    // console.log(data)
    const main = path.params.navigation;
    const items = data.NavList;

    return (
        <ul className="main-nav">
            {items.map(item => <li className={`main-nav-item ${item.path}`} key={item.path} ><NavLink id={item.path} activeClassName="active" to={'/'+item.path}>{item.name}</NavLink><ul className={'sub-nav ' + item.path}><SubNav navigation={item.path}></SubNav></ul></li>)}
        </ul>
    )
}

export default Navigation
