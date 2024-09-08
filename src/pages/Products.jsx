import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../services/axios.config';
import Table from '../comp/table/Table'
const Products = () => {
    
    const [ items, setItems ] = useState([]);

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

    const editItem =()=>{
        //TODO aca se hace un put
        console.log("editando el item")
    }


    return (
        <div>
            <h1 style={{textAlign:'center'}}>Productos</h1>
            <div className='container mt-3'>
            {
                items.length > 0 ?
                    <Table items = {items} editItem = {editItem}/>
                :
                <h2 style={{textAlign:'center'}}>No hay productos</h2>
            }
            </div>
        </div>
    )
}


export default Products