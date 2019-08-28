import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxi';
const sideDrawer =(props)=>{
    let attachedClasses =[classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(" ")}>
            <div >
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};
export default sideDrawer;