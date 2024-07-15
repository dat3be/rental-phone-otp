import React from 'react';
import { Table, Button, Row, Col, DatePicker, Select, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/style.css';

const { Option } = Select;
const { Title, Text } = Typography;

const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'THỜI GIAN',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'SỐ TIỀN',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'SỐ DƯ SAU BIẾN ĐỘNG',
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'NỘI DUNG',
    dataIndex: 'description',
    key: 'description',
  },
];

const data = [
  {
    key: '1',
    time: '11/07/2024 19:25:56',
    amount: '10,000',
    balance: '10,000',
    description: 'Nạp Bank: BMAACDACBDADCMB',
  },
  // Thêm dữ liệu khác tại đây
];

const PaymentHistory: React.FC = () => (
  <div style={{ padding: '24px' }}>
    <Title level={3}>Lịch sử nạp tiền</Title>
    <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
      <Col span={8}>
        <Text>Từ ngày</Text>
        <DatePicker className="full-width" placeholder="Chọn ngày" />
      </Col>
      <Col span={8}>
        <Text>Đến ngày</Text>
        <DatePicker className="full-width" placeholder="Chọn ngày" />
      </Col>
      <Col span={8}>
        <Text>Loại</Text>
        <Select className="full-width" defaultValue="Tất cả">
          <Option value="all">Tất cả</Option>
          <Option value="bank">Ngân hàng</Option>
          <Option value="viettel">Viettel Money</Option>
          <Option value="payeer">Payeer</Option>
          <Option value="usdt">USDT TRC20</Option>
        </Select>
      </Col>
    </Row>
    <Button type="primary" icon={<SearchOutlined />}>Tìm kiếm</Button>
    <Table
      style={{ marginTop: '24px' }}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      title={() => 'Danh sách 200 giao dịch nạp tiền thành công gần nhất'}
      footer={() => 'Footer'}
    />
  </div>
);

export default PaymentHistory;
