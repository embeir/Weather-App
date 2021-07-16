import React from 'react';
import classes from './Onama.module.css'
import Navbar from './Navbar';
const Onama = () => {
    return (
        <div>
            <Navbar className={classes.NavigationItems} />
            <p className={classes.Onama} >
                Ovo je nešto o nama 
            </p>
        </div>
    )
}

export default Onama;