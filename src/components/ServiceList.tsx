import React, { useState, useEffect } from 'react';
import { Table, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Mã Dịch Vụ',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tên Dịch Vụ',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: any) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={record.icon} alt={text} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
        {text}
      </div>
    ),
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
  },
];

const ServiceList: React.FC = () => {
  const [services, setServices] = useState([]);
  const [country, setCountry] = useState('vn');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices(country);
  }, [country]);

  const fetchServices = async (country: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/api/services?country=${country}`);
      const data = response.data.data.map((service: any, index: number) => ({ ...service, index: index + 1 }));
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Danh sách dịch vụ</h2>
        <Select defaultValue="vn" style={{ width: 150 }} onChange={handleCountryChange}>
          <Option value="vn">Sim Vietnam</Option>
          <Option value="la">Sim Laos</Option>
        </Select>
      </div>
      
      <Table
        columns={columns}
        dataSource={services}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
};

export default ServiceList;
