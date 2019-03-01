import React, { Component } from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import ResponsiveAppBar from './ResponsiveAppBar';

class DrawerAppBar extends Component {
    
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    
    render() {
        return (
            <div>
                <ResponsiveAppBar 
                    handleDrawerToggle={this.handleDrawerToggle.bind(this)} 
                />
                <ResponsiveDrawer  
                    handleDrawerToggle={this.handleDrawerToggle.bind(this)}
                    mobileOpen={this.state.mobileOpen} 
                />
            </div>
        );
    }
}

export default DrawerAppBar;