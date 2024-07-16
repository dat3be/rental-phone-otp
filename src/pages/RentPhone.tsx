import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import AccountInfo from '../components/AccountInfo';
import PaymentHistory from '../components/PaymentHistory';
import PaymentMethods from '../components/PaymentMethods';
import FastRent from '../components/FastRent';
import CustomRent from '../components/CustomRent';
import Navbar from '../components/Navbar';
import '../css/style.css';

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
        return <PaymentMethods />;
      case '3':
        return <PaymentHistory />;
      case '4':
        return <FastRent />;
      case '5':
        return <CustomRent />;
      // Add more cases for other views
      default:
        return null;
    }
  };

  const handleReload = () => {
    setCurrentView('2'); // Set view to "Nạp Tiền"
  };

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Sidebar setCurrentView={setCurrentView} collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      </Sider>
      <Layout>
        <Navbar currentView={getViewName(currentView)} onReload={handleReload} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

const getViewName = (view: string) => {
  switch (view) {
    case '1':
      return 'Thông tin tài khoản';
    case '2':
      return 'Nạp tiền';
    case '3':
      return 'Lịch sử nạp tiền';
    case '4':
      return 'Thuê Số Nhanh';
    case '5':
      return 'Thuê Số Tùy Chọn';
    default:
      return '';
  }
};

export default RentPhone;
