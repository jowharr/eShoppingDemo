import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Collections.css'
import NavBar from '../Navbar/NavBar'
import { useNavigate } from 'react-router-dom'

function Collections() {

    const [state, setState] = useState()
    const[filter,SetFilter]=useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/public_assets_qikdotz/mock_data/products_v1.json").then((res) => {
            setState(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(state);

    const category = (value) => {
        const filterData = state.filter((data) => {
            return data.category == value
        })
        SetFilter(filterData)
    }

    const buttonClick = (id) => {
      localStorage.setItem('key', JSON.stringify(id))
      navigate('/productview')
    }

    const searchData = (datas)=>{
        console.log("data==>", datas);
        setState(datas)
    }



    return (
        <>
        <NavBar sData = {searchData}/>
            {/* ===========Panel============ */}
                <ul>
                    <li><a href="#" onClick={() => { category("Clothing") }}>Clothing</a></li>
                    <li><a href="#" onClick={() => { category("Shoes") }}>Footwear</a></li>
                    <li><a href="#" onClick={() => { category("Electronics") }}>Electronics</a></li>
                    <li><a href="#" onClick={() => { category("Appliances") }}>Appliances</a></li>
                </ul>

                {/* ===============Cards================ */}

                {filter!=="" ?
<>
                {filter && filter.map((products) =>

                    <div className='container'>

                        <div className='card'>
                            <img onClick={()=>{buttonClick(products?.id)}} src={products?.image_url} alt="" />
                            <div className='details'>
                                <div className='details-sub'>

                                    <h5>{products?.name}</h5>
                                    <h5 className='price'>₹{products?.price}</h5>
                                </div>

                                <div className='star'>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <button onClick={()=>{buttonClick(products?.id)}}>Buy Now</button>

                            </div>
                        </div>
                    </div>
                )}
                </>:
            
                state && state.map((products) =>

                    <div className='container'>

                        <div className='card'>
                            <img onClick={()=>{buttonClick(products?.id)}} src={products?.image_url} alt="" />
                            <div className='details'>
                                <div className='details-sub'>

                                    <h5>{products?.name}</h5>
                                    <h5 className='price'>${products?.price}</h5>
                                </div>

                                <div className='star'>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <button onClick={()=>{buttonClick(products?.id)}}>Buy Now</button>

                            </div>
                        </div>
                    </div>
                )}
                    

            </>
            )
}


            export default Collections