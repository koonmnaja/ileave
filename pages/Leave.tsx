import React, { useRef, useState } from 'react';
import "antd/dist/antd.css";
import type { InputRef } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import NavbarHead from '../Components/Layout/Navbar'
import LeaveModal from '../Components/Modal/LeaveModal'
import PrintLeave from '../Components/Modal/Print_Leave'
import PritntDetail from '../Components/Modal/print_Detail'
import { Button, Form, Row, Col, Divider, DatePicker, Table, Tabs, Input, Space } from 'antd';
import { SearchOutlined, DiffOutlined, PrinterOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
interface IModalLeave {
    header?: string
    status?: string
    visible?: boolean
    data?: any
}
interface DataType {
    key: string;
    data: string;
    start_data: string;
    end_data: string;
    leavetype: string;
    number: string;
    status: string;
}

type DataIndex = keyof DataType;
const App: React.FC = () => {
    const [modal, setModal] = useState<IModalLeave>({
        header: "",
        status: "",
        visible: false,
        data: {},
    })
    const [modalprint, setModalprint] = useState({})
    const [modaldetail, setModaldetail] = useState({})
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);


    const data: DataType[] = [
       {
            key: '1',
            data: 'Joe Black',
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
            end_data: '13/6/65',
            leavetype: 'คนดีมาก',
            number: '30',
            status: 'ไม่อนุมัติ',
        },

    ];

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block', fontSize: '18px', }}
                />
                <Space>
                    <Button

                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="middle"
                        style={{ width: 90, border: '1px solid #F1BE44', color: '#064595', backgroundColor: '#F1BE44', fontSize: '18px' }}
                    >
                        ค้นหา
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="middle"
                        style={{ width: 90, border: '1px solid #DEE7F1', color: '#064595', backgroundColor: '#DEE7F1', fontSize: '18px' }}
                    >
                        รีเซ็ต
                    </Button>
                    <Button
                        type="link"
                        size="middle"
                        style={{ fontSize: '18px' }}
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        คืนค่าข้อมูล
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns: ColumnsType<DataType> = [
        {
            title: 'วันที่',
            dataIndex: 'data',
            key: 'data',
            align: 'center',
            ...getColumnSearchProps('data'),
        },
        {
            title: 'ลาจากวันที่',
            dataIndex: 'start_data',
            key: 'start_data',
            align: 'center',
            ...getColumnSearchProps('start_data'),
        },
        {
            title: 'วันที่สิ้นสุด',
            dataIndex: 'end_data',
            key: 'end_data',
            align: 'center',
            ...getColumnSearchProps('end_data'),
        },
        {
            title: 'ประเภทการลา',
            dataIndex: 'leavetype',
            key: 'leavetype',
            align: 'center',
            ...getColumnSearchProps('leavetype'),
        },
        {
            title: 'จำนวนวันลา',
            dataIndex: 'number',
            key: 'number',
            align: 'center',
            ...getColumnSearchProps('number'),
        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            ...getColumnSearchProps('status')
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
                            onClick={() => setModaldetail({ visible: true, header: "รายละเอียดการลา", status: "detailleave" })}
                            style={{ background: 'none', border: 'none' }} >
                            <SearchOutlined style={{ fontSize: "24px", fontFamily: "SukhumvitSet-Bold", color: "#064595" }} />
                        </Button>
                    </Col>
                </Row>
            )
        },

    ];
    return (
        <div >
            <NavbarHead />
            <Row>
                <Col span={10} offset={2}><p style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '70px', marginBottom: '20px' }}>ประวัติการลา</p></Col>
                <Col span={2} offset={5}>
                    <ButtonStyledd onClick={() => setModal({ visible: true, header: "เพิ่มการลา", status: "Leave" })}
                        icon={<DiffOutlined />}
                        style={{ background: '#F1BE44', width: '100%', marginTop: '85px' }}>เพิ่มการลา</ButtonStyledd></Col>
                <Col span={1} offset={0}><ButtonStyledd onClick={() => setModalprint({ visible: true, header: "เพิ่มงานประจำวัน", status: "Leave" })}
                    icon={<PrinterOutlined style={{ width: "100%", fontSize: "24px", marginBottom: '10px' }} />}
                    style={{ background: '#F1BE44', width: '100%', marginTop: '85px', marginLeft: '20px' }}></ButtonStyledd></Col>
                <Col span={22} offset={1}><DividerStyled /></Col>
            </Row>
            <Row justify="center">
                <Col span={12} >
                    <Form.Item>
                        <DatePickerStyled
                        />
                        <ArrowRightOutlinedStyled />
                        <DatePickerStyled
                        /></Form.Item></Col>
                <Col span={3} offset={1}><ButtonStyledd
                    icon={< SearchOutlined />} style={{ background: '#F1BE44', width: '150px' }} >ค้นหา</ButtonStyledd></Col>
            </Row>
            <Row justify='center' style={{ marginTop: "20px" }}>
                <Col span={22} offset={4}>
                    <TableStyled style={{ width: "80%" , marginTop:'50px'}}columns={columns} dataSource={data} />
                </Col>
            </Row>
            {/* <Row justify='center' style={{ width: "100%", marginTop: "50px" }}>
                <TableStyled pagination={false} style={{ width: "70%" }} dataSource={dataSource} columns={columns} />
            </Row> */}

            {LeaveModal(modal, setModal)}
            {PrintLeave(modalprint, setModalprint)}
            {PritntDetail(modaldetail, setModaldetail)}
        </div>

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