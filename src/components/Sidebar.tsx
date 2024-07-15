import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  HistoryOutlined,
  AppstoreOutlined,
  WalletOutlined,
  DollarOutlined,
  BookOutlined,
  InfoCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

interface SidebarProps {
  setCurrentView: (view: string) => void;
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const items = [
  { label: 'Thông tin tài khoản', key: '1', icon: <UserOutlined /> },
  { label: 'Nạp tiền', key: '2', icon: <WalletOutlined /> },
  { label: 'Lịch sử nạp tiền', key: '3', icon: <HistoryOutlined /> },
  {
    label: 'Thuê Số',
    key: 'g1',
    type: 'group',
    children: [
      { label: 'Thuê số nhanh', key: '4', icon: <FileOutlined /> },
      { label: 'Thuê số tùy chọn', key: '5', icon: <AppstoreOutlined /> },
      { label: 'Danh sách dịch vụ', key: '6', icon: <BookOutlined /> },
      { label: 'Lịch sử thuê số', key: '7', icon: <HistoryOutlined /> },
    ],
  },
  {
    label: 'Tài Khoản',
    key: 'g2',
    type: 'group',
    children: [
      { label: 'Nhận hoa hồng', key: '8', icon: <DollarOutlined /> },
      { label: 'Lịch sử chung', key: '9', icon: <HistoryOutlined /> },
      { label: 'Tài liệu API', key: '10', icon: <BookOutlined /> },
    ],
  },
  { label: 'Hướng dẫn', key: '11', icon: <InfoCircleOutlined /> },
];

const Sidebar: React.FC<SidebarProps> = ({ setCurrentView, collapsed, toggleCollapsed }) => (
  <>
    <div className="logo-container">
      <div className="logo">VIOTP</div>
      {collapsed ? (
        <MenuUnfoldOutlined className="toggle-btn" onClick={toggleCollapsed} />
      ) : (
        <MenuFoldOutlined className="toggle-btn" onClick={toggleCollapsed} />
      )}
    </div>
    <Menu
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      onClick={(e) => setCurrentView(e.key)}
    />
  </>
);

export default Sidebar;
