import React, { useEffect, useState } from "react";
import axios from "axios";

import TableData from './Table';
import Header from './Header';
import './App.css'
import CardData from './CardData';

const App = ({handleScan}) => {

  const [data, setData]=useState([]);
  const [code,setCode]=useState({});
  var del=0,ood=0,int=0,un=0,niy=0;

  useEffect(() => {
    const data = {
      BearerToken: "tTU3gFVUdP",
      Body: {
        email: { email: "malhotragaurav371@gmail.com" },
      },
    };
    axios
      .post(`/latest/shipments/gauravmalhotra`, data.Body.email, {
        headers: {
          Authorization: "Bearer tTU3gFVUdP",
        },
      })
      .then((res) => {
        setData(res.data.data)
      })
  }, []);
  // console.log(data);
  useEffect(() => {
    data.forEach(value => {
      if(value.current_status_code =='DEL')
      del++;
      else if(value.current_status_code=='OOD')
      ood++;
      else if(value.current_status_code=='INT')
      int++;
    })
    setCode({del,ood,int})
  },)
  return( 
    <div className='app'>
      <Header />
      <div className="card">
       <CardData DEL={code.del} OOD={code.ood} INT={code.int}/>
      </div>
      <div className='appTable'>
        <TableData tableData={data} handleScan={handleScan} />        
      </div>    
    </div>
  );
};

export default App;
