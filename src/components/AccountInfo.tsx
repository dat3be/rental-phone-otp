import React from 'react';
import { Button, Card, Col, Divider, Row, Space, Typography, Alert } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './../css/AccountInfo.css'; 

const { Title, Text } = Typography;

const AccountInfo: React.FC = () => {
  return (
    <div className="account-info-container">
      <Card className="account-info-card">
        <Row gutter={16} align="middle">
          <Col span={6}>
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="avatar-image"
            />
          </Col>
          <Col span={18}>
            <Title level={3}>datngo2994</Title>
            <Text type="secondary">dat.ngo2994@gmail.com</Text>
            <Divider style={{ margin: '16px 0' }} />
            <Row gutter={16}>
              <Col span={8}>
                <Text>Số dư</Text>
                <Title level={4}>5,800 đ</Title>
              </Col>
              <Col span={8}>
                <Text>Tổng code đã thuê</Text>
                <Title level={4}>3</Title>
              </Col>
              <Col span={8}>
                <Text>Lần cuối thuê</Text>
                <Title level={4}>11/07/2024</Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      <Card>
        <Title level={4}>Thông tin tài khoản</Title>
        <Row gutter={16}>
          <Col span={12}>
            <div className="info-item">
              <Text strong>Họ tên:</Text> datngo2994
            </div>
            <div className="info-item">
              <Text strong>Tên đăng nhập:</Text> datngo2994
            </div>
            <div className="info-item">
              <Space>
                <MailOutlined />
                <Text strong>E-mail:</Text> dat.ngo2994@gmail.com
              </Space>
            </div>
            <div className="info-item">
              <Space>
                <PhoneOutlined />
                <Text strong>Số điện thoại:</Text> 84345678462
              </Space>
            </div>
          </Col>
          <Col span={12}>
            <div className="info-item">
              <Text strong>Ngày sinh:</Text> 29/09/1994
            </div>
            <div className="info-item">
              <Text strong>Giới tính:</Text> Nam
            </div>
            <div className="info-item">
              <Text strong>Địa chỉ:</Text> Hà Nội, Việt Nam
            </div>
            <div className="info-item">
              <Text strong>Telegram:</Text> <Button type="primary">Kết nối</Button>
            </div>
          </Col>
        </Row>
      </Card>

      <Alert
        message="Chú ý!"
        description="Vui lòng Kết nối Telegram Account để tiếp tục sử dụng dịch vụ và được hỗ trợ các tính năng bảo mật."
        type="warning"
        showIcon
        style={{ marginTop: '24px' }}
      />
    </div>
  );
};

export default AccountInfo;
