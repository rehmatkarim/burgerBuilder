import React from "react";
import Aux from "../../hoc/Aux";
import classes from './Layouts.css';

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar,SideDrawer,Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
