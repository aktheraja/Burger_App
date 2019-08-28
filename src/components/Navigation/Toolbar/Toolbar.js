import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NaviagtionItems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>{
    return (
        <header className={classes.Toolbar}>
            <div >
                <button onClick={props.clicked}>MENU</button>
            </div>
            <div >
            <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NaviagtionItems />
            </nav>
        </header>
    );

};
export default toolbar;