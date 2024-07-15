import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import FastRent from '../components/FastRent';
import AccountInfo from '../components/AccountInfo';
import PaymentMethods from '../components/PaymentMethods';
import PaymentHistory from '../components/PaymentHistory';
import '../css/style.css';
import Navbar from '../components/Navbar';

const { Content, Sider } = Layout;

const RentPhone: React.FC = () => {
  const [currentView, setCurrentView] = useState('4'); // Đặt mặc định là '4' để hiển thị FastRent
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const renderContent = () => {
    switch (currentView) {
      case '1':
        return <AccountInfo />;
      case '2':
        return <PaymentMethods />;
      case '3':
        return <PaymentHistory />;
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
        <Content style={{ marginTop: '64px', marginLeft: '200px', padding: '24px', background: '#fff', minHeight: '280px' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default RentPhone;
