import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import LeaveModal from '../Components/Modal/LeaveModal'
import PrintLeave from '../Components/Modal/Print_Leave'
import PritntDetail from '../Components/Modal/print_Detail'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { Button, Form, Row, Col, Divider, DatePicker, Table } from 'antd';
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
    const [modaldetail,setModaldetail] = useState({})
    // const onChangeStatus = (checked: boolean) => {
    //     console.log(`switch to ${checked}`);
    //     // setStatus(checked)
    // };

    const dataSource = [
        {
            Data: '',
            Start_Data: '12/10/2565',
            End_Data: '17/10/2565',
            LeaveType: '',

            status: '',
        },
        {
            Data: '',
            Start_Data: '01/01/2000',
            End_Data: '11/11/2011',
            LeaveType: '',

            status: '',
        },
        {
            Data: '',
            Start_Data: '',
            End_Data: '',
            LeaveType: '',

            status: '',
        },

    ];
    const columns: any = [
        {
            title: 'วันที่',
            dataIndex: 'dataN',
            key: 'dataN',
            align: 'center',
            width: '10%',
        },
        {
            title: 'วันที่เริ่มต้น',
            dataIndex: 'Start_Data',
            key: 'sdata',
            align: 'center',
        },
        {
            title: 'วันที่สิ้นสุด',
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
            title: 'จำนวนวันลา',
            dataIndex: 'tleave',
            key: 'tleave',
            align: 'center',
        },
        {
            title: '',
            dataIndex: 'status',
            key: 'status',
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

    // const printDocument = () => {
    //     const input: any = document.getElementById('ToPrint');
    //     html2canvas(input)
    //         .then((canvas) => {
    //             let imgWidth = 208;
    //             let imgHeight = canvas.height * imgWidth / canvas.width;
    //             const imgData = canvas.toDataURL('img/png');
    //             const pdf = new jsPDF('p', 'mm', 'a4');
    //             pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    //             // pdf.output('dataurlnewwindow');
    //             pdf.save("download.pdf");
    //         })
    //         ;
    // }
    return (
        <div >
            <NavbarHead />
            <Row>
                <Col span={10} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '70px', marginBottom: '20px' }}>ประวัติการลา</p></Col>
                <Col span={3} offset={5}>
                    <ButtonStyledd onClick={() => setModal({ visible: true, header: "เพิ่มการลา", status: "Leave" })}
                    icon={<DiffOutlined />}
                    style={{ background: '#F1BE44', width: '65%', marginTop: '85px' }}>เพิ่มการลา</ButtonStyledd></Col>
                <Col span={1} offset={0}><ButtonStyledd onClick={() => setModalprint({ visible: true, header: "เพิ่มงานประจำวัน", status: "Leave" })}
                    icon={<PrinterOutlined style={{ width: "100%", fontSize: "24px", marginBottom: '10px' }} />}
                    style={{ background: '#F1BE44', width: '100%', marginTop: '85px' }}></ButtonStyledd></Col>
                <Col span={22} offset={1}><DividerStyled /></Col>
            </Row>
            <Row justify="center">
                <Col span={12} >
                    <Form.Item>
                        <DatePickerStyled 
                        // onChange={(event) => {
                        //     setSearchLeave(event.target.value);
                        // }}
                        />
                        <ArrowRightOutlinedStyled />
                        <DatePickerStyled 
                        /></Form.Item></Col>
                <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>ค้นหา</ButtonStyledd></Col>
            </Row>

            <Row justify='center' style={{ width: "100%", marginTop: "50px" }}>
                <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row>

            {LeaveModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
            {PritntDetail(modaldetail, setModaldetail)}
        </div>

    );
};

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