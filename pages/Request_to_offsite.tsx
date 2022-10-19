import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import RequestToOffsiteModal from '../Components/Modal/Modal_Leave'
import PrintRequestToOffsite from '../Components/Modal/Print_Leave'
import React, { useState } from 'react'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch } from 'antd';
import { SearchOutlined, DiffOutlined, FormOutlined, DeleteFilled, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprintreqesttooffsite, setModalprintreqesttooffsite] = useState({})
    const [status, setStatus] = useState()
    const dataSource = [
        {
            location: '',
            data: '',
            detail: '',
            to_distance: '',
            return_distance:'',
            budget:'',
            status:'',
            basis:'',
        },
        {
            data: '',
            detail: '',
            to_distance: '',
            return_distance:'',
            budget:'',
            status:'',
            basis:'',
        }

    ];
    const columns: any = [
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
            dataIndex: 'basis',
            key: 'basis',
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
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModal({header: "แก้ไขการขอออกนอกสถานที่", status: "RTO", visible: true}
                            )}
                            style={{ background: 'none', border: 'none' }} >
                            <FormOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                    <Col span={1} offset={0} style={{ marginRight: "40px" }}>
                        <Button
                            onClick={() => setModalprintreqesttooffsite({visible: true, header: "เอกสารปฏิบัติงานนอกสถานที่",status: "Request-to-offsite"})}
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
                    <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>ขออนุญาตออกนอกสถานที่</p></Col>
                </Row>
                <Row justify="center">
                    <Col span={22}><DividerStyled /></Col>
                </Row>
                <Row justify="center">
                    <Col span={11} >
                        <Form.Item><DatePickerStyled /><ArrowRightOutlinedStyled /><DatePickerStyled /></Form.Item></Col>
                    <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>Search</ButtonStyledd></Col>
                </Row>
                <Row>
                    <Col span={3} offset={18}>
                        <ButtonStyledd onClick={() => setModal({ status: "RTO", visible: true , header: "เพิ่มการขอออกนอกสถานที่"})}
                        icon={<DiffOutlined />} style={{ background: '#F1BE44', width: '65%', marginTop: '60px' }}>Add offsite</ButtonStyledd></Col>
                </Row>
                <Row justify='center' style={{ width: "100%", marginTop: "50px" }}>
                    <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
                    
                </Row>
                {RequestToOffsiteModal(modal, setModal)}
                {PrintRequestToOffsite(modalprintreqesttooffsite, setModalprintreqesttooffsite)}
            </>
        );
    };

const ColText = styled(Col)`
    font-size: 20px;
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

