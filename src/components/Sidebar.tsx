import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  HistoryOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentView }) => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={(e) => setCurrentView(e.key)}>
    <Menu.Item key="1" icon={<UserOutlined />} className="menu-item">
      <span>Thuê Số Nhanh</span>
    </Menu.Item>
    <Menu.Item key="2" icon={<FileOutlined />} className="menu-item">
      <span>Thuê Số Tùy Chọn</span>
    </Menu.Item>
    <Menu.Item key="3" icon={<HistoryOutlined />} className="menu-item">
      <span>Lịch Sử Thuê Số</span>
    </Menu.Item>
    <Menu.Item key="4" icon={<AppstoreOutlined />} className="menu-item">
      <span>Danh Sách Dịch Vụ</span>
    </Menu.Item>
  </Menu>
);

export default Sidebar;
