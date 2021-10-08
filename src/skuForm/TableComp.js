import React from "react";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@material-ui/core";

import Editlist from "./Editlist";
import { Link } from "react-router-dom";

const TableComp = (props) => {
  return (
    <div>
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

          <TableBody>
            {props.arr.map((row) => (
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
                <TableCell align="right">
                  <Link to={{
                      pathname: "/edit",
                      state: row,
                    }}
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
