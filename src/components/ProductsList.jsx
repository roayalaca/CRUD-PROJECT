import React from 'react';

const ProductsList = ({productsData, deleteProduct, selectProduct}) => {
    return (
        <div>
            <ul className='List'>
                {
                    productsData?.map( products => (
                        <li key={products.id}>
                            <h3 className='NAME'> <span>{products.name}</span></h3>
                            <h3 className='CATEGORY'> <span> CATEGORY </span>{products.category}</h3>
                            <h3 className='PRICE'> <span>PRICE</span>  {products.price}</h3>
                            <h3 className='AVAILABILITY'> <span>AVAILABILITY</span> {products.isAvailable ? "Currently available" : "Not available"}</h3>

                            <div className='Delete' >
                          
                                <button className='trash' onClick={() => deleteProduct(products.id)}><i class='bx bx-trash'></i></button>
                                <button className='pen' onClick={() => selectProduct(products)}>  <i class='bx bx-edit-alt'></i></button>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductsList;