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
            title: '?????????????????????????????????????????????',
            dataIndex: 'Date_Now',
            key: 'Date_Now',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: '?????????????????????????????????',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
            width: '14%',
            fixed: true,
        },
        {
            title: '?????????????????????????????????',
            dataIndex: 'Leave_Start',
            key: 'Leave_Start',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: '???????????????????????????',
            dataIndex: 'Leave_End',
            key: 'Leave_End',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: '??????????????????????????????',
            dataIndex: 'Num_Leave',
            key: 'Num_Leave',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: '???????????????????????????????????????',
            dataIndex: 'Total_Leave',
            key: 'Total_Leave',
            align: 'center',
            width: '10%',
            fixed: true,
        },
        {
            title: '????????????????????????????????????',
            dataIndex: 'Sig_Leave',
            key: 'Sig_Leave',
            align: 'center',
            width: '12%',
            fixed: true,
        },
        {
            title: '??????????????????????????????????????????',
            dataIndex: 'Sig_Leader',
            key: 'Sig_Leader',
            align: 'center',
            width: '12%',
            fixed: true,
        },
        {
            title: '??????????????????????????????',
            dataIndex: 'USubmit',
            key: 'USubmit',
            align: 'center',
            width: '12%',
            fixed: true,
        },

    ]
    const columnss: any = [
        {
            title: '?????????????????????????????????????????????',
            dataIndex: 'Date_Now',
            key: 'Date_Now',
            align: 'center',
        },
        {
            title: '?????????????????????????????????',
            dataIndex: 'Detail',
            key: 'Detail',
            align: 'center',
        },
        {
            title: '?????????????????????????????????',
            dataIndex: 'Leave_Start',
            key: 'Leave_Start',
            align: 'center',
        },
        {
            title: '???????????????????????????',
            dataIndex: 'Leave_End',
            key: 'Leave_End',
            align: 'center',
        },
        {
            title: '??????????????????????????????',
            dataIndex: 'Num_Leave',
            key: 'Num_Leave',
            align: 'center',
        },
        {
            title: '???????????????????????????????????????',
            dataIndex: 'Total_Leave',
            key: 'Total_Leave',
            align: 'center',
        },
        {
            title: '????????????????????????????????????',
            dataIndex: 'Sig_Leave',
            key: 'Sig_Leave',
            align: 'center',
        },
        {
            title: '??????????????????????????????????????????',
            dataIndex: 'Sig_Leader',
            key: 'Sig_Leader',
            align: 'center',
        },
        {
            title: '??????????????????????????????',
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
            title: '???????????????',
            dataIndex: 'no',
            key: 'no',
            align: 'center',
            width: '8%',
        },
        {
            title: '????????????',
            dataIndex: 'idu',
            key: 'idu',
            align: 'center',
            width: '8%',
        },
        {
            title: '???????????? - ?????????????????????',
            dataIndex: 'fnamelname',
            key: 'fnamelname',
            align: 'center',
        },
        {
            title: '?????????????????????',
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
            title: '???????????????',
            key: 'no',
            dataIndex: 'no',
            align: 'center',
            width: '8%',
        },
        {
            title: '????????????',
            key: 'idu',
            dataIndex: 'idu',
            align: 'center',
            width: '8%',
        },
        {
            title: '???????????? - ??????????????????????????????????????????',
            key: 'fnamelname',
            dataIndex: 'fnamelname',
            align: 'center',
        },
        {
            title: '?????????????????????',
            key: 'at',
            dataIndex: 'at',
            align: 'center',
        },
        {
            title: '??????????????????????????????',
            key: 'detail',
            dataIndex: 'detail',
            align: 'center',
        },
        {
            title: '????????????????????????',
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
            title: '?????????',
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
            htitles: '?????????????????????????????? / ?????????????????????????????????',
            index: 'leader',
            key: 'leader',
            align: 'center',
        },
        {
            htitles: '??????????????????????????????',
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
                    <Form>
                        <Col span={20} offset={2}>
                            <Button onClick={downloadPdf} style={{ width: "100%", fontSize: '32px', height: '50px', border: ' 1px solid #000' }}>?????????????????????????????????</Button></Col>
                        <Row justify="center" id='ToPrint'>
                            <Col span={20} offset={13}><img src="../images/1.png" width='40%' style={{ marginLeft: '10px',paddingTop: '80px' }} /></Col>
                            <Col span={20} offset={1}><Title style={{ textAlign: 'center' }}>?????????????????? ???????????????????????????????????????????????? ???????????????</Title></Col>

                            <Row justify="center" >
                                {modalprint?.status === "Leave" ?
                                    <>

                                        <Col span={20} offset={18}>
                                            <Form.Item>
                                                <Title level={2} style={{ fontWeight: '100', paddingTop: '30px' }}>????????????????????????????????? 2565</Title>
                                            </Form.Item>
                                        </Col>
                                        <ColStyledFont span={21} offset={1} >
                                            <Form.Item>
                                            <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '10px', marginBottom: '-20px', fontWeight: '100' }}>
                                                ?????????????????????????????????......................... ???????????? - ???????????? ............................................................................ ????????????????????? .............................???????????????.............................
                                            </Title>
                                            </Form.Item>
                                        </ColStyledFont>
                                        <ColStyledFont span={21} offset={1} style={{ textAlign: 'center', border: '1px solid #000' }}>
                                            <Form.Item>
                                            <Title style={{ fontSize: '20px', color: '#000', textAlign: 'center', marginTop: '10px', marginBottom: '-20px', fontWeight: '100' }}>
                                                ??????????????????-??????????????????????????????????????????????????????(???????????????????????????????????????????????????????????????????????????????????????/???????????????????????????????????????????????????????????????????????????????????? 3 ?????????????????????????????????????????????????????? 1 ???????????????)
                                            </Title>
                                            </Form.Item>
                                        </ColStyledFont>
                                        <ColStyledFont span={21} offset={1}>
                                            <Form.Item>
                                                <TableStyled style={{ width: "100%" }} pagination={{ pageSize: 30 }} dataSource={dataSource} columns={columns} size="middle" />
                                            </Form.Item>
                                        </ColStyledFont>
                                        <ColStyledFont span={21} offset={1} style={{ textAlign: 'center', border: '1px solid #000' }}>
                                            <Form.Item>
                                            <Title style={{ fontSize: '20px', color: '#000', textAlign: 'center', marginTop: '10px', marginBottom: '-20px', fontWeight: '100' }}>
                                                ??????????????????-??????????????????????????????????????????????????????(???????????????????????????????????????????????????????????????????????????????????????/???????????????????????????????????????????????????????????????????????????????????? 3 ?????????????????????????????????????????????????????? 1 ???????????????)
                                            </Title>
                                            </Form.Item>
                                        </ColStyledFont>
                                        <ColStyledFont span={21} offset={1}>
                                            <Form.Item>
                                                <TableStyled style={{ width: "100%", marginBottom: '100px' }} dataSource={dataSources} columns={columns} />
                                            </Form.Item>
                                        </ColStyledFont>

                                    </>
                                    : modalprint?.status === "Request-to-offsite" ?
                                        <>

                                            <Col span={20} offset={16}>
                                                <Form.Item>
                                                    <Title level={2} style={{ fontWeight: '100', paddingTop: '30px' }}>
                                                        ????????????????????????????????????????????????????????????
                                                    </Title>
                                                </Form.Item>
                                            </Col>
                                            <ColStyledFont span={21} offset={1} style={{ textAlign: 'right' }}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        ?????????????????? .......................................
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        <Checkbox style={{ paddingRight: '10px' }} />
                                                        ????????????????????????????????????????????? : .....................................................
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        <Checkbox style={{ paddingRight: '10px' }} />
                                                        ???????????????????????????????????????????????? : .....................................................
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        ???????????????????????????????????????????????? : .....................................................
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1}>
                                                <Form.Item>
                                                    <TableStyled style={{ width: "100%" }} dataSource={DataRequest} columns={columnsrequest} />
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'left', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        (????????????????????? 3 ??????????????????????????????????????????????????????????????????????????????????????????)
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1} style={{ border: '1px solid #000', textAlign: 'center', fontSize: '22px' }}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'center', marginTop: '10px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        ???????????????????????????????????????????????????????????????????????????????????????     /      ?????????????????????????????????????????????????????????????????????
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1}>
                                                <Form.Item>
                                                    <TableStyled style={{ width: "100%" }} dataSource={datasave} columns={columnsave} />
                                                </Form.Item>
                                            </ColStyledFont>

                                            <ColStyledFont span={21} offset={1} >
                                                <Form.Item >
                                                    <TableStyledd style={{ width: "100%", marginTop: '-24px' }} dataSource={datatotal} columns={columnstota} />
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', paddingTop: '40px' }}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        ?????????????????? .....................................................................
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1} style={{ textAlign: 'right', marginBottom: '20px' }}>
                                                <Form.Item>
                                                    <Title style={{ fontSize: '20px', color: '#000', textAlign: 'right', marginTop: '20px', marginBottom: '-20px', fontWeight: '100' }}>
                                                        (.......................................................................................)
                                                    </Title>
                                                </Form.Item>
                                            </ColStyledFont>
                                            <ColStyledFont span={21} offset={1} >
                                                <Form.Item>
                                                    <table style={{ border: ' 1px solid #000', width: '70%', textAlign: 'center', marginTop: '40px', margin: 'auto', marginBottom: '100px' }}>
                                                        <tr>
                                                            <th style={{ border: ' 1px solid #000', width: '50%', fontWeight: '100', fontSize: '20px' }}>?????????????????????????????? / ?????????????????????????????????</th>
                                                            <th style={{ border: ' 1px solid #000', width: '50%', fontWeight: '100', fontSize: '20px' }}>??????????????????????????????</th>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ border: ' 1px solid #000', paddingTop: '0px', fontSize: '20px' }}>
                                                                ?????????????????? ................................. <br />
                                                                (.......................................) <br />
                                                                ............/................/...........
                                                            </td>
                                                            <td style={{ border: ' 1px solid #000', fontSize: '20px' }}>
                                                                ?????????????????? ................................. <br />
                                                                (.......................................) <br />
                                                                ............/................/...........
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </Form.Item>
                                            </ColStyledFont>

                                        </>


                                        : null
                                }
                            </Row>
                        </Row>
                    </Form>
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