import styles from "./index.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>RedM Server HUD</h1>
            <p className={styles.subtitle}>Interface de jeu</p>
            <div className={styles.navigation}>
                <a href="/hud" className={styles.link}>
                    🎮 Accéder au HUD
                </a>
            </div>
        </div>
    );
};

export default Home;
