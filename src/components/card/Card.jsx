import styles from "./Card.module.css"
import React, { useState, useEffect, useContext } from 'react';
import AppContext from "../../context";
function Card(props) {
    const [context, setContext] = useContext(AppContext);
    return (
        <div className={styles.card}>
            <img width="300" height={300} src={props.data.image} alt="" loading="lazy"/>
            <div className={[styles[props.data.status], styles.dot].join(" ")}><span>{props.data.status}</span></div>
            <div className={styles.descr}>
                <div className={styles.name}>{props.data.name}</div>
                <div className={styles.Prop}>Gender: {props.data.gender}</div>
                <div className={styles.Prop}>Species: {props.data.species}</div>
                
               
                <div className={styles.more} onClick={() => setContext({ ...context,popData: props,open:true})}>More info</div>
            </div>
        </div>
    );
}

export default Card;
