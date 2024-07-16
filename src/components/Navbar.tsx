import React from 'react';
import { Badge, Avatar, Dropdown, Menu, Button } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import '../css/navbar.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/settings">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const Navbar: React.FC<{ currentView: string; onReload: () => void }> = ({ currentView, onReload }) => (
  <>
    <div className="navbar-container">
      <div className="navbar-right">
        <Badge count={5}>
          <BellOutlined style={{ fontSize: '24px', marginRight: '20px' }} />
        </Badge>
        <Dropdown overlay={menu} trigger={['click']}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
    <div className="navbar-bottom">
      <div className="current-view">{currentView}</div>
      <Button className="reload-btn" onClick={onReload}>Nạp Tiền</Button>
    </div>
  </>
);

export default Navbar;
