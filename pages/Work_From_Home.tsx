import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import WorkFromHomeModal from '../Components/Modal/Work_From_Home_Modal'
import PrintLeave from '../Components/Modal/print_work'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch } from 'antd';
import { SearchOutlined, DiffOutlined, FormOutlined, DeleteFilled, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprint, setModalprint] = useState({})
    const [status, setStatus] = useState()
    const onChangeStatus = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        // setStatus(checked)
    };

    const dataSource = [
        {
            No: '',
            Start_Data: '',
            Detail: '',
            SaveWork: '',
            status: 'อนุมัติ'
        },
        {
            No: '',
            Start_Data: '',
            Detail: '',
            SaveWork: '',
            status: 'อนุมัติ',
        }

    ];
    const columns: any = [
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
            title: 'เรื่อง',
            dataIndex: 'story',
            key: 'story',
            align: 'center',
        },
        {
            title: 'เรียน',
            dataIndex: 'summon',
            key: 'summon',
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
            title: '',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
            width: '5%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModal({ visible: true, header: "รายละเอียดคำร้องทั่วไป", status: "Detail",data:record })}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },

    ];
    return (
        <>
            <NavbarHead />
            <Row>
                <Col span={10} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '70px', marginBottom: '20px' }}>ใบคำขอทั่วไป</p></Col>
                <Col span={3} offset={6}><ButtonStyledd onClick={() => setModal({ visible: true, header: "ใบคำร้องทั่วไป", status: "WFH" })}
                    icon={<DiffOutlined />} style={{ background: '#F1BE44', width: '85%', marginTop: '83px' }}>เพิ่มคำร้อง</ButtonStyledd></Col>
                <Col span={1} offset={0}><ButtonStyledd onClick={() => setModalprint({ visible: true, header: "เพิ่มงานประจำวัน", status: "printwfh" })}
                    icon={<PrinterOutlined style={{ width: "100%", fontSize: "24px", marginBottom: '10px' }} />} style={{ background: '#F1BE44', width: '100%', marginTop: '83px' }}></ButtonStyledd></Col>
            </Row>
            <Row justify="center">
                <Col span={20}><DividerStyled /></Col>
            </Row>
            <Row justify='center' style={{ width: "100%", marginTop: "10px" }}>
                <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row>
            {WorkFromHomeModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
        </>
    );
};

const ArrowRightOutlinedStyled = styled(ArrowRightOutlined)`
    width: 10% ;
`
const DatePickerStyled = styled(DatePicker)`
    width: 45% ;
    borderColor: #BFBFBF;
    height: 50px;
    border-Radius: 16px;
    background: #fff;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    .ant-picker-input > input {
        font-size: 24px;
      }
`
const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -50px;
`
const DividerStyledd = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -60px;
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