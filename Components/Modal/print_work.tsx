import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Form, Select, Button, Divider, Table, DatePicker, Typography, Checkbox } from 'antd'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styled from 'styled-components';
const { Title } = Typography;
const { RangePicker } = DatePicker;
const GroupModal = (
    modalprintwork: any,
    setModalprintwork: any) => {

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
            groupname: modalprintwork?.value?.group, //form.item > name="name"
            status: 1, //form.item > name="status"
        })
    }, [modalprintwork, setModalprintwork])
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
            <Row>
                <ModalStyled
                    visible={modalprintwork?.visible}
                    footer={false}
                    width={1200}
                    onCancel={() => setModalprintwork({ visible: false })}>
                    <Col span={20} offset={2}><Button onClick={downloadPdf} style={{ width: "100%", fontSize: '32px', height: '50px', border: ' 1px solid #000' }}>พิมพ์เอกสาร</Button></Col>
                    <Row justify="center" id="ToPrint" >
                        <Col span={6} offset={1}><img src="../images/1.png" width='100%' style={{paddingTop: '80px' }} /></Col>
                        <Col span={7} offset={1}>
                            <Title level={2} style={{paddingTop: '80px' }}>บริษัท ไอแอพพ์เทคโนโลยี จำกัด</Title><br />
                            <Typography style={{ marginTop: '-40px', fontSize: '20px' }}>80/359 หมู่ที่ 3  ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง ปทุมธานี 12120  โทร +66(0) 2329 - 5997</Typography>
                        </Col>
                        {modalprintwork?.status === "printwfh" ?
                            <>
                                <Col span={20} offset={18}>
                                    <Form.Item>
                                        <Title level={2} style={{ fontWeight: '100', paddingTop: '30px' }}>
                                            ใบลาคำร้องทั่วไป
                                        </Title>
                                    </Form.Item>
                                </Col>
                                <ColStyledFont span={21} style={{ textAlign: 'right' }}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            วันที่ ...............................................................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            เรื่อง ..............................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            เรียน .............................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={6} style={{ paddingTop: '30px' }}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            ข้าพเจ้า นาย/นาง/นางสาว ........................................................................ รหัสพนักงาน .......................................... ตำแหน่ง ...................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} >
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            ฝ่าย .................................................................................... เบอร์โทรศัพย์ .......................................................... เริ่มปฏิบัตงานวันที่...................................................................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} >
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            มีความประสงค์ : ชี้แจง / ข้อเสนอแนะ / ให้ขอมูล และอื่น ๆ (โปรดเขียนคำร้องให้ครบถ้วน)
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} >
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-30px', fontWeight: '100' }}>
                                            ......................................................................................................................................................................................................................................................................................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} >
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                        ......................................................................................................................................................................................................................................................................................................
                                    
                                    </Title></Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            จึงเเรียนมาเพื่อโปรดพิจารณา
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingTop: '50px' }}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            ลงชื่อ .....................................................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right' }}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            (...................................................................)
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingRight: '80px' }}>
                                    <Form.Item>
                                        <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                            ผู้ขอคำร้อง
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingTop: '40px' }}>
                                    <Form.Item>
                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                        ลงชื่อ .....................................................................
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right' }}>
                                    <Form.Item>
                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                        (...................................................................)
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>
                                <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingRight: '80px', marginBottom: '100px' }}>
                                    <Form.Item>
                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-40px', fontWeight: '100' }}>
                                        ผู้อนุมัติ
                                        </Title>
                                    </Form.Item>
                                </ColStyledFont>


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