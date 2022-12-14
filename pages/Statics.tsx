import React, { useState, useEffect } from 'react';
import chart1 from 'react-dom';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar_Admin'
import AddUserModal from '../Components/Modal/Add_User_Modal'
import PritntDetail from '../Components/Modal/print_Detail'
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import { Column } from '@ant-design/plots';
import { Button, Form, Row, Col, Divider, DatePicker, Table, Tabs, Input, Spin,notification } from 'antd';
import { SearchOutlined, UserAddOutlined, ArrowRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import Router from 'next/router';

interface IUserstatus {
  detail: string
  dragDate: Date
  uptoDate: Date
  status: string
  approver: string
  number: number
  user_id: string
  ltype_id: string
  createdAt: Date
}

export  const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/table');
  const data = await res.json();

    return {
      props: { ninjas: data}
    }

}

const App: React.FC = ({ ninjas }) => {
  const [leave, setLeave] = useState<IUserstatus[]>([])
  const [modal, setModal] = useState({})
  const [modaldetail, setModaldetail] = useState({})
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [status, setStatus] = useState()
  const [filter, setFilter] = useState({
    "where": {},
    "query": "",
    "skip": 0
  })

  const queryTable = async (filter: any) => {
    setLoading(true)
    const result = await axios({
        method: 'post',
        url: `/api/leave/query`,
        data: filter
    }).catch((err) => {
        if (err) {
            if (err?.response?.data?.message?.status === 401) {
                notification["error"]({
                    message: "Query ข้อมูลไม่สำเร็จ",
                    description: "กรุณาเข้าสู่ระบบ",
                })
            }
        }
    })
    if (result?.status === 200) {
        setLeave(result?.data?.data)
        setLoading(false)
    } else {
        setLeave([])
        setLoading(false)
    }
    console.log("result===========",result?.data?.data)
};
  useEffect(() => {
    console.log("user?.token >>>>>>>> ", filter)
    queryTable(filter)
  }, [filter, setFilter])


  const asyncFetch = () => {
    fetch('http://localhost:4000/table')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'ltype_id',
    yField: 'status',
    seriesField: 'ltype_id',
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },

  };


  const leavel = [
    {
      key: '1',
      data: 'Joe Black2',
      start_data: '12/5/65',
      end_data: '13/5/65',
      leavetype: 'คนดี',
      number: '2',
      status: 'อ นุมัติ',
    },
    {
      key: '2',
      data: 'black',
      start_data: '19/5/65',
      end_data: '16/6/65',
      leavetype: 'คนดีมาก',
      number: '30',
      status: 'ไม่อนุมัติ',
    },

  ];
  const columnsleave: any = [
    {
      title: 'วันที่',
      dataIndex: 'data',
      key: 'data',
      align: 'center',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record.data.includes(value) ||
          record.start_data.includes(value) ||
          record.end_data.includes(value) ||
          record.leavetype.includes(value) ||
          record.number.includes(value) ||
          record.status.includes(value);
      },
    },
    {
      title: 'รายละเอียด',
      dataIndex: `ninja?.status`,
      key: 'detail',
      align: 'center',
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
    },
    {
      title: 'เริ่มลา',
      dataIndex: 'dragDate',
      key: 'dragDate',
      align: 'center',

    },
    {
      title: 'สิ้นสุดการลา',
      dataIndex: 'uptoDate',
      key: 'uptoDate',
      align: 'center',
    },
    {
      title: 'จำนวน',
      dataIndex: 'number',
      key: 'number',
      align: 'center',
    },
    {
      title: 'สถานะ',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
    },
    {
      title: 'เริ่มลา',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      align: 'center',

    },
    {
      title: 'สิ้นสุดการลา',
      dataIndex: 'approver',
      key: 'approver',
      align: 'center',
    },

    // {
    //   title: 'สถานะ',
    //   dataIndex: 'status',
    //   key: 'status',
    //   align: 'center',

    // },
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
      no: '1',
      date: '1/10/65',
      start_date: '6/12/66',
      story: 'ดี',
      summon: 'มนุษย์',
      status: 'อนุมัติ'
    },
    {
      no: '2',
      date: '5/12/99',
      start_date: '16/5/89',
      story: 'ลี',
      summon: 'คน',
      status: 'อนุมัติ',
    }
  ];
  const columnswork: any = [
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
    },
    {
      title: 'วันที่',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
    },
    {
      title: 'เริ่มปฏิบัติงานวันที่',
      dataIndex: 'start_date',
      key: 'start_date',
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
    },
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
  const columnsrequest: any = [
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

      <Row justify="center">
        <Col  >
          {/* <Column {...config} />; */}
          <iframe style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', width: '1000px', height: '680px' }}
            src="https://charts.mongodb.com/charts-uplode-test-pemav/embed/charts?id=636a600d-019d-4f8c-86a4-2dbf47ce4388&maxDataAge=10&theme=light&autoRefresh=true"></iframe>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={12} offset={1}>
          <Form.Item>
            <Input onChange={(e) => {
              setSearchText(e.target.value)
            }}
              style={{ marginTop: '50px', borderRadius: "16px", width: '100%', height: '47px', fontSize: '18px', background: '#fff', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }} /></Form.Item></Col>
        <Col span={3} offset={1}><ButtonStyledd icon={<SearchOutlined />} style={{ marginTop: '50px', background: '#F1BE44', width: '150px' }}>ค้นหา</ButtonStyledd></Col>
      </Row>
      <Row justify='center' style={{ marginTop: "20px" }}>
          <Col span={22} > 
            <TabsStyled defaultActiveKey="1">
              <Tabs.TabPane tab="การลา" key="1">
                <p style={{ marginBottom: '0px', fontSize: '33px', fontWeight: 'bold', color: '#064595', paddingTop: '10px' }}> การลา</p>
                <TableStyled style={{ width: "100%" }}  dataSource={leavel} columns={columnsleave} />
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
      <h1>ควย</h1>
          {ninjas.map((ninja: any) => (
            <div key={ninja._id}>
              <a>
                <h3>{ninja?.status}</h3>
              </a>
            </div>
          )
             )}
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