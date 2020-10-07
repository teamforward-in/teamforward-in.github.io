import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Menu, Header, Icon, Segment, Sidebar, Container, Dropdown, Grid } from 'semantic-ui-react';
import AdminSideBarMenuItems from './admin_side_bar';
import { Media } from '../../utils/media';
import QuickSearch from './quick_search';

function AdminLayout(props) {
  const [sidebarOpened, setSidebarOpened] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState();
  const [activeMenuSubItem, setActiveMenuSubItem] = useState();
  const router = useRouter();
  return (
    <React.Fragment>
      <Menu attached='top' inverted fluid size='small' borderless
            size='large'>
          <Media at="mobile">
            <Menu.Item icon='sidebar' onClick={() => setSidebarOpened(!sidebarOpened)}/>
          </Media>
          <Menu.Item header>Restaurant App - Admin</Menu.Item>
          <Menu.Menu position='right'>
            <Media greaterThan="mobile">
                <QuickSearch />
            </Media>
            <Dropdown item icon='users' simple>
              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Sign Out</Dropdown.Header>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
      </Menu>
      <Media at={'mobile'}>
        <Sidebar.Pushable as={Segment} attached style={{ overflow: 'hidden', height:'100vh'}}>
          <Sidebar
            as={Menu}
            animation={'overlay'}
            direction={'left'}
            icon='labeled'
            inverted
            vertical
            onHide={()=>setSidebarOpened(false)}
            visible={sidebarOpened}
            width='thin'
          >
            <AdminSideBarMenuItems menuItems={props.menuItems} activeMenuItemId={activeMenuItem} activeMenuSubItemId={activeMenuSubItem} onActiveMenuItemChanged={(menuItemId, submenuId, isSubmenu, item) => {
              setActiveMenuItem(menuItemId)
              setActiveMenuSubItem(submenuId)
              router.push(item.url);
              }} />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
      <Media greaterThan="mobile">
        <Grid stretched style={{height:'100vh'}}>
            <Grid.Column width={3} stretched>
              <Menu inverted vertical size='large' style={{width:'100%'}}>
                <AdminSideBarMenuItems menuItems={props.menuItems} activeMenuItemId={activeMenuItem} activeMenuSubItemId={activeMenuSubItem} onActiveMenuItemChanged={(menuItemId, submenuId, isSubmenu, item) => {
                setActiveMenuItem(menuItemId)
                setActiveMenuSubItem(submenuId)
                router.push(item.url);
                }} />
              </Menu>
            </Grid.Column>
            <Grid.Column as='div' width={13} style={{paddingLeft:'1px'}}>
              {props.children}
            </Grid.Column>
        </Grid>
      </Media>
    </React.Fragment>
  );
}

AdminLayout.defaultProps = {
  menuItems: []
}

export default AdminLayout