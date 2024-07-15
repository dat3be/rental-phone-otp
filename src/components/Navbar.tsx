import React from 'react';
import { Layout, Row, Col, Typography, Avatar, Button, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import '../css/style.css';

const { Header } = Layout;
const { Text } = Typography;

const Navbar: React.FC = () => (
<Header className="navbar" style={{ backgroundColor: '#001529', padding: '0 20px' }}>
<Row justify="end" align="middle" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}> {/* Align to 'end' (right) */}
        <Col> {/* Removed unnecessary Col and flex styles */}
          <Button type="primary" style={{ marginRight: '10px' }}>Nạp tiền</Button>
          <Text style={{ marginRight: '10px', color: 'white' }}>5,800đ</Text>
          <Badge count={5}> 
            <BellOutlined style={{ color: 'white', fontSize: '20px' }} />
          </Badge>
          <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
            D
          </Avatar>
        </Col>
      </Row>
  </Header>
);

export default Navbar;
