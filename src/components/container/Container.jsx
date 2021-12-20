import React, { useState, useEffect, useContext } from 'react';
import List from "../list/List";
import styles from "./Container.module.css";
import AppContext from "../../context";
import Filter from "../filter/Filter";
import Loader from "../../loader.svg";
function Container() {
    const [data, setData] = useState(null);
    const [context, setContext] = useContext(AppContext);
    function getData(uri) {
        fetch(uri)
            .then(e => e.ok ? e.json() : e = null)
            .then(e => setData(e))
            .then(e => console.log(data))
    }
    useEffect(() => {
        getData("https://rickandmortyapi.com/api/character")
    }, []);

    useEffect(() => {

        if (context.filter || context.filter === 'object') {
            let params = [];
            Object.keys(context.filter).forEach(el => {
                if (context.filter[el].length > 0)
                    params.push(el + "=" + context.filter[el])
            });


            getData("https://rickandmortyapi.com/api/character/?" + params.join("&"))
            console.log(params)
        }
        if (context.filter === null) {
            getData("https://rickandmortyapi.com/api/character")
        }

    }, [context.filter]);

  

    return (
        <main className={styles.container}>
            <Filter />
            {
                data === null ?
                    (
                    <div style={{display:"flex"}}>
                        <img src={Loader} style={{ margin: "auto"}}alt="" />
                    </div>
                    ) :
                    (<List data={data} />)
            }
            {data === null ? (<></>)
                : (
                    <div className={styles.pagination}>
                        {
                            data.info.prev === null ?
                                (<></>) :
                                (<button onClick={() =>{window.scrollTo(0, 0); getData(data.info.prev)}}>Back</button>)
                        }
                        {
                            data.info.next === null ?
                                (<></>) :
                                (<button onClick={() =>{window.scrollTo(0, 0); getData(data.info.next)}}>Next</button>)
                        }
                    </div>
                )
            }

        </main>
    );
}

export default Container;
