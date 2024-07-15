import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FastRent from '../components/FastRent';
import '../css/style.css';

const { Content, Sider } = Layout;

const RentPhone: React.FC = () => {
  const [currentView, setCurrentView] = useState('1');

  const renderContent = () => {
    switch (currentView) {
      case '1':
        return <FastRent />;
      case '2':
        return <div>Thuê Số Tùy Chọn</div>;
      case '3':
        return <div>Lịch Sử Thuê Số</div>;
      case '4':
        return <div>Danh Sách Dịch Vụ</div>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Sider collapsible>
        <Sidebar setCurrentView={setCurrentView} />
      </Sider>
      <Layout>
        <Header />
        <Content>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default RentPhone;
