import React, { useState, useEffect } from 'react';
import { Tabs, Table, Button, message } from 'antd';
import axios from 'axios';
import '../css/referral.css';

const { TabPane } = Tabs;

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Khoảng thời gian',
    dataIndex: 'time_period',
    key: 'time_period',
  },
  {
    title: 'Số tiền thưởng',
    dataIndex: 'reward_amount',
    key: 'reward_amount',
    render: (text: number) => `+${text.toLocaleString()}`,
  },
  {
    title: 'Thời gian trả thưởng',
    dataIndex: 'reward_time',
    key: 'reward_time',
  },
];

const Referral: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentTab === '2') {
      fetchRewards();
    }
  }, [currentTab]);

  const fetchRewards = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/rewards');
      const data = response.data.map((reward: any, index: number) => ({ ...reward, index: index + 1 }));
      setRewards(data);
    } catch (error) {
      message.error('Error fetching rewards data');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://viotp.com/Account/Register?referCode=1');
    message.success('Link copied to clipboard');
  };

  return (
    <div className="referral-container">
      <h2>Nhận hoa hồng</h2>
      <Tabs defaultActiveKey="1" onChange={setCurrentTab}>
        <TabPane tab="Thông tin giới thiệu" key="1">
          <div className="referral-info">
            <h3>Link Giới Thiệu Của Bạn</h3>
            <p>Mời bạn bè đăng ký thông qua đường link dưới đây để được hưởng hoa hồng</p>
            <div className="referral-link">
              <input type="text" value="https://viotp.com/Account/Register?referCode=1" readOnly />
              <Button type="primary" onClick={handleCopyLink}>
                Sao chép
              </Button>
            </div>
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
          </div>
        </TabPane>
        <TabPane tab="Lịch sử nhận thưởng" key="2">
          <Table
            columns={columns}
            dataSource={rewards}
            loading={loading}
            rowKey="index"
            pagination={{ pageSize: 50 }}
          />
        </TabPane>
        <TabPane tab="Thể lệ" key="3">
          <div className="referral-rules">
            <h3>Nội dung</h3>
            <p>Khi giới thiệu bạn bè thành công, bạn có thể được hưởng tới đa 4% số tiền mà bạn bè đã nạp.</p>
            <p>Giải thưởng được trao vào ngày thứ 2 hàng tuần, cộng vào số dư tài khoản chính.</p>
            <h3>Quy định chung</h3>
            <p>Bắt đầu tính số liệu từ 0h00 ngày thứ 2 và chốt số liệu trả thưởng vào 23h59 ngày chủ nhật. Trao giải trước 8h sáng ngày thứ 2 hàng tuần.</p>
            <p>Luồng nạp bao gồm: Nạp ngân hàng, nạp Momo, nạp thẻ ĐT.</p>
            <p>Các trường hợp gian lận sẽ bị khóa tài khoản.</p>
            <h3>Tỉ lệ thưởng</h3>
            <p>Tổng số tiền nạp của bạn bè trong 7 ngày Số % được thưởng:</p>
            <ul>
              <li>Từ 100,000 VND - 10,000,000 VND: 2%</li>
              <li>Từ 10,000,001 VND trở lên: 4%</li>
            </ul>
            <p>Liên hệ Admin để có % cao hơn.</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Referral;
