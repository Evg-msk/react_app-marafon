import styles from './Layout.module.css';
const Layout = ({title, id, colorBg, urlBg, children}) => {
    const styleRoot = urlBg ? {background: `url(${urlBg})` } : {background: colorBg};
    return (
        <section className={styles.root} id={id} style={styleRoot}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;
