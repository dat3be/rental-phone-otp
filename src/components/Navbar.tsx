import React from 'react';
import { Layout, Row, Col, Typography, Avatar, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import '../css/style.css';

const { Header } = Layout;
const { Text } = Typography;

const Navbar: React.FC = () => (
<Header className="navbar" style={{ backgroundColor: '#001529', padding: '0 20px' }}>
    <Row justify="space-between" align="middle" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Col xs={24} sm={16}>
        <Text strong style={{ color: 'white', fontSize: '14px' }}>Quý khách nên kiểm tra lại nội dung trước khi chuyển khoản. Liên hệ CSKH nếu quá 15 phút không nạp thành công.</Text>
      </Col>
      <Col xs={24} sm={8}>
        <Row justify="end" align="middle">
          <Button type="primary" style={{ marginRight: 10 }}>Nạp tiền</Button>
          <Text style={{ marginRight: 10, color: 'white' }}>5,800đ</Text>
          <BellOutlined style={{ fontSize: '20px', marginRight: 10, color: 'white' }} />
          <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
            D
          </Avatar>
        </Row>
      </Col>
    </Row>
  </Header>
);

export default Navbar;
