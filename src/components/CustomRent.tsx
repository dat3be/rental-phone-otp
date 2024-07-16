import React, { useEffect, useState } from 'react';
import { Select, Button, Table, Alert } from 'antd';
import axios from 'axios';
import '../css/customRent.css';

const { Option } = Select;

const CustomRent: React.FC = () => {
  const [networks, setNetworks] = useState([]);
  const [services, setServices] = useState([]);
  const [countries] = useState([
    { label: 'Tất cả', value: 'all' },
    { label: 'Việt Nam', value: 'vn' },
    { label: 'Lào', value: 'la' },
  ]);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedNetwork, setSelectedNetwork] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchNetworks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/networks');
        setNetworks(response.data.data);
      } catch (error) {
        console.error('Error fetching networks:', error);
      }
    };

    fetchNetworks();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/services?country=${selectedCountry}`);
        setServices(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [selectedCountry]);

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedService(undefined); // Reset selected service when country changes
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'DỊCH VỤ',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'GIÁ',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'SỐ ĐIỆN THOẠI',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'CODE',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'THỜI GIAN',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'TRẠNG THÁI',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'TIN NHẮN',
      dataIndex: 'message',
      key: 'message',
    },
  ];

  const data: readonly any[] | undefined = [];

  return (
    <div className="custom-rent-container">
      <div className="custom-rent-header">
        <Select
          defaultValue="all"
          style={{ width: 120, marginRight: 16 }}
          onChange={handleCountryChange}
        >
          {countries.map(country => (
            <Option key={country.value} value={country.value}>
              {country.label}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="--- Chọn nhà mạng ---"
          style={{ width: 240, marginRight: 16 }}
          onChange={value => setSelectedNetwork(value)}
          value={selectedNetwork}
        >
          {networks.map((network: any) => (
            <Option key={network.id} value={network.id}>
              {network.name}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="--- Chọn dịch vụ ---"
          style={{ width: 240, marginRight: 16 }}
          onChange={value => setSelectedService(value)}
          value={selectedService}
        >
          {services.map((service: any) => (
            <Option key={service.id} value={service.id}>
              {service.name} - {service.price}đ
            </Option>
          ))}
        </Select>
        <Button type="primary">Thuê số ngay</Button>
        <Button type="default" style={{ marginLeft: 16 }}>Yêu cầu thêm dịch vụ mới</Button>
      </div>
      <Alert
        message="Chú ý!"
        description="Trường hợp cần thuê lại sim (chỉ lấy được trong thời gian ngắn 15-30p và sim khả dụng trên hệ thống), bấm vào nút gán số điện thoại đã thuê ở trang Thuê số hoặc Lịch sử thuê số..."
        type="warning"
        showIcon
        style={{ margin: '16px 0' }}
      />
      <Table columns={columns} dataSource={data} pagination={false} locale={{ emptyText: 'Chưa có dữ liệu' }} />
    </div>
  );
};

export default CustomRent;
