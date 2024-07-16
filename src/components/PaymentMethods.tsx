import React from 'react';
import { Card, Button } from 'antd';
import '../css/paymentMethods.css';

const PaymentMethods: React.FC = () => {
  return (
    <Card className="payment-methods-content">
      <div className="payment-method">
        <div className="payment-method-info">
          <img src="https://via.placeholder.com/100" alt="VietQR" className="payment-method-icon" />
          <div>
            <h3>Chuyển khoản ngân hàng / QR code</h3>
            <p>Nạp từ 10,000,000 VND trở lên tặng 10%</p>
          </div>
        </div>
        <Button type="primary">Nạp tiền</Button>
      </div>
      <div className="payment-method">
        <div className="payment-method-info">
          <img src="https://via.placeholder.com/100" alt="Viettel Money" className="payment-method-icon" />
          <div>
            <h3>Viettel Money</h3>
            <p>Nạp từ 10,000,000 VND trở lên tặng 10%</p>
          </div>
        </div>
        <Button type="primary">Nạp tiền</Button>
      </div>
      <div className="payment-method">
        <div className="payment-method-info">
          <img src="https://via.placeholder.com/100" alt="Payeer" className="payment-method-icon" />
          <div>
            <h3>Payeer</h3>
            <p>Chấp nhận: Chuyển qua ví Payeer, AdvCash, Bitcoin, Ethereum, Litecoin, Visa, MasterCard, Qiwi, Perfect Money, Bitcoin cash, Dash, WebMoney, Skrill, Neteller, Epay, BinanceCoin, Western Union, Ripple, Dogecoin,... và nhiều hình thức thanh toán khác</p>
          </div>
        </div>
        <Button type="primary">Nạp tiền</Button>
      </div>
      <div className="payment-method">
        <div className="payment-method-info">
          <img src="https://via.placeholder.com/100" alt="USDT TRC20" className="payment-method-icon" />
          <div>
            <h3>USDT TRC20 (Phí SIÊU RẺ) New!!!</h3>
            <p>Nạp tối thiểu 10$, chỉ chấp nhận USDT network TRON (TRC-20)</p>
            <p>Phí tối đa 1.1$, nạp từ 300 USDT trở lên không mất phí, 1000 USDT trở lên tặng 10%</p>
          </div>
        </div>
        <Button type="primary">Nạp tiền</Button>
      </div>
    </Card>
  );
};

export default PaymentMethods;
