import React, { useState } from 'react';
import { Card, Tabs, Button, Input } from 'antd';
import '../css/accountInfo.css';

const { TabPane } = Tabs;

const AccountInfo: React.FC = () => {
  const [telegramConnected, setTelegramConnected] = useState(false);

  const handleTelegramConnect = () => {
    // Logic to connect Telegram
    setTelegramConnected(true);
  };

  return (
    <Card className="account-info-content">
      <div className="account-info-header">
        <div className="avatar-section">
          <img
            src="https://via.placeholder.com/150"
            alt="avatar"
            className="avatar"
          />
          <div className="balance-info">
            <h2>datngo2994</h2>
            <p>Số dư: <b>5,800đ</b></p>
            <p>Tổng code đã thuê: <b>3</b></p>
            <p>Lần cuối thuê: <b>11/07/2024</b></p>
          </div>
        </div>
        <Button type="primary" className="update-button">Cập nhật thông tin</Button>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tổng Quan" key="1">
          <h3>Thông tin tài khoản</h3>
          <p><b>Họ tên:</b> datngo2994</p>
          <p><b>Tên đăng nhập:</b> datngo2994</p>
          <p><b>E-mail:</b> dat.ngo2994@gmail.com</p>
          <p><b>Số điện thoại:</b> 84345678462</p>
          <div>
            <Button onClick={handleTelegramConnect}>
              {telegramConnected ? 'Hủy kết nối Telegram' : 'Kết nối Telegram'}
            </Button>
          </div>
          <p>Chú ý! Vui lòng kết nối Telegram Account để tiếp tục sử dụng dịch vụ và được hỗ trợ các tính năng bảo mật.</p>
        </TabPane>
        <TabPane tab="Bảo Mật" key="2">
          <h3>Bảo mật</h3>
          <p>Email: dat.ngo2994@gmail.com <Button type="primary">Xác thực Email</Button></p>
          <p>Mật khẩu: ******** <Button>Đổi mật khẩu</Button></p>
          <p>Bảo mật đăng nhập: Tăng cường độ an toàn cho tài khoản của bạn. Để đăng nhập, bạn sẽ cần nhập mã 6 kí tự được gửi về email đã xác thực của mình.</p>
        </TabPane>
        <TabPane tab="Hoa Hồng Mời Bạn" key="3">
          <h3>Giới thiệu bạn bè nhận thưởng</h3>
          <p>Thông tin và thể lệ: Giới thiệu bạn bè thành công, bạn có thể được hưởng tới đa 4% số tiền mà bạn bè đã nạp.</p>
          <Input value="https://viotp.com/Account/Register?referCode=" addonAfter={<Button>Sao chép</Button>} readOnly />
          <div className="referral-stats">
            <div className="stat-item">
              <h4>Tổng Hoa Hồng Đã Nhận</h4>
              <p>0</p>
            </div>
            <div className="stat-item">
              <h4>Hoa Hồng Tuần Này</h4>
              <p>0</p>
            </div>
            <div className="stat-item">
              <h4>Số người đã giới thiệu</h4>
              <p>0</p>
            </div>
            <div className="stat-item">
              <h4>Được giới thiệu bởi</h4>
              <p>0</p>
            </div>
          </div>
        </TabPane>
        <TabPane tab="API" key="4">
          <h3>API</h3>
          <div className="api-token">
            <Input value="e294527c11ab48d99a90563fea32d4c3" readOnly />
            <Button>Copy</Button>
          </div>
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default AccountInfo;
