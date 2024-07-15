import React from 'react';
import { Button, Card, Col, Row, Typography, Alert } from 'antd';

const { Title, Text } = Typography;

const AccountInfo: React.FC = () => (
  <>
    <div style={{ padding: '24px' }}>
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={16}>
          <Col span={6}>
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              style={{ borderRadius: '50%', width: '150px', height: '150px' }}
            />
          </Col>
          <Col span={18}>
            <Title level={3}>datngo2994</Title>
            <Text>dat.ngo2994@gmail.com</Text>
            <Row gutter={16} style={{ marginTop: '16px' }}>
              <Col span={6}>
                <Card bordered={false}>
                  <Text>Số dư</Text>
                  <Title level={4}>5,800 đ</Title>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false}>
                  <Text>Tổng code đã thuê</Text>
                  <Title level={4}>3</Title>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false}>
                  <Text>Lần cuối thuê</Text>
                  <Title level={4}>11/07/2024</Title>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card>
        <Title level={4}>Thông tin tài khoản</Title>
        <Row gutter={16} style={{ marginTop: '16px' }}>
          <Col span={12}>
            <Text strong>Họ tên</Text>
            <p>datngo2994</p>
          </Col>
          <Col span={12}>
            <Text strong>Tên đăng nhập</Text>
            <p>datngo2994</p>
          </Col>
          <Col span={12}>
            <Text strong>E-mail</Text>
            <p>dat.ngo2994@gmail.com</p>
          </Col>
          <Col span={12}>
            <Text strong>Số điện thoại</Text>
            <p>84345678462</p>
          </Col>
          <Col span={12}>
            <Text strong>Telegram</Text>
            <Button type="primary" danger>
              Hủy kết nối Telegram
            </Button>
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
  </>
);

export default AccountInfo;
