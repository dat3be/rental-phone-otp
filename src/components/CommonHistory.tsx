import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Select } from 'antd';
import axios from 'axios';
import { DownloadOutlined } from '@ant-design/icons';
import '../css/commonHistory.css';

const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Dịch Vụ',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Số Tiền',
    dataIndex: 'amount',
    key: 'amount',
    render: (text: number) => (
      <span style={{ color: text > 0 ? 'green' : 'red' }}>
        {text > 0 ? `+${text.toLocaleString()}` : `-${text.toLocaleString()}`}
      </span>
    ),
  },
  {
    title: 'Thời Gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Mã Giao Dịch',
    dataIndex: 'transactionId',
    key: 'transactionId',
  },
  {
    title: 'Số Dư Sau Biến Động',
    dataIndex: 'balanceAfter',
    key: 'balanceAfter',
  },
];

const HistoryList: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/history');
      const data = response.data.data.map((item: any, index: number) => ({ ...item, index: index + 1 }));
      setData(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    const filteredData = data.filter((item: any) =>
      item.service.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  const handleExport = () => {
    // Implement export to Excel functionality
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Lịch sử chung</h2>
        <Select defaultValue="vn" style={{ width: 150 }} onChange={(value) => console.log(value)}>
          <Option value="vn">Việt Nam</Option>
          <Option value="la">Lào</Option>
        </Select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Search
          placeholder="Tìm kiếm dịch vụ"
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          value={searchText}
          style={{ width: 300, marginLeft: '16px' }}
        />
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={handleExport}
        >
          Xuất Excel
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="transactionId"
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
};

export default HistoryList;
