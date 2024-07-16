import React, { useState, useEffect } from 'react';
import { Table, Select, DatePicker, Input, Button } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Số Tiền',
    dataIndex: 'amount',
    key: 'amount',
    render: (text: number) => text.toLocaleString('vi-VN'),
  },
  {
    title: 'Số Dư Sau Biến Động',
    dataIndex: 'balance',
    key: 'balance',
    render: (text: number) => text.toLocaleString('vi-VN'),
  },
  {
    title: 'Nội Dung',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Thời Gian',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: (text: string) => moment(text).format('DD/MM/YYYY HH:mm:ss'),
  },
];

const PaymentHistory: React.FC = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/payment-history');
      const data = response.data.data.map((item: any, index: number) => ({ ...item, index: index + 1 }));
      setHistory(data);
    } catch (error) {
      console.error('Error fetching payment history:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    // Filtering logic based on searchText
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
    // Apply filter logic here
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(history);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'PaymentHistory');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'payment_history.xlsx');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Button type="primary" onClick={() => handleFilterChange('service', '')}>
          Nạp tiền
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <RangePicker
          style={{ marginRight: '10px' }}
          onChange={(dates) => handleFilterChange('dateRange', dates)}
        />
        <Input
          placeholder="Tìm kiếm"
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300, marginRight: '10px' }}
        />
        <Button type="primary" icon={<SearchOutlined />} onClick={() => handleSearch(searchText)}>
          Tìm kiếm
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} onClick={exportToExcel} style={{ marginLeft: '10px' }}>
          Xuất Excel
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={history}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
};

export default PaymentHistory;
