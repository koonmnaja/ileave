import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar_Admin'
import AddUserModal from '../Components/Modal/Add_User_Modal'
import PritntDetail from '../Components/Modal/print_Detail'
import { Column } from '@ant-design/plots';
import { Button, Form, Row, Col, Divider, DatePicker, Table, Tabs, Input } from 'antd';
import { SearchOutlined, UserAddOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const App: React.FC = () => {
  const [modal, setModal] = useState({})
  const [modaldetail, setModaldetail] = useState({})
  const [status, setStatus] = useState()

  const data = [
    {
      "Month": "January",
      "type": "Leave",
      "value": 3
    },
    {
      "Month": "January",
      "type": "Work from home",
      "value": 5
    },
    {
      "Month": "January",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "January",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "February",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "February",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "February",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "February",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "March",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "March",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "March",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "March",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "April",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "April",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "April",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "April",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "May",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "May",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "May",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "May",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "June",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "June",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "June",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "June",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "July",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "July",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "July",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "July",
      "type": "Sick Leave",
      "value": 1
    },
    {
      "Month": "August",
      "type": "Leave",
      "value": 1
    },
    {
      "Month": "August",
      "type": "Work from home",
      "value": 1
    },
    {
      "Month": "August",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "August",
      "type": "Sick Leave",
      "value": 2
    },
    {
      "Month": "September",
      "type": "Leave",
      "value": 3
    },
    {
      "Month": "September",
      "type": "Work from home",
      "value": 2
    },
    {
      "Month": "September",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "September",
      "type": "Sick Leave",
      "value": 2
    },
    {
      "Month": "October",
      "type": "Leave",
      "value": 3
    },
    {
      "Month": "October",
      "type": "Work from home",
      "value": 2
    },
    {
      "Month": "October",
      "type": "Reauest to offsite",
      "value": 1
    },
    {
      "Month": "October",
      "type": "Sick Leave",
      "value": 2
    },
    {
      "Month": "November",
      "type": "Leave",
      "value": 3
    },
    {
      "Month": "November",
      "type": "Work from home",
      "value": 2
    },
    {
      "Month": "November",
      "type": "Reauest to offsite",
      "value": 2
    },
    {
      "Month": "November",
      "type": "Sick Leave",
      "value": 2
    },
    {
      "Month": "December",
      "type": "Leave",
      "value": 3
    },
    {
      "Month": "December",
      "type": "Work from home",
      "value": 2
    },
    {
      "Month": "December",
      "type": "Reauest to offsite",
      "value": 2
    },
    {
      "Month": "December",
      "type": "Sick Leave",
      "value": 2
    },
  ];
  const config = {
    data,
    xField: 'Month',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
      radius: [0, 0, 0, 0],

    },

  };

  const dataSourceleave = [
    {
      key: '',
      data: '',
      start_data: '',
      end_data: '',
      leavetype: '',
      number: '',
      status: '',
    },
    {
      key: '',
      data: '',
      start_data: '',
      end_data: '',
      leavetype: '',
      number: '',
      status: '',
    },
    {
      key: '',
      data: '',
      start_data: '',
      end_data: '',
      leavetype: '',
      number: '',
      status: '',
    },

  ];
  const columnsleave: any = [
    {
      itle: 'วันที่',
      dataIndex: 'data',
      key: 'data',
      align: 'center',
    },
    {
      title: 'ลาจากวันที่',
      dataIndex: 'start_data',
      key: 'start_data',
      align: 'center',

    },
    {
      title: 'วันที่สิ้นสุด',
      dataIndex: 'end_data',
      key: 'end_data',
      align: 'center',

    },
    {
      title: 'ประเภทการลา',
      dataIndex: 'leavetype',
      key: 'leavetype',
      align: 'center',

    },
    {
      title: 'จำนวนวันลา',
      dataIndex: 'number',
      key: 'number',
      align: 'center',

    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      align: 'center',

    },
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: '8%',
      render: (_: any, record: any) => (
        <Row justify='center' gutter={0} style={{ width: "100%" }}>
          <Col span={2} offset={0} style={{ marginRight: "40px", }}>
            <Button
              onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการลา", status: "detailleave" })}
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
      date: '',
      Start_Data: '',
      story: '',
      summon: '',
      status: '',
  },
  {
      No: '',
      date: '',
      Start_Data: '',
      story: '',
      summon: '',
      status: '',
  },
  ];
  const columnswork: any = [
    {
      title: 'ลำดับ',
      dataIndex: 'No',
      key: 'No',
      align: 'center',
      width: '5%'
  },
  {
      title: 'วันที่',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
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
      dataIndex: 'manage',
      key: 'manage',
      align: 'center',
      width: '8%',
      render: (_: any, record: any) => (
        <Row justify='center' gutter={0} style={{ width: "100%" }}>
          <Col span={2} offset={0} style={{ marginRight: "40px", }}>
            <Button
              onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการลา", status: "detailwork" })}
              style={{ background: 'none', border: 'none' }} >
              <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
            </Button>
          </Col>
        </Row>
      )
    },
  ]
  const dataSourcerequest = [
    {
      location: '',
      data: '',
      budget: '',
      status: '',
      basis: '',
  },
  {
      data: '',
      budget: '',
      status: '',
      basis: '',
  }

  ];
  const columnsrequest: any = [
    {
      title: 'วันที่',
      dataIndex: 'data',
      key: 'data',
      align: 'center',
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
      title: '',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: '8%',
      render: (_: any, record: any) => (
        <Row justify='center' gutter={0} style={{ width: "100%" }}>
          <Col span={2} offset={0} style={{ marginRight: "40px", }}>
            <Button
              onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการลา", status: "detailrequest" })}
              style={{ background: 'none', border: 'none' }} >
              <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
            </Button>
          </Col>
        </Row>
      )
    },
  ]

  return (
    <>
      <NavbarHead />
      <Row>
        <Col span={20} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '-10px' }}>รายงานผลรวม</p></Col>
      </Row>
      <Row justify="center">
        <Col span={22}><DividerStyled /></Col>
      </Row>

      {/* <Row justify="center">
        <Col span={15}>
          <Column {...config} />
        </Col>
      </Row> */}

      <Row justify="center">
        <Col span={12} offset={1}><Form.Item><Input style={{ marginTop: '50px', borderRadius: "16px", width: '100%', height: '47px', fontSize: '18px', background: '#fff', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }} /></Form.Item></Col>
        <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ marginTop: '50px', background: '#F1BE44', width: '150px' }}>ค้นหา</ButtonStyledd></Col>
      </Row>
      <Row justify='center' style={{ marginTop: "20px" }}>
        <Col span={22} >
          <TabsStyled defaultActiveKey="1">
            <Tabs.TabPane tab="การลา" key="1">
              <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> การลา</p>
              <TableStyled style={{ width: "100%" }} dataSource={dataSourceleave} columns={columnsleave} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="คำร้องทั่วไป" key="2">
              <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> คำร้องทั่วไป</p>
              <TableStyled style={{ width: "100%" }} dataSource={dataSourcework} columns={columnswork} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="เบิกงบประมาณ" key="3">
              <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> เบิกงบประมาณ</p>
              <TableStyled style={{ width: "100%" }} dataSource={dataSourcerequest} columns={columnsrequest} />
            </Tabs.TabPane>
          </TabsStyled>
        </Col>
      </Row>
      {AddUserModal(modal, setModal)}
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
const ArrowRightOutlinedStyled = styled(ArrowRightOutlined)`
    width: 10% ;
`
const DatePickerStyled = styled(DatePicker)`
    width: 45% ;
    borderColor: #BFBFBF;
    height: 50px;
    border-Radius: 20px;
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
    border-Radius:10px;
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