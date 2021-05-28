import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

export type Link = { key: string; label: string; path: string }

const menuLinks: Link[] = [
  { key: '2', label: 'Dashboard', path: '/' },
  { key: '3', label: 'Clients', path: '/clients' },
]

export const useSelectedKeys = () => {
  const history = useHistory()
  const location = useLocation()
  const [selectedKey, setSelectedKey] = useState<string>(
    menuLinks.find((_item) => location.pathname === _item.path)!.key
  )

  useEffect(() => {
    setSelectedKey(
      menuLinks.find((_link) => location.pathname === _link.path)!.key
    )
  }, [location])

  const onClickMenu = (link: any) => {
    const clicked: Link = menuLinks.find((_link) => _link.key === link.key)!

    history.push(clicked.path)
  }

  const mappedLinks = () => {
    return menuLinks.map((link: Link) => (
      <Menu.Item key={link.key} onClick={onClickMenu}>
        {link.label}
      </Menu.Item>
    ))
  }

  return {
    selectedKey,
    onClickMenu,
    mappedLinks,
    menuLinks,
  }
}
