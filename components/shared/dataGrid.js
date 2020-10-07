import React, {useState} from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

function DataGrid(props){

    const renderHeader=props.headerInfo.sort((a,b) => a.displayOrder > b.displayOrder).map((header, index)=>{
        return(
            <Table.HeaderCell key={index}>{header.name}</Table.HeaderCell>
        );
    });

    const renderData=props.dataSource.map((dataRow, index)=>{
        const renderColumns=props.headerInfo.map((header, colIndex)=>{
            return(
                <Table.Cell key={colIndex}>
                    {dataRow[header['boundColumn']]}
                </Table.Cell>
            );
        })

        return(
            <Table.Row key={index}>
                {renderColumns}
            </Table.Row>
        );
    });

    return(
        <Table compact celled>
            <Table.Header>
                <Table.Row>
                    {renderHeader}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {renderData}
            </Table.Body>
        </Table>
    );
}

export default DataGrid;