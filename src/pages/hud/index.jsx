import {useEffect, useState} from 'react';
import styles from "./index.module.scss";
import ExampleProfile from "/example_profile.jpg";

const Hud = () => {
    const [money, setMoney] = useState(100);
    const [health, setHealth] = useState(1);
    const [maxHealth, setMaxHealth] = useState(200);
    const [username, setUsername] = useState("Arthur Morgan");
    const [level, setLevel] = useState(5);
    const [experience, setExperience] = useState(40);
    const [maxExperience, setMaxExperience] = useState(100);
    useEffect(() => {
        const handleMessage = (event) => {
            const {action, data} = event.data;

            // Gestion des événements updateHUD (mise à jour complète)
            if (action === 'updateHUD') {
                if (data.money !== undefined) setMoney(data.money);
                if (data.health !== undefined) setHealth(data.health);
                if (data.maxHealth !== undefined) setMaxHealth(data.maxHealth);
                if (data.username !== undefined) setUsername(data.username);
                if (data.level !== undefined) setLevel(data.level);
                if (data.experience !== undefined) setExperience(data.experience);
                if (data.maxExperience !== undefined) setMaxExperience(data.maxExperience);
            }
        };

        // Un seul listener pour tous les événements
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    // ✅ calcul du pourcentage de vie par rapport au maxHealth
    const healthPercent = Math.min(100, (health / maxHealth) * 100);
    const expPercent = Math.min(100, (experience / maxExperience) * 100);

    // Fonction pour calculer les couleurs de la barre de vie selon le pourcentage
    const getHealthColors = (percent) => {
        if (percent >= 80) {
            // Vert quand la santé est élevée (80-100%)
            return { start: '#4caf50', end: '#2e7d32' };
        } else if (percent >= 60) {
            // Vert-jaune quand la santé est bonne (60-79%)
            return { start: '#8bc34a', end: '#689f38' };
        } else if (percent >= 40) {
            // Jaune quand la santé est moyenne (40-59%)
            return { start: '#ffeb3b', end: '#f57f17' };
        } else if (percent >= 20) {
            // Orange quand la santé est faible (20-39%)
            return { start: '#ff9800', end: '#e65100' };
        } else {
            // Rouge quand la santé est critique (0-19%)
            return { start: '#ff3b3b', end: '#b30000' };
        }
    };

    const healthColors = getHealthColors(healthPercent);

    return (
        <div className={styles.container}>
            <div className={styles.hud}>
                <div className={styles.blockProfile}>
                    <img className={styles.imgProfile} src={ExampleProfile} alt="profile"/>
                    <div>
                        <p className={styles.username}>{username}</p>
                        <div className={styles.money}>
                            <p>💵 {money} $</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bar}>
                    <div 
                        className={styles.fillHealth} 
                        style={{
                            width: `${healthPercent}%`,
                            height: `100%`,
                            background: `linear-gradient(90deg, ${healthColors.start}, ${healthColors.end})`
                        }}
                    />
                    <div className={styles.barText}>{health}/{maxHealth}</div>
                    <div className={styles.healthIcon}>❤️</div>
                </div>
            </div>
            <div className={styles.exp}>
                <div className={styles.barContainer}>
                    <div className={`${styles.bar}`}>
                        <div 
                            className={styles.fillExp} 
                            style={{width: `${expPercent}%`}}
                        />
                        <div className={styles.barText}>
                            <span className={styles.nbExp}>{experience} / {maxExperience} xp</span>
                        </div>
                    </div>
                    <div className={styles.expValueCircle}>
                        <span>{level}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hud;
