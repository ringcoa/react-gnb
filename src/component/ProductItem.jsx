import React from 'react'

const ProductItem = ({data}) => {
    const imgSrc = 'http://ringcoa.dothome.co.kr/img/shop/'
    return (
      <>
        <img className='item-img' src={imgSrc+data.img} />
        <div className="text_area">
          <h3>{data.name}</h3>
          <p>{data.info}</p>
        </div>
      </>

    )
}

export default ProductItem;