import React from "react";
import TableBS from "react-bootstrap/Table";
import ItemTable from "../itemTable/ItemTable";

const Table = ({items, editItem}) => {
    console.log(items);
    return (
        <TableBS striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th style={{textAlign:'center'}}>ID</th>
                    <th style={{textAlign:'center'}}>Producto</th>
                    <th style={{textAlign:'center'}}>Precio</th>
                    <th style={{textAlign:'center'}}>Stock</th>
                    <th style={{textAlign:'center'}}>QR</th>
                    <th style={{textAlign:'center'}}>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item, i) => (
                        <ItemTable item={item} key={i} editItem={editItem}/>
                    ))
                }
                
            </tbody>
        </TableBS>
        
    );
};
export default Table;
