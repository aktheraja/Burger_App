import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NaviagtionItems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>{
    return (
        <header className={classes.Toolbar}>
            <div >MENU</div>
            <div >
            <Logo />
            </div>
            <nav>
                <NaviagtionItems />
            </nav>
        </header>
    );

};
export default toolbar;