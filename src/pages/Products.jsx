import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../services/axios.config';
import Table from '../comp/table/Table'
const Products = () => {
    
    const [ items, setItems ] = useState([
            // {
            //     name: "mini encend",
            //     description: "encendedor bic 10g",
            //     stock: 33,
            //     price: 300,
            //     qr: '/!"/!!',
            //     id: "1"
            // }
    ]);

    useEffect(() => {
        axiosInstance.get('/')
            .then(r =>{
                if(r.status === 200){
                    setItems(r.data)
                }else{
                    throw new Error(`[${r.status}]ERROR EN LA SOLICITUD`)
                }
            })
            .catch(err => console.log(err))
    },[])




    return (
        <div>
            <h1 style={{textAlign:'center'}}>Productos</h1>
            <div className='container mt-3'>
            {
                items.length > 0 ?
                    <Table items = {items}/>
                :
                <h2 style={{textAlign:'center'}}>No hay productos</h2>
            }
            </div>
        </div>
    )
}


export default Products