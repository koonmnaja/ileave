import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar_Admin'
import AddUserModal from '../Components/Modal/Request_Modal'
import PrintLeave from '../Components/Modal/Print_Leave'
import PrintRequestToOffsite from '../Components/Modal/Print_Leave'
import PritntDetail from '../Components/Modal/print_Detail'
import { Button, Form, Row, Col, Divider, Tabs, Table, Switch, Input } from 'antd';
import { SearchOutlined, CheckCircleOutlined, CloseCircleOutlined, CheckOutlined } from '@ant-design/icons';

const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprint, setModalprint] = useState({})
    const [modalprintreqesttooffsite, setModalprintreqesttooffsite] = useState({})
    const [modaldetail,setModaldetail] = useState({})


    const dataSourceleave = [
        {
            Data: '',
            Start_Data: '',
            End_Data: '',
            LeaveType: '',
            Detail: '',
            Number: '',
            status: 'อนุมัติ',
        },
        {
            Data: '',
            Start_Data: '',
            End_Data: '',
            LeaveType: '',
            Detail: '',
            Number: '',
            status: 'ไม่อนุมัติ',
        },
        {
            Data: '',
            Start_Data: '',
            End_Data: '',
            LeaveType: '',
            Detail: '',
            Number: '',
            status: 'อนุมัติ',
        },


    ];
    const columnsleave: any = [
        {
            title: 'วันที่',
            dataIndex: 'data',
            key: 'data',
            align: 'center',
            width: '10%',
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
            title: 'รายละเอียด',
            dataIndex: '',
            key: '',
            align: 'center',  
            width:'8%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() =>setModaldetail({ visible: true, header: "รายละเอียดการลา", status: "detailleave"})}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: "10%",
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                     <Col span={4} style={{ marginRight: "40px", }}>
                        <Button onClick={() => setModal({ visible: true, header: "อนุมัติการลา", status: "submitleave" })}
                            style={{ background: 'none', border: 'none' }} >
                            <CheckOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#239B56" }} />
                        </Button>
                    </Col>

                    <Col span={6} offset={1} style={{ marginRight: "20px" }}>
                        <Button onClick={() => setModal({ visible: true, header: "ไม่อนุมัติการลา", status: "unsubmitleave" })}
                            style={{ background: 'none', border: 'none' }}>
                            <CloseCircleOutlined
                                style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#FE0000', }} />

                        </Button>
                    </Col>
                   
                </Row>
            )
        }
    ];
    const dataSourcework = [
        {
            No: '',
            Start_Data: '',
            Detail: '',
            SaveWork: '',
            status: 'ไม่อนุมัติ'
        },
        {
            No: '',
            Start_Data: '',
            Detail: '',
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
            width: '5%'
        },
        {
            title: 'เริ่มปฏิบัติงานวันที่',
            dataIndex: 'Start_Data',
            key: 'Start_Data',
            align: 'center',
            width: '20%',
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
            title: 'รายละเอียด',
            dataIndex: '',
            key: '',
            align: 'center',  
            width:'8%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() =>setModaldetail({ visible: true, header: "รายละเอียดการเบิกงบประมาณ", status: "detailwork"})}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: '10%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={4} style={{ marginRight: "40px", }}>
                        <Button onClick={() => setModal({ visible: true, header: "อนุมัติการ Work from home", status: "submitwork" })}
                            style={{ background: 'none', border: 'none' }} >
                            <CheckOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#239B56" }} />
                        </Button>
                    </Col>
                    <Col span={4} offset={1} style={{ marginRight: "20px" }}>
                        <Button onClick={() => setModal({ visible: true, header: "ไม่อนุมัติการ Work from home", status: "unsubmitwork" })}
                            style={{ background: 'none', border: 'none' }}>
                            <CloseCircleOutlined
                                style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#FE0000', }} />
                        </Button>
                    </Col>
                    

                </Row>
            ),
        },
    ];
    const dataSourcerequest = [
        {
            location: '',
            data: '',
            detail: '',
            to_distance: '',
            return_distance: '',
            budget: '',
            status: '',
            basis: '',
        },
        {
            data: '',
            detail: '',
            to_distance: '',
            return_distance: '',
            budget: '',
            status: '',
            basis: '',
        }

    ];
    const columnsrequest: any = [
        {
            title: 'สถานที่',
            dataIndex: 'location',
            key: 'location',
            align: 'center',
        },
        {
            title: 'วันที่',
            dataIndex: 'data',
            key: 'data',
            align: 'center',
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'detail',
            key: 'detail',
            align: 'center',
        },
        {
            title: 'ระยะทางขาไป',
            dataIndex: 'to_distance',
            key: 'to_distance',
            align: 'center',
        },
        {
            title: 'ระยะทางขากลับ',
            dataIndex: 'return_distance',
            key: 'return_distance',
            align: 'center',
        },
        {
            title: 'งบประมาณ',
            dataIndex: 'budget',
            key: 'budget',
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
            title: 'รายละเอียด',
            dataIndex: '',
            key: '',
            align: 'center',  
            width:'8%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() =>setModaldetail({ visible: true, header: "รายละเอียดการเบิกงบประมาณ", status: "detailRto"})}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },
        {
            title: 'การจัดการ',
            dataIndex: 'management',
            key: 'management',
            align: 'center',
            width: '10%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={4} style={{ marginRight: "40px", }}>
                        <Button onClick={() => setModal({ visible: true, header: "อนุมัติการเบิกงบประมาณ", status: "submitrequest" })}
                            style={{ background: 'none', border: 'none' }} >
                            <CheckOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#239B56" }} />
                        </Button>
                    </Col>
                    <Col span={4} offset={1} style={{ marginRight: "20px" }}>
                        <Button onClick={() => setModal({ visible: true, header: "ไม่อนุมัติการเบิกงบประมาณ", status: "unsubmitrequest" })}
                            style={{ background: 'none', border: 'none' }}>
                            <CloseCircleOutlined
                                style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: '#FE0000', }} />
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
            <Row justify='center' style={{ marginTop: "20px" }}>
                <Col span={22} >
                    <TabsStyled defaultActiveKey="1">
                        <Tabs.TabPane tab="การลา" key="1">
                            <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> การลา</p>
                            <TableStyled style={{ width: "100%" }} dataSource={dataSourceleave} columns={columnsleave} />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="คำร้องทั่วไป" key="2">
                            <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> คำร้องทั่วไป</p>
                            <TableStyled style={{ width: "100%" }} dataSource={dataSourcework} columns={columnswork} />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="เบิกงบประมาณ" key="3">
                            <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> เบิกงบประมาณ</p>
                            <TableStyled style={{ width: "100%" }} dataSource={dataSourcerequest} columns={columnsrequest} />
                        </Tabs.TabPane>
                    </TabsStyled>
                </Col>
            </Row>


            {AddUserModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
            {PrintRequestToOffsite(modalprintreqesttooffsite, setModalprintreqesttooffsite)}
            {PritntDetail(modaldetail, setModaldetail)}
        </>
    );
};
const TabsStyled = styled(Tabs)`
.ant-tabs-tab-btn {
    outline: none;
    transition: all 0.3s;
    font-size: 26px;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1890ff;
    text-shadow: 0 0 0.25px currentcolor;
    font-size: 26px;

}
`
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
    background: none;
    border: none;
    .ant-btn:hover, .ant-btn:focus {
        color: #000;
        border-color: #40a9ff;
        background: #fff;
    }
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