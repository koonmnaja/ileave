import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Select, Button, Divider, Table, DatePicker, Typography, Checkbox } from 'antd'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styled from 'styled-components';
const { Title } = Typography;
const { RangePicker } = DatePicker;
const GroupModal = (
    modalprint: any,
    setModalprint: any) => {

    const { Option } = Select;

    const [value, setValue] = useState(1);

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    useEffect(() => {
        form.setFieldsValue({
            groupname: modalprint?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modalprint, setModalprint])
    const dataSource = [
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: ' ',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',

        },
    ]
    const dataSources = [
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',
        },
        {
            Date_Now: '',
            Detail: '',
            Leave_Start: '',
            Leave_End: '',
            Num_Leave: '',
            Total_Leave: '',
            Sig_Leave: '',
            Sig_Leader: '',
            USubmit: '',

        },

    ]
    const columns: any = [
        {
            title: 'วันที่เขียนใบลา',
            dataIndex: 'Date_Now',
            key: 'Date_Now',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: 'สาเหตุการลา',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
            width: '14%',
            fixed: true,
        },
        {
            title: 'ลาจากวันที่',
            dataIndex: 'Leave_Start',
            key: 'Leave_Start',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: 'ถึงวันที่',
            dataIndex: 'Leave_End',
            key: 'Leave_End',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: 'จำนวนวันลา',
            dataIndex: 'Num_Leave',
            key: 'Num_Leave',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: 'วันลาที่เหลือ',
            dataIndex: 'Total_Leave',
            key: 'Total_Leave',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: 'ลายเซ็นผู้ลา',
            dataIndex: 'Sig_Leave',
            key: 'Sig_Leave',
            align: 'center',
            width: '12%',
            fixed: true,
        },
        {
            title: 'ลายเซ็นหัวหน้า',
            dataIndex: 'Sig_Leader',
            key: 'Sig_Leader',
            align: 'center',
            width: '12%',
            fixed: true,
        },
        {
            title: 'ผู้อนุมัติ',
            dataIndex: 'USubmit',
            key: 'USubmit',
            align: 'center',
            width: '12%',
            fixed: true,
        },

    ]
    const columnss: any = [
        {
            title: 'วันที่เขียนใบลา',
            dataIndex: 'Date_Now',
            key: 'Date_Now',
            align: 'center',
        },
        {
            title: 'สาเหตุการลา',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
        },
        {
            title: 'ลาจากวันที่',
            dataIndex: 'Leave_Start',
            key: 'Leave_Start',
            align: 'center',
        },
        {
            title: 'ถึงวันที่',
            dataIndex: 'Leave_End',
            key: 'Leave_End',
            align: 'center',
        },
        {
            title: 'จำนวนวันลา',
            dataIndex: 'Num_Leave',
            key: 'Num_Leave',
            align: 'center',
        },
        {
            title: 'วันลาที่เหลือ',
            dataIndex: 'Total_Leave',
            key: 'Total_Leave',
            align: 'center',
        },
        {
            title: 'ลายเซ็นผู้ลา',
            dataIndex: 'Sig_Leave',
            key: 'Sig_Leave',
            align: 'center',
        },
        {
            title: 'ลายเซ็นหัวหน้า',
            dataIndex: 'Sig_Leader',
            key: 'Sig_Leader',
            align: 'center',
        },
        {
            title: 'ผู้อนุมัติ',
            dataIndex: 'USubmit',
            key: 'USubmit',
            align: 'center',
        },
    ]


    const DataRequest = [
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
        },
    ]
    const columnsrequest: any = [
        {
            title: 'ลำดับ',
            dataIndex: 'no',
            key: 'no',
            align: 'center',
            width: '8%',
        },
        {
            title: 'รหัส',
            dataIndex: 'idu',
            key: 'idu',
            align: 'center',
            width: '8%',
        },
        {
            title: 'ชื่อ - นามสกุล',
            dataIndex: 'fnamelname',
            key: 'fnamelname',
            align: 'center',
        },
        {
            title: 'ตำแหน่ง',
            dataIndex: 'at',
            key: 'at',
            align: 'center',
        },
    ]
    const { Column, ColumnGroup } = Table;
    const datasave = [
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
            detail: '',
            money: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
            detail: '',
            money: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
            detail: '',
            money: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
            detail: '',
            money: '',
        },
        {
            no: '',
            idu: '',
            fnamelname: '',
            at: '',
            detail: '',
            money: '',
        },
    ]
    const columnsave: any = [
        {
            title: 'ลำดับ',
            key: 'no',
            dataIndex: 'no',
            align: 'center',
            width: '8%',
        },
        {
            title: 'รหัส',
            key: 'idu',
            dataIndex: 'idu',
            align: 'center',
            width: '8%',
        },
        {
            title: 'ชื่อ - นามสกุลผู้เบิก',
            key: 'fnamelname',
            dataIndex: 'fnamelname',
            align: 'center',
        },
        {
            title: 'ตำแหน่ง',
            key: 'at',
            dataIndex: 'at',
            align: 'center',
        },
        {
            title: 'รายละเอียด',
            key: 'detail',
            dataIndex: 'detail',
            align: 'center',
        },
        {
            title: 'เป็นเงิน',
            key: 'money',
            dataIndex: 'money',
            align: 'center',
            width: '10%',
        },
    ]
    const datatotal = [
        {
            total: '',
            sum: '',
        }
    ]
    const columnstota: any = [
        {
            title: 'รวม',
            key: 'total',
            dataIndex: 'total',
            align: 'right',
        },
        {
            table: '',
            key: 'sum',
            dataIndex: 'sum',
            align: 'center',
            width: '10%'
        }
    ]
    const dataleder = [
        {
            leader: '   ',
            Usub: '',
        },
    ]
    const columnsleder: any = [
        {
            htitles: 'หัวหน้างาน / หัวหน้าแผนก',
            index: 'leader',
            key: 'leader',
            align: 'center',
        },
        {
            htitles: 'ผู้อนุมัติ',
            index: 'Usub',
            key: 'Usub',
            align: 'center',
        },
    ]

    const downloadPdf = () => {
        const input: any = document.getElementById('ToPrint');
        html2canvas(input, {
            allowTaint: true,
            useCORS: true,
            scale: 2
        })
            .then((canvas) => {
                const imgData: any = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0, 203, 0);
                pdf.save(`dowlode.pdf`);
            });
    }
    
    return (
        <>
            <Row justify="center">

                <ModalStyled

                    visible={modalprint?.visible}
                    footer={false}
                    width={1200}
                    onCancel={() => setModalprint({ visible: false })}>
                    <Col span={20} offset={2}><Button onClick={downloadPdf} style={{ width: "100%", fontSize: '32px', height: '50px', border: ' 1px solid #000' }}>พิมพ์เอกสาร</Button></Col>
                    <Row justify="center" id='ToPrint'>
                        <Col span={20} offset={13}><img src="../images/1.png" width='40%' style={{ marginLeft: '10px' }} /></Col>
                        <Col span={20} offset={1}><Title style={{ textAlign: 'center' }}>บริษัท ไอแอพพ์เทคโนโลยี จำกัด</Title></Col>

                        <Row justify="center" >
                            {modalprint?.status === "Leave" ?
                                <>
                                    <Col span={20} offset={18}><Title level={2} style={{ fontWeight: '100', paddingTop: '30px' }}>ใบลาประจำปี 2565</Title></Col>
                                    <ColStyledFont span={21} offset={1} >รหัสพนักงาน......................... ชื่อ - สกุล ............................................................................ ตำแหน่ง .............................ระดับ.............................</ColStyledFont>
                                    <ColStyledFont span={21} offset={1} style={{ textAlign: 'center', border: '1px solid #000' }}>ลาป่วย-หักเงินตามวันที่ลา(กรณีเข้าสายโดยไม่มีเหตุอันควร/ไม่ได้รับการอนุมัติจากบริษัท 3 ครั้งนับเป็นขาดงาน 1 ครั้ง)</ColStyledFont>
                                    <ColStyledFont span={21} offset={1}><TableStyled  style={{ width: "100%" }} pagination={{ pageSize: 30 }}  dataSource={dataSource}  columns={columns} size="middle" /></ColStyledFont>
                                    <ColStyledFont span={21} offset={1} style={{ textAlign: 'center', border: '1px solid #000' }}>ลาป่วย-หักเงินตามวันที่ลา(กรณีเข้าสายโดยไม่มีเหตุอันควร/ไม่ได้รับการอนุมัติจากบริษัท 3 ครั้งนับเป็นขาดงาน 1 ครั้ง)</ColStyledFont>
                                    <ColStyledFont span={21} offset={1}><TableStyled style={{ width: "100%", marginBottom: '100px' }} dataSource={dataSources} columns={columns} /></ColStyledFont>
                                </>
                                : modalprint?.status === "Request-to-offsite" ?
                                    <>
                                        <Col span={20} offset={16}><Title level={2} style={{ fontWeight: '100', paddingTop: '30px' }}>ใบขออนุญาตนอกสถานที่</Title></Col>
                                        <ColStyledFont span={21} offset={1} style={{ textAlign: 'right' }}>วันที่ .......................................</ColStyledFont>
                                        <ColStyledFont span={21} offset={1}><Checkbox style={{ paddingRight: '10px' }} />  ไปทำธุระส่วนตัว : .....................................................</ColStyledFont>
                                        <ColStyledFont span={21} offset={1}><Checkbox style={{ paddingRight: '10px' }} />  ปฏิบัติงานบริษัท : .....................................................</ColStyledFont>
                                        <ColStyledFont span={21} offset={1}>ปฏิบัติงานบริษัท : .....................................................</ColStyledFont>
                                        <ColStyledFont span={21} offset={1}><TableStyled style={{ width: "100%" }} dataSource={DataRequest} columns={columnsrequest} /></ColStyledFont>
                                        <ColStyledFont span={21} offset={1}>(ไม่เกิน 3 ชั่วโมงต่อวันรวมเวลาพักกลางวัน)</ColStyledFont>
                                        <ColStyledFont span={21} offset={1} style={{ border: '1px solid #000', textAlign: 'center', fontSize: '22px' }}>บันทึกข้อมูลผู้เบิกค่าเดินทาง     /      ข้อมูลการเบิกค่าเดินทาง</ColStyledFont>
                                        <ColStyledFont span={21} offset={1}><TableStyled style={{ width: "100%" }} dataSource={datasave} columns={columnsave} /></ColStyledFont>
                                        <ColStyledFont span={21} offset={1}></ColStyledFont>
                                        <ColStyledFont span={21} offset={1} ><TableStyledd style={{ width: "100%" }} dataSource={datatotal} columns={columnstota} /></ColStyledFont>
                                        <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingTop: '40px' }}>ลงชื่อ .....................................................................</ColStyledFont>
                                        <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', marginBottom: '20px' }}>(.......................................................................................)</ColStyledFont>
                                        <ColStyledFont span={21} offset={1} >
                                            <table style={{ border: ' 1px solid #000', width: '70%', textAlign: 'center', marginTop: '40px', margin: 'auto', marginBottom: '100px' }}>
                                                <tr>
                                                    <th style={{ border: ' 1px solid #000', width: '50%', fontWeight: '100' }}>หัวหน้างาน / หัวหน้าแผนก</th>
                                                    <th style={{ border: ' 1px solid #000', width: '50%', fontWeight: '100' }}>ผู้อนุมัติ</th>
                                                </tr>
                                                <tr>
                                                    <td style={{ border: ' 1px solid #000', paddingTop: '20px' }}>
                                                        ลงชื่อ ................................. <br />
                                                        (.......................................) <br />
                                                        ............/................/...........
                                                    </td>
                                                    <td style={{ border: ' 1px solid #000' }}>
                                                        ลงชื่อ ................................. <br />
                                                        (.......................................) <br />
                                                        ............/................/...........
                                                    </td>
                                                </tr>
                                            </table>
                                        </ColStyledFont>
                                    </>


                                    : null
                            }
                        </Row>
                    </Row>

                </ModalStyled>
            </Row>

        </>
    )
}
const TableStyledd = styled(Table)`
.ant-table-tbody>tr:last-child >td {
    border-bottom: none;
    border: 1px solid #000;
    display: none;
}
    .ant-select-selector {
        border-radius: 10px !important;
    }
    .ant-table {
        border-radius: 30px;
    }
    .ant-table-tbody>tr>td {
        transition: background 0.3s;
        background: #DEE7F1;
        border-bottom: 1px solid white;
        font-size: 12px;
    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }
    .ant-table-thead>tr>th {
        position: relative;
        color: #000;
        background: #fff !important;
        font-size: 15px;
        border: 0.5px solid #000;
    }
    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #000; */
        transition: background 0.3s;
        background: #fff;
        border: 0.5px solid #000;
        font-size: 12px;

    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
        border: 1px solid #000;
    }
    .ant-table-tbody>tr >td : last-child{
        border-right: none;
        border: 0.5px solid #000;
    }
    .ant-table-pagination {
        display: none;
        flex-wrap: wrap;
        row-gap: 8px;
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
        border-bottom: 1px solid white;
        font-size: 18px;
    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }
    .ant-table-thead>tr>th {
        position: relative;
        color: #000;
        background: #fff !important;
        font-size: 15px;
        border: 0.5px solid #000;
       
    }
    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #000; */
        transition: background 0.3s;
        background: #fff;
        border: 0.5px solid #000;
        font-size: 12px;
    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
        border: 1px solid #000;
    }
    .ant-table-tbody>tr >td : last-child{
        border-right: none;
        border: 0.5px solid #000;
    }
    .ant-table-pagination {
        display: none;
        flex-wrap: wrap;
        row-gap: 8px;
    }
    
`
const ColStyledFont = styled(Col)`
    font-Size: 20px;
    color: #000;
    text-Align:left;
    margin-Top:20px;
    margin-bottom: -20px;

`

const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 40px;
    border-Radius:20px;
    font-Size: 16px;
    font-Family: Semi Bold;
    font-weight: bold;
    width: 100%;
`
const DividerStyled = styled(Divider)`
    background: #000 ;
    height: 2px;
    margin-top: 0px;
    width: 100%;
`
const ModalStyled = styled(Modal)`
    .ant-modal-content {
        border-radius: 46px;
        padding: 30px;
    }

    .ant-modal-close {
        margin-top: 20px;
        margin-right: 30px;
    }

    .ant-modal-close-x {
        font-size: 22px;
    }
`

export default GroupModal