
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function Compapers(){
    return(
        <div className="services">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">company papers</h3>
                <div className="col-sm-12 col-md-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <Table border="1" frame="void" rules="rows">
                    <Thead>
                    <Tr className='thead'>
                        <Th>#</Th>
                        <Th>document</Th>
                        <Th>status</Th>
                        <Th>upload date</Th>
                        <Th>last modified</Th>
                        <Th>Actions</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>03</Td>
                        <Td>VAT</Td>
                        <Td className='green'>valid</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>edit</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>withhold tax</Td>
                        <Td className='red'>not valid</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>edit</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>payroll tax</Td>
                        <Td className='red'>not valid</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>upload</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>annual income</Td>
                        <Td className='green'>valid</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>edit</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>annual balance</Td>
                        <Td className='green'>valid</Td>
                        <Td>12-12-2024</Td>
                        <Td>12-12-2024</Td>
                        <Td>view</Td>
                        <Td>edit</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </div>
        </div>
    )
}
export default Compapers;