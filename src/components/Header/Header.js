import styles from  "./Header.module.css";

const Header= ({title, descr}) => (
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
);


export default Header;