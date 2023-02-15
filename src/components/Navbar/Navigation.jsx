import React from "react";
import style from './Navigation.module.css'
import NavItem from "./NavItem/NavItem";

function Navigation() {
  return (
      <nav className={style.nav}>
          <NavItem url={"/profile"} text={"Profile"}/>
          <NavItem url={"/dialogs"} text={"Dialogs"} />
          <NavItem url={"/news"} text={"News"} />
          <NavItem url={"/settings"} text={"Settings"} />
      </nav>
  )
}

export default Navigation;