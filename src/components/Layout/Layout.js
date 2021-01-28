import styles from './Layout.module.css'
import bg2 from '../../assets/bg2.jpg';
const Layout = ({title, descr, urlBg, colorBg, id }) => {
    const styleRoot = urlBg ? {backgroundImage: {bg2}}: colorBg ? {backgroundColor: 'gray'} : {};
    return (
        <section className={styles.root} style={styleRoot} id={id}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        {
                            title && (<h3>{title}</h3>)
                        }
                        <span className={styles.separator}></span>
                    </div>
                    <div className={styles.desc.full}>
                        {
                            descr && (<p>{descr}</p>)
                        }
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;
