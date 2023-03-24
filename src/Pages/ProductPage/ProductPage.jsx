import React, { useState, useEffect } from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import axios from 'axios'
import './ProductPage.css'

function ProductPage() {

    const id = JSON.parse(localStorage.getItem('key'))
    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() => {
        axios.get("/public_assets_qikdotz/mock_data/products_v1.json").then((res) => {
            const allData = res.data
            const details = allData.filter((value) => {
                return value.id == id
            })
            setSingleProduct(details[0])
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const searchData = (datas) => {
        console.log(datas);
    }
    return (
        <>
            <NavBar sData={searchData} />
            <div className='flex-box'>
                <div className='left'>
                    <div className='big-img'>
                        <img src={singleProduct.image_url} width="250px" height="200px"></img>
                    </div>

                </div>
                <div className='right'>

                    <div className='pname'>{singleProduct.name}</div>
                    <div className='rating'>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div className='price'>₹{singleProduct.price}</div>
                    <br></br>
                    <div className='size'>
                        <p className='size'>Size:</p>
                        <div className='psize'>M</div>
                        <div className='psize'>L</div>
                        <div className='psize'>X</div>
                    </div>

                    <br></br>

                    <div className='btn-box'>
                        <button className='addto-cart'>Addtocart</button>
                        <button className='buy-now'>Buy Now</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProductPage