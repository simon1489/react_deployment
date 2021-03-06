import { useEffect, useState } from "react";

// material-ui
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Moment from "react-moment";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
// table data
function createData(order, status, paid, date, total) {
  return { order, status, paid, date, total };
}

// ==============================|| TABLE - BASIC ||============================== //

export default function TableBasic() {
  const { logout, user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.id === "ge9F5m4txyZpczSenHzL4L0bmW42")
      axios
        .get("http://52.90.192.153/api/orders")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    else {
      axios
        .get(`http://52.90.192.153/api/userfirebase/${user?.id}`)
        .then((response) => {
          console.log(`http://52.90.192.153/api/orders/user/${user?.id}`);
          axios
            .get(`http://52.90.192.153/api/orders/user/${user?.id}`)
            .then((response) => {
              console.log(response.data);
              setData(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        });
    }
  }, []);

  const renderRows = () => {
    if (user?.id === "ge9F5m4txyZpczSenHzL4L0bmW42") {
      return (
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>Worker</TableCell>
              <TableCell>Local</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right" sx={{ pl: 3 }}>
                Date
              </TableCell>
              <TableCell align="right">Total</TableCell>
              {/* <TableCell align="right">Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow hover key={row.product_id}>
                <TableCell sx={{ pl: 3 }} component="th" scope="row">
                  {JSON.parse(row.product).name}
                </TableCell>
                <TableCell>{JSON.parse(row.product).local}</TableCell>
                <TableCell align="right">{row._id}</TableCell>
                {/* <TableCell align="right">
                  {row.is_paid ? "Yes" : "No"}
                </TableCell> */}
                <TableCell align="right">
                  <Moment format="YYYY/MM/DD HH:hh">{row.order_date}</Moment>
                </TableCell>
                <TableCell align="right">{`$${row.order_total}`}</TableCell>
                {/* <TableCell align="right">
                                      <SecondaryAction link="https://next.material-ui.com/components/tables/" />
                                  </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
    return (
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell sx={{ pl: 3 }}>Order Number</TableCell> */}
            {/* <TableCell align="right">Status</TableCell> */}
            <TableCell align="left">ID</TableCell>
            <TableCell align="left" sx={{ pl: 3 }}>
              Date
            </TableCell>
            <TableCell align="left">Total</TableCell>
            {/* <TableCell align="right">Actions</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow hover key={row.product_id}>
              <TableCell align="left">{row._id}</TableCell>
              {/* <TableCell sx={{ pl: 3 }} component="th" scope="row">
                {row.product_id}
              </TableCell> */}
              {/* <TableCell align="right">{row.status}</TableCell> */}
              <TableCell align="left">
                <Moment format="YYYY/MM/DD HH:hh">{row.order_date}</Moment>
              </TableCell>
              <TableCell align="left">{`$${row.order_total}`}</TableCell>
              {/* <TableCell align="right">
                                      <SecondaryAction link="https://next.material-ui.com/components/tables/" />
                                  </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  // const getDate = (d) => new Date(d);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard
          content={false}
          title="All Transactions"

          // secondary={<SecondaryAction link="https://next.material-ui.com/components/tables/" />}
        >
          {/* table */}
          <TableContainer>{renderRows()}</TableContainer>
        </MainCard>
      </Grid>
    </Grid>
  );
}
