import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import FastRent from '../components/FastRent';
import AccountInfo from '../components/AccountInfo';
import '../css/style.css';
import Navbar from '../components/Navbar';

const { Content, Sider } = Layout;

const RentPhone: React.FC = () => {
  const [currentView, setCurrentView] = useState('1');
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const renderContent = () => {
    switch (currentView) {
      case '1':
        return <AccountInfo />;
      case '2':
        return <div>Nạp tiền</div>;
      case '3':
        return <div>Lịch sử nạp tiền</div>;
      case '4':
        return <FastRent />;
      case '5':
        return <div>Thuê Số Tùy Chọn</div>;
      case '6':
        return <div>Danh Sách Dịch Vụ</div>;
      case '7':
        return <div>Lịch Sử Thuê Số</div>;
      case '8':
        return <div>Nhận Hoa Hồng</div>;
      case '9':
        return <div>Lịch Sử Chung</div>;
      case '10':
        return <div>Tài Liệu API</div>;
      case '11':
        return <div>Hướng dẫn</div>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Sidebar setCurrentView={setCurrentView} collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      </Sider>
      <Layout>
        <Navbar />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default RentPhone;
