import { FC } from 'react'
import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { onOpen } from '../../lib/create-application-modal-window/model'
import { useSelectedKeys } from '../../lib/selected-menu-keys-hook'
import { $dark_gray } from '../../styles/colors'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons'

export const SideMenu: FC = () => {
  const { selectedKey, mappedLinks } = useSelectedKeys()

  return (
    <Menu
      style={{
        maxWidth: '300px',
        height: '100vh',
        background: `${$dark_gray}`,
      }}
      selectedKeys={[selectedKey]}
      mode='inline'
      theme='dark'
      inlineCollapsed={false}
    >
      <Menu.Item key='1' icon={<PieChartOutlined />} onClick={() => onOpen()}>
        Создать заявку
      </Menu.Item>

      {mappedLinks()}

      <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
        <Menu.Item key='5'>Option 5</Menu.Item>
        <Menu.Item key='6'>Option 6</Menu.Item>
        <Menu.Item key='7'>Option 7</Menu.Item>
        <Menu.Item key='8'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
        <Menu.Item key='9'>Option 9</Menu.Item>
        <Menu.Item key='10'>Option 10</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  )
}
