import React, { useState }from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar_Admin'
import AddUserModal from '../Components/Modal/Modal_Leave'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch, Input } from 'antd';
import { SearchOutlined, UserAddOutlined,FormOutlined,DeleteOutlined } from '@ant-design/icons';

const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [status, setStatus] = useState()

    const dataSource = [
        {
            No: '1',
            Employee_ID: '123456',
            Firsh_Name: 'ภูมิพล',
            Last_Name: 'ลากหัวคมคม',
            Role: 'มือสไนเปอ',
            Position: '9'
        },
        {
            No: '2',
            Employee_ID: '789456',
            Firsh_Name: 'โอโอริโอ้',
            Last_Name: 'ข้าวกล่อง',
            Role: 'นักเยด',
            Position: '10'

        }

    ];
    const columns: any = [
        {
            title: 'รหัสพนักงาน',
            dataIndex: 'Employee_ID',
            key: 'Employee_ID',
            align: 'center',
        },
        {
            title: 'ชื่อ',
            dataIndex: 'Firsh_Name',
            key: 'Firsh_Name',
            align: 'center',
        },
        {
            title: 'นามสกุล',
            dataIndex: 'Last_Name',
            key: 'Last_Name',
            align: 'center',
        },
        {
            title: 'เบอร์โทร',
            align: 'center',
        },
        {
            title: 'อีเมล',
            align: 'center',
        },
        {
            title: 'ระดับการทำงาน',
            align: 'center',
        },
        {
            title: 'ตำแหน่ง',
            dataIndex: 'Role',
            key: 'Role',
            align: 'center',
        },
        {
            title: 'แผนก',
            dataIndex: 'Position',
            key: 'Position',
            align: 'center',
        },
        {
            title: 'หน้าที่',
            align:'center',
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: '20%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModal({header: "แก้ไขการขอออกนอกสถานที่", status: "Adduser", visible: true}
                            )}
                            style={{ background: 'none', border: 'none' }} >
                            <FormOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                    <Col span={1} offset={0} style={{ marginRight: "40px" }}>
                        <Button
                            onClick={() => setModal({header: "ลบพนักงาน", status: "Delete", visible: true}
                            )}
                            style={{ background: 'none', border: 'none' }} >
                            <DeleteOutlined  style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            ),
        },
    ];



    return (
        <>
            <NavbarHead />
            <Row>
                <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>เพิ่มพนักงาน</p></Col>
            </Row>
            <Row justify="center">
                <Col span={22}><DividerStyled /></Col>
            </Row>
            <Row>
                <Col span={12} offset={5}><Form.Item><Input style={{ borderRadius: "24px", width: '100%', height: '47px', fontSize: '18px', background: '#fff',boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }} /></Form.Item></Col>
                <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>Search</ButtonStyledd></Col>
                
                <Col span={3} offset={18} style={{ paddingTop:'40px'}}><ButtonStyledd onClick={() => setModal({ visible: true, header: "เพิ่มพนักงาน",status:"Adduser"})}
                    icon={<UserAddOutlined />} style={{ background: '#F1BE44', width: '150px' }}>Add User</ButtonStyledd></Col>
            </Row>
            <Row justify='center' style={{ width: "100%", marginTop: "10px" }}>
                
                <TableStyled style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row>
            {AddUserModal(modal, setModal)}
        </>
    );
};


const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -50px;
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 50px;
    border-Radius:10px;
    font-Size: 22px;
    fontFamily: Semi Bold;
    font-weight: bold;
    padding-top: 10px;
`

const TableStyled = styled(Table)`
    .ant-select-selector {
        border-radius: 10px !important;
    }

    .ant-table {
        border-radius: 30px;
    }

    .ant-table-tbody>tr>td {
        transition: background 0.3s;
        background: #DEE7F1;
        border-bottom: 2px solid white;
        font-size: 16px;
        font-weight: 900;
    }

    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }

    .ant-table-thead>tr>th {
        position: relative;
        color: white;
        background: #064595 !important;
        font-size: 22px;
        border-right: 1px solid white;
        border-left: 1px solid white;
    }

    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #f0f0f0; */
        transition: background 0.3s;
        background: #DEE7F1;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        font-size: 20px;
        font-weight: 900;
    }

    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }

    .ant-table-tbody>tr >td : last-child{
        border-right: none;
    }
`
export default App;