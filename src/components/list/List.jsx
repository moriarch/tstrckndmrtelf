import Card from "../card/Card";

import styles from "./List.module.css";
function List(props) {

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {props.data.results.map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default List;
