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

    return (
        <>
            <Row>
                <ModalStyled
                    visible={modalprint?.visible}
                    footer={false}
                    width={1200}
                    onCancel={() => setModalprint({ visible: false })}>
                    <Row justify="center" >
                        <Col span={6} offset={1}><img src="../images/1.png" width='100%' /></Col>
                        <Col span={7} offset={1}>
                            <Title level={2} >บริษัท ไอแอพพ์เทคโนโลยี จำกัด</Title><br />
                            <Typography style={{ marginTop: '-40px', fontSize: '20px' }}>80/359 หมู่ที่ 3  ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง ปทุมธานี 12120  โทร +66(0) 2329 - 5997</Typography>
                        </Col>
                        {modalprint?.status === "printwfh" ?
                            <>
                                <Col span={20} offset={18}><Title level={2} style={{ fontWeight: '100', paddingTop: '30px' }}>ใบลาคำร้องทั่วไป</Title></Col>
                                <ColStyledFont span={21} style={{textAlign: 'right'}}>วันที่ ..................... เดือน .................................... พ.ศ ......................</ColStyledFont>
                                <ColStyledFont span={21}>เรื่อง ..............................................</ColStyledFont>
                                <ColStyledFont span={21}>เรียน .............................................</ColStyledFont>
                                <ColStyledFont span={21} offset={6} style={{paddingTop: '30px'}}>ข้าพเจ้า นาย/นาง/นางสาว ........................................................................ รหัสพนักงาน .......................................... ตำแหน่ง ...................................</ColStyledFont>
                                <ColStyledFont span={21} >ฝ่าย .................................................................................... เบอร์โทรศัพย์ .......................................................... เริ่มปฏิบัตงานวันที่...................................................................................</ColStyledFont>
                                <ColStyledFont span={21} >มีความประสงค์ : ชี้แจง / ข้อเสนอแนะ / ให้ขอมูล และอื่น ๆ (โปรดเขียนคำร้องให้ครบถ้วน)</ColStyledFont>
                                <ColStyledFont span={21} >.............................................................................................................................
                                .............................................................................................................................................</ColStyledFont>
                                <ColStyledFont span={21} >.............................................................................................................................
                                .............................................................................................................................................</ColStyledFont>
                                <ColStyledFont span={21}>จึงเเรียนมาเพื่อโปรดพิจารณา</ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingTop: '50px' }}>ลงชื่อ .....................................................................</ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right'}}>(...................................................................)</ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right',paddingRight:'80px'}}>ผู้ขอคำร้อง</ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingTop: '40px' }}>ลงชื่อ .....................................................................</ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right'}}>(...................................................................)</ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right',paddingRight:'80px'}}>ผู้อนุมัติ</ColStyledFont>


                            </>

                            : null
                            }

                    </Row>
                    <Row justify="center" >


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
        font-size: 18px;
    }
    .ant-table-tbody>tr: last-child >td {
        border-bottom: none;
    }
    .ant-table-thead>tr>th {
        position: relative;
        color: #000;
        background: #fff !important;
        font-size: 22px;
        border: 0.5px solid #000;
    }
    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #000; */
        transition: background 0.3s;
        background: #fff;
        border: 0.5px solid #000;
        font-size: 20px;

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
        font-size: 22px;
        border: 0.5px solid #000;
    }
    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #000; */
        transition: background 0.3s;
        background: #fff;
        border: 0.5px solid #000;
        font-size: 20px;

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