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
        const { todos, handleDateClick } = this.props
        return (
            <div>
                <ResponsiveAppBar 
                    handleDrawerToggle={this.handleDrawerToggle.bind(this)} 
                />
                <ResponsiveDrawer
                    handleDateClick={handleDateClick}
                    todos={todos}                    
                    handleDrawerToggle={this.handleDrawerToggle.bind(this)}
                    mobileOpen={this.state.mobileOpen} 
                />
            </div>
        );
    }
}

export default DrawerAppBar;