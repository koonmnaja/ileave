import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

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

const data: DataType[] = [
  {
    key: '1',
    data: 'Joe Black',
    start_data:'12/5/65',
    end_data: '13/5/65',
    leavetype: 'คนดี',
    number:'2',
    status: 'อนุมัติ',
  },
  {
    key: '2',
    data: 'black',
    start_data:'19/5/65',
    end_data: '13/6/65',
    leavetype: 'คนดีมาก',
    number:'30',
    status: 'ไม่อนุมัติ',
  },
  
];

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

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
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
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
      ...getColumnSearchProps('data'),
    },
    {
      title: 'ลาจากวันที่',
      dataIndex: 'start_data',
      key: 'start_data',
      ...getColumnSearchProps('start_data'),
    },
    {
      title: 'วันที่สิ้นสุด',
      dataIndex: 'end_data',
      key:'end_data',
      ...getColumnSearchProps('end_data'),
    },
    {
      title: 'ประเภทการลา',
      dataIndex: 'leavetype',
      key:'leavetype',
      ...getColumnSearchProps('leavetype'),
    },
    {
      title: 'จำนวนวันลา',
      dataIndex: 'number',
      key:'number',
      ...getColumnSearchProps('number'),
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key:'status',
      ...getColumnSearchProps('status')
    }
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default App;