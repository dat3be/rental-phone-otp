import React, { useState, useEffect } from 'react';
import { Select, Button, Table, Row, Col, Typography, message } from 'antd';
import axios from 'axios';
import '../css/style.css';

const { Option } = Select;
const { Title } = Typography;

interface Service {
  id: string;
  name: string;
  price: string;
}

const FastRent: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios.get('http://localhost:4000/api/service/getv2')
      .then(response => {
        setServices(response.data.data);
      })
      .catch(error => {
        message.error('Lỗi khi tải danh sách dịch vụ.');
      });
  }, []);
  return (
    <div style={{ padding: '24px' }}>
      <Title level={3}>Thuê số nhanh</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Select
            placeholder="Chọn dịch vụ"
            style={{ width: '100%' }}
            onChange={value => setSelectedService(value)}
          >
            {services.map((service: Service) => (
              <Option key={service.id} value={service.id}>
                {service.name} - {service.price}đ
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Button type="primary" style={{ width: '100%' }}>
            Thuê số ngay
          </Button>
        </Col>
      </Row>
      
      <Table
        columns={[
          { title: '#', dataIndex: 'key', key: 'key' },
          { title: 'DỊCH VỤ', dataIndex: 'service', key: 'service' },
          { title: 'GIÁ', dataIndex: 'price', key: 'price' },
          { title: 'SỐ ĐIỆN THOẠI', dataIndex: 'phone', key: 'phone' },
          { title: 'CODE', dataIndex: 'code', key: 'code' },
          { title: 'THỜI GIAN', dataIndex: 'time', key: 'time' },
          { title: 'TRẠNG THÁI', dataIndex: 'status', key: 'status' },
          { title: 'TIN NHẮN', dataIndex: 'message', key: 'message' },
        ]}
        dataSource={[
          {
            key: '1',
            service: 'Gmail/Google',
            price: '1,400d',
            phone: '843456789012',
            code: '123456',
            time: '15:30',
            status: 'Thành công',
            message: 'Mã xác thực của bạn là 123456',
          },
        ]}
        pagination={{ pageSize: 50 }}
        title={() => 'Danh sách các số đang chờ tin nhắn'}
        footer={() => 'Footer'}
      />
    </div>
  );
};

export default FastRent;
