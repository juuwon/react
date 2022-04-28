import React, { Component } from 'react';

class SideComponent extends Component {
    render() {
        return (
            <div className="sideMenu">
            <ul>
                <li><a href="#!" title="cart"><i className="fas fa-shopping-cart"></i> <span className="hide">BY THEME</span></a></li>
                <li><a href="#!" title="email"><i className="fas fa-envelope"></i> <span className="hide">QUICK QUESTIONE?</span></a></li>
            </ul>
        </div>
        );
    }
}

export default SideComponent;