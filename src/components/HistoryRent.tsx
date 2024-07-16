import React, { useState, useEffect } from 'react';
import { Table, Select, DatePicker, Input, Button, message } from 'antd';
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
    title: 'Dịch Vụ',
    dataIndex: 'service_name',
    key: 'service_name',
    render: (text: string, record: any) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={record.service_icon} alt={text} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
        {text}
      </div>
    ),
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
    render: (text: number) => text.toLocaleString('vi-VN'),
  },
  {
    title: 'Số Điện Thoại',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Thời Gian',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: (text: string) => moment(text).format('DD/MM/YYYY HH:mm:ss'),
  },
  {
    title: 'Trạng Thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Tin Nhắn',
    dataIndex: 'message',
    key: 'message',
  },
];

const HistoryRent: React.FC = () => {
  const [history, setHistory] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
    phone: '',
    service: '',
    status: '',
  });

  useEffect(() => {
    fetchHistory();
    fetchServices();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/history');
      const data = response.data.data.map((item: any, index: number) => ({ ...item, index: index + 1 }));
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/services?country=vn');
      setServices(response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'History');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'history.xlsx');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Lịch sử thuê số</h2>
        <Button type="primary" onClick={() => handleFilterChange('service', '')}>
          Thuê số
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <RangePicker
          style={{ marginRight: '10px' }}
          onChange={(dates) => handleFilterChange('dateRange', dates)}
        />
        <Input
          placeholder="Số điện thoại"
          onChange={(e) => handleFilterChange('phone', e.target.value)}
          style={{ width: 200, marginRight: '10px' }}
        />
        <Select
          defaultValue=""
          style={{ width: 150, marginRight: '10px' }}
          onChange={(value) => handleFilterChange('service', value)}
        >
          <Option value="">Tất cả</Option>
          {services.map((service: any) => (
            <Option key={service.id} value={service.name}>{service.name}</Option>
          ))}
        </Select>
        <Select
          defaultValue=""
          style={{ width: 150, marginRight: '10px' }}
          onChange={(value) => handleFilterChange('status', value)}
        >
          <Option value="">Tất cả</Option>
          <Option value="waiting">Đợi tin nhắn</Option>
          <Option value="completed">Hoàn thành</Option>
          <Option value="expired">Hết hạn</Option>
        </Select>
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

export default HistoryRent;
