import { useState } from "react";
import React from'react'
import Modal from "../modal/modal";


const ItemTable = ({ item,editItem }) => {
        const { name, price, stock, id, qr } = item
        const [modalShow, setModalShow] = React.useState(false);

        return (
                <>
                <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td>{qr}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <i style={{ cursor: 'pointer' }} class="bi bi-trash3-fill" ></i> 
                                <i style={{ cursor: 'pointer' }} class="bi bi-pencil-square" onClick={()=>setModalShow(true)}></i></td>
                </tr>
                <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item = {item}
                onSubmit = {editItem}
                />
                </>
        )
}
export default ItemTable