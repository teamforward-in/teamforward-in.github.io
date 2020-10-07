import React, { useState } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import Link from 'next/link'

function AdminSideBarMenuItems(props){
    const renderMenuItems = props.menuItems.sort((a,b) => a.displayOrder > b.displayOrder).map((item, index) => {
        const renderSubMenus = item.items.map((subItem, subIndex) => {
            return(
                <Menu.Item
                  key={subItem.id}
                  name={subItem.id}
                  active={props.activeMenuSubItemId === subItem.id}
                  onClick={(event)=>{
                      event.stopPropagation();
                      props.onActiveMenuItemChanged && props.onActiveMenuItemChanged(item.id, subItem.id, true, subItem)
                  }} >
                    <Container textAlign='left'>
                        <Icon inverted circular name={subItem.icon} /> 
                        {subItem.text}
                    </Container>
                </Menu.Item>
            );
        })

        return(
            <Menu.Item  key={item.id}
                        name={item.id}
                        active={props.activeMenuItemId === item.id}
                        onClick={()=>props.onActiveMenuItemChanged && props.onActiveMenuItemChanged(item.id, item.items[0]?.id, false, item)}>
                <Container as={'div'} textAlign='left'>
                    <Icon inverted circular name={item.headerIcon} /> 
                    {item.headerText}
                </Container>

                <Menu.Menu inverted secondary>
                    {renderSubMenus}
                </Menu.Menu>
            </Menu.Item>
        );
    });

    return(
        <React.Fragment>
            {renderMenuItems}
        </React.Fragment>
    );
}

AdminSideBarMenuItems.defaultProps={
    menuItems : []
}

export default AdminSideBarMenuItems;