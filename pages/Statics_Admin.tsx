import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar_Admin'
import AddUserModal from '../Components/Modal/Add_User_Modal'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Switch, Input,notification } from 'antd';
import { SearchOutlined, UserAddOutlined, ArrowRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import Router from 'next/router';
interface ITable {
  detail: string
  status: string
  

}
const { RangePicker } = DatePicker;
const App: React.FC = () => {
  const [data, setLeave] = useState<ITable[]>([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState({})
  const [status, setStatus] = useState()
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
      url: `/api/leave/query`,
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
  }, [filter, setFilter]);

  const dataSource = [
    {
      No: '1',
      Employee_ID: '123456',
      Firsh_Name: 'ภูมิพล',
      Last_Name: 'ลากหัวคมคม',
      Role: 'มือสไนเปอ',
      Position: '9'
    },
    {
      No: '2',
      Employee_ID: '789456',
      Firsh_Name: 'โอโอริโอ้', 
      Last_Name: 'ข้าวกล่อง',
      Role: 'นักเยด',
      Position: '10'

    }

  ];
  const columns: any = [
    {
      title: 'รายละเอียด',
      dataIndex: 'detail',
      key: 'detail',
      align: 'center',
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
    },

  ]

  return (
    <>
      <NavbarHead />
      <Row>
        <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>Overview report</p></Col>
      </Row>
      <Row justify="center">
        <Col span={22}><DividerStyled /></Col>
      </Row>
      <Row justify="center">
        <Col span={11} >
          <Form.Item><DatePickerStyled /><ArrowRightOutlinedStyled /><DatePickerStyled /></Form.Item></Col>
        <Col span={3} offset={0}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '100px' }}>Search</ButtonStyledd></Col>
      </Row>
      <Row>
        <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>Employee Statistics</p></Col>
      </Row>
      <Row justify="center">
        <Col span={22}><DividerStyled /></Col>
      </Row>
      <Row justify="center">
        <Col span={12} offset={1}><Form.Item><Input style={{ borderRadius: "24px", width: '100%', height: '47px', fontSize: '18px', background: '#BFBFBF' }} /></Form.Item></Col>
        <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }}>Search</ButtonStyledd></Col>
      </Row>
      <Row justify='center' style={{ width: "100%", marginTop: "10px" }}>
        <TableStyled style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
      </Row>
      {AddUserModal(modal, setModal)}
    </>
  );
};

const ArrowRightOutlinedStyled = styled(ArrowRightOutlined)`
    width: 20% ;
`
const DatePickerStyled = styled(DatePicker)`
    width: 35% ;
    borderColor: #BFBFBF;
    height: 50px;
    border-Radius: 20px;
    background: #BFBFBF;
`
const DividerStyled = styled(Divider)`
    background: #064595 ;
    height: 2px;
    margin-top: -50px;
`
const ButtonStyledd = styled(Button)`
    color: #064595;
    height: 50px;
    border-Radius:20px;
    font-Size: 18px;
    fontFamily: Semi Bold;
    font-weight: bold;
    
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
        font-size: 18px;
        border-right: 1px solid white;
        border-left: 1px solid white;
    }

    .ant-table-tbody>tr>td {
        /* border-bottom: 1px solid #f0f0f0; */
        transition: background 0.3s;
        background: #DEE7F1;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        font-size: 16px;
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