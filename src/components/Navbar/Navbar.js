import React from 'react';
import classes from './Navbar.module.css'
import MenuItem from './MenuItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <MenuItem
            className={classes.NavigationItem} 
            link="/" exact >Početna</MenuItem>
        <MenuItem 
            className={classes.NavigationItem} 
            link="/o-nama" >O nama</MenuItem>
        <MenuItem 
            className={classes.NavigationItem} 
            link="/kontakt" >Kontakt</MenuItem>
    </ul>
)

export default NavigationItems;