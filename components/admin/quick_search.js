import React, { useState } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

function QuickSearch(props){
    return(
        <React.Fragment>
            <Input  label={<Dropdown defaultValue={props.defaultValue} options={props.moduleOptions} />}
                    size='mini'
                    labelPosition='right'
                    placeholder='Find domain'/>
        </React.Fragment>
    );
}

QuickSearch.defaultProps={
    defaultValue : 'client',
    moduleOptions : [
        { key: 'client', text: 'Client', value: 'client' },
        { key: 'product', text: 'Product', value: 'product' },
        { key: 'user', text: 'User', value: 'user' },
    ]
}

export default QuickSearch;