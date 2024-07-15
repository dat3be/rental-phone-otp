import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import '../css/style.css';

const { Title, Text } = Typography;

const PaymentMethods: React.FC = () => (
  <div className="payment-methods">
    <Title level={3}>Phương thức nạp tiền</Title>
    <Card className="payment-card">
      <Row gutter={[16, 16]} className="payment-row">
        <Col span={24}>
          <Row align="middle">
            <Col span={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="VietQR"
                className="payment-img"
              />
            </Col>
            <Col span={20}>
              <Title level={4}>Chuyển khoản ngân hàng / QR code</Title>
              <Text type="secondary">Nạp từ 10,000,000 VND trở lên tặng 10%</Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="middle">
            <Col span={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Viettel Money"
                className="payment-img"
              />
            </Col>
            <Col span={20}>
              <Title level={4}>Viettel Money</Title>
              <Text type="secondary">Nạp từ 10,000,000 VND trở lên tặng 10%</Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="middle">
            <Col span={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Payeer"
                className="payment-img"
              />
            </Col>
            <Col span={20}>
              <Title level={4}>Payeer</Title>
              <Text type="secondary">
                Chấp nhận Chuyển qua ví Payeer, Advcash, Bitcoin, Ethereum, Litecoin, Visa, MasterCard, Qiwi, Perfect Money, Bitcoin cash, Dash, WebMoney, Skrill, Neteller, Epay, BinanceCoin, Western Union, Ripple, Dogecoin, ... và nhiều hình thức thanh toán khác
              </Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="middle">
            <Col span={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="USDT TRC20"
                className="payment-img"
              />
            </Col>
            <Col span={20}>
              <Title level={4}>USDT TRC20 (Phí siêu rẻ) <Text type="danger">New!!!</Text></Title>
              <Text type="secondary">
                Nạp tối thiểu 10$, chỉ chấp nhận USDT network TRON (TRC-20). Phí tối đa 1.1$, nạp từ 300 usdt trở lên không mất phí, 1000 usdt trở lên tặng 10%
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  </div>
);

export default PaymentMethods;
