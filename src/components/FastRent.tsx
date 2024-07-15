import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Select, Input, Button, Table, message } from 'antd';

const { Option } = Select;

interface Service {
  id: string;
  name: string;
  price: number;
}

interface RentedPhone {
  id: number;
  serviceId: string;
  price: number;
  phoneNumber: string;
  code: string;
  dateTime: string;
  status: string;
  message: string;
}

const FastRent: React.FC = () => {
  const [country, setCountry] = useState('vn');
  const [services, setServices] = useState<Service[]>([]);
  const [serviceId, setServiceId] = useState<string>('');
  const [rentedPhones, setRentedPhones] = useState<RentedPhone[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `https://api.viotp.com/service/getv2?token=e294527c11ab48d99a90563fea32d4c3&country=${country}`
        );
        setServices(response.data.data);
      } catch (error) {
        message.error('Error fetching services');
      }
    };

    fetchServices();
  }, [country]);

  const handleRentPhone = async (values: any) => {
    try {
      const response = await axios.post('/api/rentPhone', { ...values, country });
      setRentedPhones([...rentedPhones, response.data.rentedPhone]);
      message.success('Phone rented successfully');
    } catch (error) {
      message.error('Error renting phone');
    }
  };

  const columns = [
    { title: '#', dataIndex: 'id', key: 'id' },
    { title: 'Dịch vụ', dataIndex: 'serviceId', key: 'serviceId' },
    { title: 'Giá', dataIndex: 'price', key: 'price' },
    { title: 'Số điện thoại', dataIndex: 'phoneNumber', key: 'phoneNumber' },
    { title: 'Code', dataIndex: 'code', key: 'code' },
    { title: 'Thời gian', dataIndex: 'dateTime', key: 'dateTime' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
    { title: 'Tin nhắn', dataIndex: 'message', key: 'message' },
  ];

  return (
    <div className="fast-rent">
      <Form layout="vertical" onFinish={handleRentPhone}>
        <Form.Item label="Quốc gia" name="country">
          <Select value={country} onChange={(value) => setCountry(value)}>
            <Option value="vn">Việt Nam</Option>
            <Option value="la">Lào</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Dịch vụ" name="serviceId" rules={[{ required: true, message: 'Please select a service!' }]}>
          <Select value={serviceId} onChange={(value) => setServiceId(value)}>
            {services.map((service) => (
              <Option key={service.id} value={service.id}>
                {service.name} - {service.price} VND
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Nhà mạng" name="network">
          <Input placeholder="Nhà mạng" />
        </Form.Item>

        <Form.Item label="Đầu số" name="prefix">
          <Input placeholder="Đầu số" />
        </Form.Item>

        <Form.Item label="Trừ đầu số" name="exceptPrefix">
          <Input placeholder="Trừ đầu số" />
        </Form.Item>

        <Form.Item label="Số thuê lại" name="number">
          <Input placeholder="Số thuê lại" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thuê số ngay
          </Button>
        </Form.Item>
      </Form>

      <Table dataSource={rentedPhones} columns={columns} rowKey="id" />
    </div>
  );
};

export default FastRent;
