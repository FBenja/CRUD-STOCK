import React from 'react'

const ItemTable = ({ item,editItem }) => {
        const { name, price, stock, id, qr } = item
        return (

                <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td>{qr}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <i style={{ cursor: 'pointer' }} class="bi bi-trash3-fill" ></i> 
                                <i style={{ cursor: 'pointer' }} class="bi bi-pencil-square" onClick={editItem}></i></td>
                </tr>

        )
}
export default ItemTable