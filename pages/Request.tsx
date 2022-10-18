import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar_Admin'
import AddUserModal from '../Components/Modal/Request_Modal'
import PrintLeave from '../Components/Modal/Print_Leave'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch, Input } from 'antd';
import { SearchOutlined, CheckCircleOutlined, CloseCircleOutlined, PrinterOutlined } from '@ant-design/icons';

const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprint, setModalprint] = useState({})
    const [status, setStatus] = useState()
    const onChangeStatus = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        // setStatus(checked)
    };

    const dataSourceleave = [
        {
            No: '',
            Employee_ID: '',
            Firsh_Name: '',
            Last_Name: '',
            Detaile: '',
            Status: false
        },
        {
            No: '',
            Employee_ID: '',
            Firsh_Name: '',
            Last_Name: '',
            Detaile: '',
            Status: false
        }

    ];
    const columnsleave: any = [
        {
            title: 'วันที่',
            dataIndex: 'data',
            key: 'data',
            align: 'center',
            width:'10%',
        },
        {
            title: 'เริ่มต้น',
            dataIndex: 'Start_Data',
            key: 'sdata',
            align: 'center',
        },
        {
            title: 'สิ้นสุด',
            dataIndex: 'End_Data',
            key: 'edata',
            align: 'center',
        },
        {
            title: 'ประเภทการลา',
            dataIndex: 'ltype',
            key: 'ltype',
            align: 'center',
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'detail',
            key: 'detail',
            align: 'center',
        },
        {
            title: 'จำนวนวันลา',
            dataIndex: 'Number',
            key: 'Number',
            align: 'center',
        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            align: 'center',

        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: "20%",
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={6} style={{ marginRight: "20px" }}>
                        <Button onClick={() => setModal({visible: true, header: "ไม่อนุมัติการลา", status: "unsubmitleave"})}
                        style={{ background: 'none', border: 'none' }}>
                            <CloseCircleOutlined
                                style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#FE0000', }} />

                        </Button>
                    </Col>
                    <Col span={4} style={{ marginRight: "40px", }}>
                        <Button onClick={() => setModal({visible: true, header: "อนุมัติการลา", status: "submitleave"})}
                        style={{ background: 'none', border: 'none' }} >
                            <CheckCircleOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#36FE00" }} />
                        </Button>
                    </Col>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModalprint({ visible: true, header: "ใบลากิจ", status: "Leave" }
                            )}
                            style={{ background: 'none', border: 'none' }} >
                            <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        }
    ];
    const dataSourcework = [
        {
            No: '1',
            Start_Data: '06/06/6666',
            Detail: '9VS8',
            SaveWork: '',
            status: 'ไม่อนุมัติ'
        },
        {
            No: '2',
            Start_Data: '00/00/0000',
            Detail: 'PumiPol Sniper',
            SaveWork: '',
            status: 'อนุมัติ',
        }

    ];
    const columnswork: any = [
        {
            title: 'ลำดับ',
            dataIndex: 'No',
            key: 'No',
            align: 'center',
            width:'5%'
        },
        {
            title: 'เริ่มปฏิบัติงานวันที่',
            dataIndex: 'Start_Data',
            key: 'Start_Data',
            align: 'center',
            width: '5%',
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
        },
        {
            title: 'บันทึกการทำงาน',
            dataIndex: 'SaveWork',
            key: 'SaveWork',
            align: 'center',

        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            width: '8%',
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: '20%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={6} style={{ marginRight: "20px" }}>
                        <Button onClick={() => setModal({ visible: true, header: "ไม่อนุมัตการ Work from home", status: "unsubmitwork" })}
                        style={{ background: 'none', border: 'none' }}>
                            <CloseCircleOutlined
                                style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#FE0000', }} />
                        </Button>
                    </Col>
                    <Col span={4} style={{ marginRight: "40px", }}>
                        <Button onClick={() => setModal({visible: true, header: "อนุมัตการ Work from home", status: "submitwork"})}
                        style={{ background: 'none', border: 'none' }} >
                            <CheckCircleOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#36FE00" }} />
                        </Button>
                    </Col>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModalprint({ visible: true, header: "ใบลากิจ", status: "Leave" })}
                            style={{ background: 'none', border: 'none' }} >
                            <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            ),
        },
    ];
    const dataSourcerequest = [
        {
            No: '',
            Start_Data: '',
            End_Data: '',
            Detail: '',
            status: false
        },
        {
            No: '',
            Start_Data: '',
            End_Data: '',
            Detail: '',
            status: false
        }

    ];
    const columnsrequest: any = [
        {
            title: 'สถานที่',
            dataIndex: 'At',
            key: 'At',
            align: 'center',
        },
        {
            title: 'วันที่',
            dataIndex: 'Data',
            key: 'Data',
            align: 'center',
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
        },
        {
            title: 'ระยะทางขาไป',
            dataIndex: 'sdistane',
            key: 'sdistane',
            align: 'center',
        },
        {
            title: 'ระยะทางขากลับ',
            dataIndex: 'bdistane',
            key: 'bdistane',
            align: 'center',
        },
        {
            title: 'งบประมาณ',
            dataIndex: 'total',
            key: 'total',
            align: 'center',
        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
           
        },
        {
            title: 'หลักฐาน',
            dataIndex: '',
            key: '',
            align: 'center',
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: '20%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={6} style={{ marginRight: "20px" }}>
                        <Button onClick={() => setModal({visible: true, header: "ไม่อนุมัติการออกนอกสถานที่", status: "unsubmitrequest"})}
                        style={{ background: 'none', border: 'none' }}>
                            <CloseCircleOutlined
                                style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#FE0000', }} />
                        </Button>
                    </Col>
                    <Col span={4} style={{ marginRight: "40px", }}>
                        <Button onClick={() => setModal({visible: true, header: "อนุมัติการออกนอกสถานที่", status: "submitrequest"})}
                        style={{ background: 'none', border: 'none' }} >
                            <CheckCircleOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#36FE00" }} />
                        </Button>
                    </Col>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModalprint({ visible: true, header: "ใบลากิจ", status: "Leave" }
                            )}
                            style={{ background: 'none', border: 'none' }} >
                            <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
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
                <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>คำขอรออนุมัติ</p></Col>
            </Row>
            <Row justify="center">
                <Col span={22}><DividerStyled /></Col>
            </Row>
            <Row>

                <Col span={12} offset={5}><Form.Item><Input style={{ borderRadius: "16px", width: '100%', height: '47px', fontSize: '18px', background: '#fff', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }} /></Form.Item></Col>
                <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>Search</ButtonStyledd></Col>
            </Row>
            <Row justify='center' style={{ marginTop: "10px" }}>
                <Col span={18} offset={0}>
                <p style={{ marginBottom: '0px',fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> การลา</p>
                <TableStyled style={{ width: "100%" }} dataSource={dataSourceleave} columns={columnsleave} />
                </Col>
            </Row>
            <Row justify='center' style={{ marginTop: "10px" }}>
                <Col span={18} offset={0}>
                <p style={{ marginBottom: '0px',fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> Work From Home</p>
                <TableStyled style={{ width: "100%" }} dataSource={dataSourcework} columns={columnswork} />
                </Col>
            </Row>
            <Row justify='center' style={{ marginTop: "10px" }}>
                <Col span={18} offset={0}>
                <p style={{ marginBottom: '0px',fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> ขออนุญาตออกนอกสถานที่</p>
                <TableStyled style={{ width: "100%" }} dataSource={dataSourcerequest} columns={columnsrequest} />
                </Col>
            </Row>
            { AddUserModal(modal, setModal) }
    { PrintLeave(modalprint, setModalprint) }
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