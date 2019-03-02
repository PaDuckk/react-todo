import React, { Component } from 'react';
import {
  Divider,
  Drawer,
  Hidden,
  List
} from '@material-ui/core';

import TodoListItem from './TodoListItem'
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
});

class ResponsiveDrawer extends Component {

  render() {
    const { 
      classes, 
      theme, 
      handleDrawerToggle,
      mobileOpen,
      todos,
      handleDateClick
    } = this.props;

    const daily = todos.reduce((daily, todo) => {
      if (!daily.includes(todo.date)) {
        daily.push(todo.date);
      }
      return daily;
    },[])

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {daily.map((date, index) => 
            <TodoListItem
            key={index}
            date={date}
            handleDateClick={handleDateClick}
            /> )}
        </List>
      </div>
    );

    return (
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);