import React, { Component } from 'react';
import SkipComponent from './SkipComponent';
import WrapComponent from './WrapComponent';

class pofoComponent extends Component {
    render() {
        return (
            <div>
                <SkipComponent />
                <WrapComponent />
            </div>
        );
    }
}

export default pofoComponent;