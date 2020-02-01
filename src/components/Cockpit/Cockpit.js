import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        setTimeout(() => {
            alert("Saved data to cloud!");
        }, 1000);

        return () =>{
            console.log("[Cockpit.js] cleanup work in useEffect");
        }
    }, []) //con secondo argomento array vuoto, l'useEffect funziona come componentDidMount

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () =>{
            console.log("[Cockpit.js] cleanup 2nd work in useEffect");
        };
    }); //useEffect puoi usarlo più di una volta

    //let classes = ['red', 'bold'].join(' '); //"red bold"
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red); //['red']
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold); // ['red','bold'];
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit);