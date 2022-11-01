import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import RequestToOffsiteModal from '../Components/Modal/Modal_Leave'
import PrintRequestToOffsite from '../Components/Modal/Print_Leave'
import PritntDetail from '../Components/Modal/print_Detail'
import React, { useState } from 'react'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch, Tabs, Input } from 'antd';
import { SearchOutlined, DiffOutlined, FormOutlined, DeleteFilled, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const App: React.FC = () => {
    const [modal, setModal] = useState({})
    const [modalprintreqesttooffsite, setModalprintreqesttooffsite] = useState({})
    const [modaldetail, setModaldetail] = useState({})
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState()
    const dataSource = [
        {
            location: 'บ้าน',
            data: '1/2/65',
            budget: '500',
            status: 'no',
            basis: '',
        },
        {
            location: 'หลวง',
            data: '3/4/99',
            budget: '420',
            status: 'Yes',
            basis: '',
        }

    ];
    const dataSourcecar = [
        {
            location: 'ชู้',
            data: '6/7/12',
            budget: '300',
            status: 'Yes',
            basis: '',
        },
        {
            location: 'นักศึกษาสาว',
            data: '5/12/66',
            budget: '120',
            status: 'no',
            basis: '',
        }

    ];
    const columns: any = [
        {
            title: 'วันที่',
            dataIndex: 'data',
            key: 'data',
            align: 'center',
            filteredValue: [searchText],
            onFilter: (value, record) => {
                return record.location.includes(value) ||
                    record.data.includes(value) ||
                    record.budget.includes(value) ||
                    record.status.includes(value) ||
                    record.basis.includes(value);

            }
        },
        {
            title: 'สถานที่',
            dataIndex: 'location',
            key: 'location',
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
            title: 'รายละเอียด',
            dataIndex: '',
            key: '',
            align: 'center',
            width: '8%',
            render: (_: any, record: any) => (
                <Row justify='center' gutter={0} style={{ width: "100%" }}>
                    <Col span={2} offset={0} style={{ marginRight: "40px", }}>
                        <Button
                            onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการเบิกงบประมาณ", status: "detailRto" })}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },
        // {
        //     title: 'การจัดการ',
        //     dataIndex: 'management',
        //     key: 'management',
        //     align: 'center',
        //     width: '13%',
        //     render: (_: any, record: any) => (
        //         <Row justify='center' gutter={0} style={{ width: "100%" }}>
        //             <Col span={2} offset={0} style={{ marginRight: "40px", }}>
        //                 <Button
        //                     onClick={() => setModal({header: "แก้ไขการขอออกนอกสถานที่", status: "RTO", visible: true}
        //                     )}
        //                     style={{ background: 'none', border: 'none' }} >
        //                     <FormOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
        //                 </Button>
        //             </Col>
        //             <Col span={1} offset={0} style={{ marginRight: "40px" }}>
        //                 <Button
        //                     onClick={() => setModalprintreqesttooffsite({visible: true, header: "เอกสารปฏิบัติงานนอกสถานที่",status: "Request-to-offsite"})}
        //                     style={{ background: 'none', border: 'none' }} >
        //                     <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
        //                 </Button>
        //             </Col>
        //         </Row>
        //     ),
        // },
    ];
    return (
        <>
            <NavbarHead />
            <Row>
                <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>เบิกงบประมาณ</p></Col>
            </Row>
            <Row justify="center">
                <Col span={22}><DividerStyled /></Col>
            </Row>
            <Row justify="center">
                <Col span={10} offset={2} >
                    <Form.Item>
                        <Input
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                            style={{ borderRadius: "16px", width: '100%', height: '47px', fontSize: '18px', background: '#fff', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }}
                        /></Form.Item></Col>
                <Col span={3} offset={1}>
                    <ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>ค้นหา</ButtonStyledd></Col>
                <Col span={5} offset={0}>
                    <ButtonStyledd onClick={() => setModal({ status: "RTO", visible: true, header: "เบิกงบประมาณ" })}
                        icon={<DiffOutlined />} style={{ background: '#F1BE44', width: '65%', marginTop: '0px' }}>เบิกงบประมาณ</ButtonStyledd></Col>
            </Row>
            <Row justify='center' style={{ marginTop: "20px" }}>
                <Col span={22} offset={6}>
                    <TabsStyled defaultActiveKey="1">
                        <Tabs.TabPane tab="โดยสารโดยรถส่วนตัว" key="1">
                            <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="เดินทางโดยรถสาธารณะ" key="2">
                            <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSourcecar} columns={columns} />
                        </Tabs.TabPane>
                    </TabsStyled>
                </Col>
            </Row>
            {RequestToOffsiteModal(modal, setModal)}
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
                    font - size: 24px;
      }
                `
const DividerStyled = styled(Divider)`
                background: #064595 ;
                height: 2px;
                margin-top: -80px;
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
                    border - radius: 10px !important;
    }

                .ant-table {
                    border - radius: 30px;
    }

    .ant-table-tbody>tr>td {
                    transition: background 0.3s;
                background: #DEE7F1;
                border-bottom: 2px solid white;
                font-size: 16px;
                font-weight: 900;
    }

    .ant-table-tbody>tr: last-child >td {
                    border - bottom: none;
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
                    border - bottom: none;
    }

    .ant-table-tbody>tr >td : last-child{
                    border - right: none;
    }
                `

export default App;

