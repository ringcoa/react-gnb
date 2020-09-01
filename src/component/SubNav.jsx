import React , { useRef} from 'react';
import data from '../data'
import {NavLink} from 'react-router-dom'

const selctList = (nav) =>{

    const newArr = (sub , path)=>{
        let arr = [];
        nav = nav.split('/')[0];
        path =path.map(el=> '/'+nav+el)
        
        for(let i =0; i < sub.length; i++){
            arr.push([sub[i] , path[i]])
        }
        return arr;
    }

    if(nav === 'female'){
        return newArr(data.NavList[0].sub , data.NavList[0].subPath);
    }else if(nav === 'male'){
        return newArr(data.NavList[1].sub , data.NavList[1].subPath);
    }else if(nav === 'etc'){
        return newArr(data.NavList[2].sub , data.NavList[2].subPath);
    }
    
}


const SubNav = ({navigation})=>{
    const li_1 = useRef()
    const subNavList = selctList(navigation);

    return (
        subNavList.map((subItem ,idx) =><li className="sub-nav-item" key={idx}><NavLink activeClassName="active" to={subItem[1]}>{subItem[0]}</NavLink></li>)
    )
}

export default SubNav;