import React, { useState, useEffect } from 'react';
import AdminLayoutPage from '../index';
import DataGrid from '../../../components/shared/dataGrid';

function ClientSummary(props) {
  console.log(props); 
  return (
    <AdminLayoutPage headerText='Clients List' headerSubText='Manage Clients'>
      <DataGrid headerInfo={props.headerInfo} dataSource={props.clientsList} />      
    </AdminLayoutPage>

  );
}

ClientSummary.defaultProps = {
  headerInfo:[
    { id:1, name:'Name', boundColumn:'name', displayOrder : 1},
    { id:2, name:'Address1', boundColumn:'address1', displayOrder : 2},
    { id:3, name:'Address2', boundColumn:'address2', displayOrder : 3},
    { id:4, name:'City', boundColumn:'city', displayOrder : 4},
  ]
}

ClientSummary.getInitialProps = async () =>{
  const resp = await fetch('http://localhost:3000/api/admin/client');
  const json = await resp.json();
  return({
      clientsList : [...json]
  })
}

export default ClientSummary;