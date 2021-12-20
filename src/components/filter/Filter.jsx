import React, { useContext, useEffect, useState } from 'react';
import AppContext from "../../context";
import styles from "./Filter.module.css";
function Filter(props) {
    const [data, setData] = useState(null);
    const [context, setContext] = useContext(AppContext);

    function handleChange(e){
        if(e.target.value=="all"){
            setData({ ...data, [e.target.id]: "" })
        }else{
            setData({ ...data, [e.target.id]: e.target.value })
        }
        
    }
    useEffect(() => {
        setContext({...context, filter: data})
    }, [data]) 
    return (
        <form className={styles.filter}>
            <input type="text" id="name" placeholder="Name" onChange={handleChange} />
            <select name="" id="status" onChange={handleChange}>
                <option value="all">Status</option>
                <option value="dead">Dead</option>
                <option value="alive">Alive</option>
                <option value="unknown">unknown</option>
            </select>
            <select name="" id="gender" onChange={handleChange}>
                <option value="all">Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <input type="text" id="species" placeholder="Species" onChange={handleChange} />
            <input type="text" id="type" placeholder="Type" onChange={handleChange} />
            <input type="reset" value="Reset" onClick={() => setData(null)}/>
        </form>
    );
}

export default Filter;