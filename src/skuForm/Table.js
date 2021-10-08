import React from 'react'
import { TableContainer,TableCell,Paper,TableHead,TableRow,TableBody } from '@material-ui/core';



const Table = (props) => {
    return (
      <div>
        {/* {console.log(props)} */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">SkuID</TableCell>
                <TableCell align="right">Owner</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            {/* const obj={value: value, label: label, owner: owner, price: price, quantity: quantity} */}
            <TableBody>
              {/* {props.arr.map((row) => (
                <TableRow
                  key={row.value}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.label}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                  <TableCell align="right">{row.owner}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">link</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
        ;
      </div>
    );
}

export default Table
