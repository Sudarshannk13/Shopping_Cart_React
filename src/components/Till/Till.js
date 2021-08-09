import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ccFormat = (price) => {
  return price > 0 ? `£${price.toFixed(2)}` : "-";
};

const useStyles = makeStyles({
  table: {},
  cell: {
    minWidth: 35,
  },
});

export default function Till({ cart }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={"till shadow--0"}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell scope={"col"} align={"center"}>
                  Product
                </TableCell>
                <TableCell
                  scope={"col"}
                  align={"center"}
                  className={classes.cell}
                >
                  Price
                </TableCell>
                <TableCell scope={"col"} align={"center"}>
                  Qty
                </TableCell>
                <TableCell
                  scope={"col"}
                  align={"center"}
                  classes={classes.root}
                >
                  Discount
                </TableCell>
                <TableCell
                  scope={"col"}
                  align={"center"}
                  className={classes.cell}
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.cart.map((item) => {
                return (
                  <TableRow>
                    <TableCell scope={"row"} align={"center"}>
                      {item.name}
                    </TableCell>
                    <TableCell align={"center"}>
                      {ccFormat(item.price)}
                    </TableCell>
                    <TableCell align={"center"}>{item.quantity}</TableCell>
                    <TableCell align={"center"}>
                      {ccFormat(item.discount)}
                    </TableCell>
                    <TableCell align={"center"}>
                      {ccFormat(item.price * item.quantity - item.discount)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell size={"small"}>Subtotal</TableCell>
                <TableCell>{ccFormat(cart.subtotal)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell size={"small"}>Discount</TableCell>
                <TableCell>{ccFormat(cart.discount)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell size={"medium"} variant={"head"}>
                  Total
                </TableCell>
                <TableCell size={"medium"} variant={"head"}>
                  {ccFormat(cart.total)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
}
