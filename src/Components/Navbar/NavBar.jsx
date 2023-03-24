import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Navbar.css'

function NavBar({ sData }) {

    const [api, setApi] = useState()
    const [search, setSearch] = useState()
    const [datas, setData] = useState([])

    useEffect(() => {
        axios.get("/public_assets_qikdotz/mock_data/products_v1.json")
            .then((res) => {
                setApi(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    const handleInputChange = (e) => {
        setSearch({
            ...search,
            value: e.target.value
        })

    }

    const searchdata = (e) => {
        e.preventDefault()
        if (search.value != "") {

            const filteredName = api.filter((data) => {
                return data.name.includes(search.value)
            })

            const filteredDesc = api.filter((data) => {
                return data.description.includes(search.value)
            })

            const filteredCat = api.filter((data) => {
                return data.category == search.value
            })

            if (filteredCat) {
                setData(filteredCat)
            }
            else if (filteredDesc) {
                setData(filteredDesc)
            }
            else {
                setData(filteredName)
            }
        }
    }
    useEffect(() => {
        sData(datas)
    }, [datas])

    return (
        <div>

            <div className='header'>
                <div className='logo'>
                    <a href="/">
                        <h1 className='logo-text'>E-Shoppping Demo</h1>
                    </a>

                </div>

                <div className='search'>
                    <form onSubmit={searchdata}>
                        <input onChange={handleInputChange} type="text" placeholder='Search here!' />
                    </form>
                </div>

                <div className='icons'>
                    <a id='fa' className="fa fa-heart"></a>
                    <a id='fa' className="fa fa-shopping-cart"></a>
                    <a id='fa' className="fa fa-user-circle"></a>
                </div>
            </div>
        </div>

    )
}

export default NavBar