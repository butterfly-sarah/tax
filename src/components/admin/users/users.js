import { faSort } from '@fortawesome/free-solid-svg-icons';
import './users.css'
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Users(){
    const {t}=useTranslation()
    return(
        <div className="users">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">{t("admindashBoardAllUsers")}</h3>
                <div className="col-sm-12 col-md-6 d-flex justify-content-between p-0 m-0">
                <button className='btn col-4 input' style={{"font-family":"FontAwesome"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faSort} className='mx-2' />
                sort by
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" >id</button></li>
                </ul>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <Table border="1" frame="void" rules="rows">
                    <Thead>
                    <Tr className='thead'>
                        <Th>#</Th>
                        <Th>{t("admindashboardAllUsersUserName")}</Th>
                        <Th>{t("admindashboardAllUsersEmail")}</Th>
                        <Th>{t("admindashboardAllUsersCompany")}</Th>
                        <Th>{t("admindashboardAllUsersDate")}</Th>
                        <Th>{t("admindashboardAllusersActions")}</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                        <Td className='red'>{t("admindashboardDeleteUser")}</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                        <Td className='red'>{t("admindashboardDeleteUser")}</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                        <Td className='red'>{t("admindashboardDeleteUser")}</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>{t("admindashboardEditUser")}</Td>
                        <Td className='red'>{t("admindashboardDeleteUser")}</Td>
                    </Tr>
                    </Tbody>
                </Table>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Users;