import React , {useEffect }from 'react';
import Navigation from '../component/Navigation'
import ProductItem from '../component/ProductItem'
import {Link} from 'react-router-dom'
import data from '../data'


const Page = ({match})=>{
    const target = match.params.navigation || 'female';
    const sub = match.params.sub;
    let content = [];
    let pageName = '';
    switch(target) {
        case 'female' : 
            pageName = '여성의류'
            break;
        case 'male' : 
            pageName = '남성의류'
            break;
        case 'etc' : 
            pageName = '잡화'
            break;
        default : 
            pageName = '존재하지 않는'
    }

    if(sub === undefined){
        content = data.items.filter(item => item.category[0] === target)
    }else{
        content = data.items.filter(item => ( item.category[0] === target && item.category[1] === sub ))
    }

      
    useEffect(() => {
        const sub_list= document.getElementsByClassName('sub-nav');
        sub_list.forEach(e=> {if(e.classList.contains(target)){
            e.classList.add('navactive')
        }else {e.classList.remove('navactive')}})
      } , [target])
    

    return (
        <>  
            <h1><Link to="/"><i className="fas fa-home"></i></Link></h1>
            <div className="gnb">
                <Navigation path={match}/>
            </div>
            <div className="page-main-info"><b>{pageName}</b> 페이지 입니다.</div>
            <ul className="product-list">
                {content.map(data=><li className="product-item" key={data.id}><ProductItem data={data} /></li>)}       
            </ul> 
        </>
    )
}

export default Page;
