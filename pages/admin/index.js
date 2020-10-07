import React, { useState } from 'react';
import Link from 'next/link'
import { Header, Segment, Grid, List, Icon, Container } from 'semantic-ui-react';
import AdminLayout from '../../components/admin/admin_layout';

function AdminLayoutPage(props) {

    const renderAdminLayoutPageContent=()=>{
        if (props.children){
            return (
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            );
        }

        const renderAdminMenuOptions = props.menuItems.sort((a,b) => a.displayOrder > b.displayOrder).map((item, index) => {
            const renderSubMenus = item.items.map((subItem, subIndex) => {
                return(
                    <List.Item as={Link} href={subItem.url} key={subItem.id}>
                        <div>
                            {subItem.text}
                        </div>
                    </List.Item>
                );
            })
    
            return(
                <Grid.Column key={item.id}>
                    <Segment raised>
                        <Header as={'h4'}>
                            <Icon name={item.headerIcon} /> 
                            {item.headerText}
                        </Header>
                        <List link>
                            {renderSubMenus}
                        </List>
                    </Segment>
                </Grid.Column>
            );
        });

        return(
            <Grid stackable columns={3}>
                <Grid.Row stretched>
                    {renderAdminMenuOptions}
                </Grid.Row>
            </Grid>
        )
    }

    return (
        <AdminLayout menuItems={props.menuItems}>
            <Segment>
                <Grid as={'div'} divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Header as={'h2'}>
                                {props.headerText}
                                <Header.Subheader>
                                    {props.headerSubText}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            {renderAdminLayoutPageContent()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </AdminLayout>
    );
}

AdminLayoutPage.defaultProps={
    headerText : 'Admin Home',
    headerSubText : 'Manage Products, Clients, Security etc.,',
    menuItems: [
        {
          id: 'dashboards',
          headerText: 'Dashboards',
          headerIcon: 'product hunt',
          displayOrder: 0,
          url : '/admin/dashboards/products',
          items: [
            { id: 'dash_products', icon : 'food',  path: '', text: 'Products', url : '/admin/dashboards/products' },
            { id: 'dash_clients', icon : 'food',  path: '', text: 'Clients', url : '/admin/dashboards/clients', },
            { id: 'dash_customers', icon : 'food',  path: '', text: 'Customers', url : '/admin/dashboards/customers', },
          ]
        },
        {
          id: 'products',
          headerText: 'Products',
          headerIcon: 'product hunt',
          displayOrder: 1,
          url : '/admin/products?category=restaurant',
          items: [
            { id: 'restaurant', icon : 'food',  path: '', text: 'Restaurant', url : '/admin/products?category=restaurant' },
          ]
        },
        {
          id: 'clients',
          headerText: 'Clients',
          headerIcon: 'users',
          displayOrder: 2,
          url : '/admin/client',
          items: [
            { id: 'summary', icon : 'food', path: '', text: 'Summary', url : '/admin/client' },
          ]
        },
        {
          id: 'security',
          headerText: 'Security',
          headerIcon: 'lock',
          displayOrder: 3,
          url : '/admin/security/users',
          items: [
            { id: 'users', path: '', text: 'Users', url : '/admin/security/users' },
            { id: 'roles', path: '', text: 'Roles', url : '/admin/security/roles' },
            { id: 'contacts', path: '', text: 'Contacts', url : '/admin/security/contacts' }
          ]
        }
      ]
}

export default AdminLayoutPage;