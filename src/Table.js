import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import './Table.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const TableData=({tableData, handleScan})=>{
    const classes = useStyles();

    const SortedData = tableData.sort((a, b)=>(
        a["current_status"].localeCompare(b["current_status"])
    ))

    return (
        <div className='table'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell>AWB NUMBER</TableCell>
                        <TableCell align="right">TRANSPORTER</TableCell>
                        <TableCell align="right">SOURCE</TableCell>
                        <TableCell align="right">DESTINATION</TableCell>
                        <TableCell align="right">BRAND</TableCell>
                        <TableCell align="right">START DATE</TableCell>
                        <TableCell align="right">ETD</TableCell>
                        <TableCell align="right">STATUS</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody className='tablerow'>
                        {
                            SortedData.map((data, i)=>(
                                <TableRow>
                                
                                    <TableCell component="th" scope="row">{data.awbno}</TableCell>
                                    <TableCell align="right">{data.carrier}</TableCell>
                                    <TableCell align="right">{data.from}</TableCell>
                                    <TableCell align="right">{data.to}</TableCell>
                                    <TableCell align="right">{data.carrier}</TableCell>
                                    <TableCell align="right">{data['pickup_date']?.slice(0,10)}</TableCell>
                                    <TableCell align="right">{data?.["extra_fields"]?.["expected_delivery_date"]?.slice(0,10)}</TableCell>
                                    <TableCell style={{color:"green",fontWeight:"bold"}} align="right">{data["current_status"]}</TableCell>
                       
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default TableData;