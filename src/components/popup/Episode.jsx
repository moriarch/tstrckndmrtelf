import styles from "./popup.module.css"
import React, { useContext, useEffect, useState } from 'react';



function Episode(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(props.url)
            .then(e => e.json())
            .then(e => setData(e))

    }, []);
    return (
        <>
            {data === null ?
                (<></>)
                :
                (
                    <div className={styles.episodeSingle}>
                        <b>{data.air_date}</b>
                        <p>{data.name}</p>
                    </div>
                )
            }
        </>
    );
}

export default Episode;
