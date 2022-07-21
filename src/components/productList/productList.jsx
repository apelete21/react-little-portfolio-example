import React from 'react'
import Product from '../product/product'
import { products } from '../../data';

const productList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">
          Create & Instpire. It's Lama
        </h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi facilis itaque esse? Aspernatur et numquam molestiae perspiciatis velit tenetur ad consequuntur, saepe dolor id?
        </p>
      </div>
      <div className="pl-list">
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default productList
