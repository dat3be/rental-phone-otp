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
      onClick={(e) => setCurrentView(e.key as string)}
      inlineCollapsed={collapsed}
    >
      <Menu.Item key="1" icon={<UserOutlined />} className="menu-item">
        Thông tin tài khoản
      </Menu.Item>
      <Menu.Item key="2" icon={<WalletOutlined />} className="menu-item">
        Nạp tiền
      </Menu.Item>
      <Menu.Item key="3" icon={<HistoryOutlined />} className="menu-item">
        Lịch sử nạp tiền
      </Menu.Item>
      <Menu.ItemGroup key="g1" title="Thuê Số">
        <Menu.Item key="4" icon={<FileOutlined />} className="menu-item">
          Thuê số nhanh
        </Menu.Item>
        <Menu.Item key="5" icon={<AppstoreOutlined />} className="menu-item">
          Thuê số tùy chọn
        </Menu.Item>
        <Menu.Item key="6" icon={<BookOutlined />} className="menu-item">
          Danh sách dịch vụ
        </Menu.Item>
        <Menu.Item key="7" icon={<HistoryOutlined />} className="menu-item">
          Lịch sử thuê số
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="g2" title="Tài Khoản">
        <Menu.Item key="8" icon={<DollarOutlined />} className="menu-item">
          Nhận hoa hồng
        </Menu.Item>
        <Menu.Item key="9" icon={<HistoryOutlined />} className="menu-item">
          Lịch sử chung
        </Menu.Item>
        <Menu.Item key="10" icon={<BookOutlined />} className="menu-item">
          Tài liệu API
        </Menu.Item>
      </Menu.ItemGroup>
      <hr />
      <Menu.Item key="11" icon={<InfoCircleOutlined />} className="menu-item">
        Hướng dẫn
      </Menu.Item>
    </Menu>
  </>
);

export default Sidebar;
