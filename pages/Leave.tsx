import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import LeaveModal from '../Components/Modal/LeaveModal'
import PrintLeave from '../Components/Modal/Print_Leave'
import PritntDetail from '../Components/Modal/print_Detail'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { Button, Form, Row, Col, Divider, DatePicker, Table, Tabs, Input } from 'antd';
import { SearchOutlined, DiffOutlined, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
interface IModalLeave {
    header?: string
    status?: string
    visible?: boolean
    data?: any
}

const App: React.FC = () => {
    const [modal, setModal] = useState<IModalLeave>({
        header: "",
        status: "",
        visible: false,
        data: {},
    })
    const [modalprint, setModalprint] = useState({})
    const [modaldetail, setModaldetail] = useState({})
    const [filter, setFilter] = useState({})
    const [searchText, setSearchText] = useState({
        "where": {},
        "query": "",
        "limit": 10,
        "skip": 0,
    })
    // const onChangeStatus = (checked: boolean) => {
    //     console.log(`switch to ${checked}`);
    //     // setStatus(checked)
    // };

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
            width: '8%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการลา", status: "detailleave" })}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },

    ];
    const dataSourcework = [
        {
            No: '',
            Start_Data: '',
            story: '',
            summon: '',
            status: 'อนุมัติ'
        },
        {
            No: '',
            Start_Data: '',
            story: '',
            summon: '',
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
            width: '8%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการเบิกงบประมาณ", status: "detailwork" })}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },
    ]
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
    ]

    const onSearch = (value: any) => console.log(value);

    return (
        <div >
            <NavbarHead />
            <Row>
                <Col span={10} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '70px', marginBottom: '20px' }}>ประวัติการลา</p></Col>
                <Col span={2} offset={5}>
                    <ButtonStyledd onClick={() => setModal({ visible: true, header: "เพิ่มการลา", status: "Leave" })}
                        icon={<DiffOutlined />}
                        style={{ background: '#F1BE44', width: '100%', marginTop: '85px' }}>เพิ่มการลา</ButtonStyledd></Col>
                <Col span={1} offset={0}><ButtonStyledd onClick={() => setModalprint({ visible: true, header: "เพิ่มงานประจำวัน", status: "Leave" })}
                    icon={<PrinterOutlined style={{ width: "100%", fontSize: "24px", marginBottom: '10px' }} />}
                    style={{ background: '#F1BE44', width: '100%', marginTop: '85px', marginLeft: '20px' }}></ButtonStyledd></Col>
                <Col span={22} offset={1}><DividerStyled /></Col>
            </Row>
            <Row justify="center">
                <Col span={12} >
                    <Form.Item>
                        <Input onChange={(e) => {
                            if (e.target?.value === "") {
                                let newFilter = { ...filter }
                                newFilter.query = e.target?.value
                                setFilter(newFilter)
                            } else if (e.target?.value !== "") {
                                setSearchText(e.target?.value)
                            }
                        }}

                        />
                        <ArrowRightOutlinedStyled />
                        <DatePickerStyled
                        /></Form.Item></Col>
                <Col span={3} offset={1}><ButtonStyledd onClick={() => {
                    let newFilter = { ...filter, query: searchText, skip: 0 }
                    setFilter(newFilter)
                }}
                    icon={< SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }} >ค้นหา</ButtonStyledd></Col>
            </Row>
            <Row justify='center' style={{ marginTop: "20px" }}>
                <Col span={22} >
                    <TabsStyled defaultActiveKey="1">
                        <Tabs.TabPane tab="การลากิจ" key="1">
                            <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> การลากิจ</p>
                            <TableStyled style={{ width: "100%" }} dataSource={dataSourceleave} columns={columnsleave} />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="ลาป่วย" key="2">
                            <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> ลาป่วย</p>
                            <TableStyled style={{ width: "100%" }} dataSource={dataSourcework} columns={columnswork} />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="ลาพักร้อน" key="3">
                            <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> ลาพักร้อน</p>
                            <TableStyled style={{ width: "100%" }} dataSource={dataSourcerequest} columns={columnsrequest} />
                        </Tabs.TabPane>
                    </TabsStyled>
                </Col>
            </Row>
            {/* <Row justify='center' style={{ width: "100%", marginTop: "50px" }}>
                <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row> */}

            {LeaveModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
            {PritntDetail(modaldetail, setModaldetail)}
        </div>

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
const ColText = styled(Col)`
    font-size: 24px;
    font-weight: 800;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color: #2D2A96;
`
const ArrowRightOutlinedStyled = styled(ArrowRightOutlined)`
    width: 10% ;
`
const DatePickerStyled = styled(DatePicker)`
    width: 45% ;
    border-Color: #BFBFBF;
    height: 50px;
    border-Radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .ant-picker-input > input {
        font-size: 24px;
      }
`
const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -40px;
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 50px;
    border-Radius:15px;
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
        font-size: 20px;
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