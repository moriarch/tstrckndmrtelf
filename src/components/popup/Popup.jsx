import styles from "./popup.module.css"
import React, { useContext, useState } from 'react';
import AppContext from "../../context";
import Closer from "../../closer.svg"
import Episode from "./Episode"


function Episodes(props) {
    const listItems = props.items.map((el, i) =>
        <Episode key={i} url={el} />
    );
    return (
        <div className={styles.episode}>{listItems}</div>
    );
}
function Popup(props) {

    const [showEpisod, toggleEpisod] = useState(false);

    const [context, setContext] = useContext(AppContext);
    return (
        <div className={[context.open ? styles.show : styles.hide, styles.popup].join(" ")}>
            {context.popData === null ? (<></>) : (
                <div style={{ display: "flex" }}>
                    <div className={styles.closer} onClick={() => setContext({ ...context, open: false })} >
                        <img src={Closer} alt="" style={{ width: 25 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className={styles.body}>
                            <img src={context.popData.data.image} alt="" />
                            <div className={styles.descr}>
                                <h2>{context.popData.data.name}</h2>
                                <span className={[styles[context.popData.data.status], styles.dot].join(" ")}>{context.popData.data.status} - {context.popData.data.gender}</span>
                                <div className={styles.props}>{context.popData.data.species}</div>
                                <div className={styles.props}>{context.popData.data.type}</div>
                                <div className={styles.props}><b>Origin location:</b> {context.popData.data.origin.name}</div>
                                <div className={styles.props}><b>Last location:</b> {context.popData.data.location.name}</div>

                            </div>
                        </div>
                        <div>
                            <div
                                onClick={() => toggleEpisod(!showEpisod)}
                                className={styles.toggler}>
                                {!showEpisod ? "Show" : "Hide"} episodes
                            </div>
                            <div className={showEpisod ? styles.showEpisod : styles.hideEpisod} >
                                <Episodes items={context.popData.data.episode} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popup;
