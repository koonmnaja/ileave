import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import WorkFromHomeModal from '../Components/Modal/Work_From_Home_Modal'
import PritntDetail from '../Components/Modal/print_Detail'
import PrintLeave from '../Components/Modal/print_work'
import PrintLeaver from '../Components/Modal/Print_Leave'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch, Input,notification } from 'antd';
import { SearchOutlined, DiffOutlined, FormOutlined, DeleteFilled, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import Router from 'next/router';
interface ITable {
  detail: string
  status: string

}
const { RangePicker } = DatePicker;
interface DataType {
    key: string;
    no: string;
    date: string;
    start_date: string;
    story: string;
    summon: string;
    status: string;
}
type DataIndex = keyof DataType;
const App: React.FC = () => {
    const [data, setLeave] = useState<ITable[]>([])
    const [modal, setModal] = useState({})
    const [modalprint, setModalprint] = useState({})
    const [modalprintwork, setModalprintwork] = useState({})
    const [modaldetail, setModaldetail] = useState({})
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState()
    const onChangeStatus = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        // setStatus(checked)
    };
    const [filter, setFilter] = useState({
        "where": {},
        "query": "",
        "skip": 0
      })
    
      const queryTable = async (filter: any) => {
        
        console.log("token >>>>>>>> ", filter)
        setLoading(true)
        const result = await axios({
          method: 'post',
          url: `/api/wfh/query`,
          data: filter
        }).catch((err) => {
          if (err) {
            console.log('err',err)
          }
        })
        console.log('result',result?.data)
        if (result?.status === 200) {
          
          setLeave(result?.data?.data)
          setLoading(false)
        } else if (result?.status === 401) {
          notification['error']({
            message: 'Query ข้อมูลไม่าสำเร็จ',
            description: 'กรุณาเข้าสู่ระบบ',
          })
          Router.push("/table")
    
        } else {
          
          setLeave([])
          setLoading(false)
        }
      };
      useEffect(() => {
        console.log("user?.token >>>>>>>> ", filter)
        queryTable(filter)
      }, [filter, setFilter])

    const dataSource = [
        {
            no: '1',
            date: '1/10/65',
            start_date: '6/12/66',
            story: 'ดี',
            summon: 'มนุษย์',
            
        },
        {
            no: '2',
            date: '5/12/99',
            start_date: '16/5/89',
            story: 'ลี',
            summon: 'คน',
            
        }

    ];
    const columns = [
        {
            title: 'ลำดับ',
            dataIndex: 'no',
            key: 'no',
            align: 'center',
            width: '5%',
            filteredValue: [searchText],
            onFilter: (value: any, record: any) => {
                return record.no.includes(value) ||
                    record.start_date.includes(value) ||
                    record.story.includes(value) ||
                    record.summon.includes(value) ||
                    record.status.includes(value);
            }
            // onFilter: (value, record) => {
            //     return record.no.includes(value) ||
            //         record.start_data.includes(value) ||
            //         record.story.includes(value) ||
            //         record.summon.includes(value) ||
            //         record.status.includes(value);
            // },
        },
        {
            title: 'วันที่',
            dataIndex: 'detail',
            key: 'detail',
            align: 'center',
        },
        {
            title: 'เริ่มปฏิบัติงานวันที่',
            dataIndex: 'status',
            key: 'status',
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
                            onClick={() => setModaldetail({ visible: true, header: "รายละเอียดคำร้องทั่วไป", status: "Detailcry", data: record })}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                    <Col span={1} offset={0} style={{ marginRight: "40px" }}>
                        <Button
                            onClick={() => setModalprintwork({ visible: true, header: "เอกสารปฏิบัติงานนอกสถานที่", status: "Request-to-offsite" })}
                            style={{ background: 'none', border: 'none' }} >
                            <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                    <Col span={1} offset={0} style={{ marginRight: "40px" }}>
                        <Button
                            onClick={() => setModalprint({ visible: true, header: "ใบลาคำร้องทั่วไป", status: "printwfh" })}
                            style={{ background: 'none', border: 'none' }} >
                            <PrinterOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#000" }} />
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
            </Row>
            <Row justify="center">
                <Col span={20}><DividerStyled />
                </Col>
                <Col span={10} offset={2} >
                    <Form.Item><Input
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        style={{ borderRadius: "16px", width: '100%', height: '47px', fontSize: '18px', background: '#fff', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }}
                    /></Form.Item>
                </Col>
                <Col span={3} offset={1}>
                    <ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>ค้นหา</ButtonStyledd></Col>
            </Row>
            <Row justify='center' style={{ width: "100%", marginTop: "10px" }}>
                <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row>
            {WorkFromHomeModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
            {PrintLeaver(modalprintwork, setModalprintwork)}
            {PritntDetail(modaldetail, setModaldetail)}
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