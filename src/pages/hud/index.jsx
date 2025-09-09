    import {useEffect, useState} from 'react';
    import styles from "./index.module.scss";
    import LevelProgress from "../../components/LevelProgress";
    import CircularProgress from "../../components/CircularProgress/index.jsx";
    import Vie from "../../assets/icons/player/vie.svg?react";
    import Endurance from "../../assets/icons/player/endurance.svg?react";

    const Hud = () => {
        // ✅ Valeurs par défaut corrigées
        const [money, setMoney] = useState(0);
        const [health, setHealth] = useState(500);
        const [maxHealth, setMaxHealth] = useState(500);
        const [endurance, setEndurance] = useState(50);
        const [maxEndurance, setMaxEndurance] = useState(100);
        const [username, setUsername] = useState("Inconnu");
        const [level, setLevel] = useState(1);
        const [experience, setExperience] = useState(0);
        const [maxExperience, setMaxExperience] = useState(100);

        useEffect(() => {
            const handleMessage = (event) => {
                const {action, data} = event.data;

                // 🔍 DEBUG - Voir toutes les données reçues
                console.log('�� HUD React - Action:', action, 'Data:', data);

                if (action === 'updateHUD') {
                    // 🔍 DEBUG - Voir les valeurs de stamina
                    console.log('💪 Stamina - endurance:', data.endurance, 'maxEndurance:', data.maxEndurance);

                    if (data.money !== undefined) setMoney(data.money);
                    if (data.health !== undefined) setHealth(data.health);
                    if (data.maxHealth !== undefined) setMaxHealth(data.maxHealth);
                    if (data.endurance !== undefined) setEndurance(data.endurance);
                    if (data.maxEndurance !== undefined) setMaxEndurance(data.maxEndurance);
                    if (data.name !== undefined) setUsername(data.name);
                    if (data.level !== undefined) setLevel(data.level);
                    if (data.experience !== undefined) setExperience(data.experience);
                    if (data.maxExperience !== undefined) setMaxExperience(data.maxExperience);
                }
            };

            window.addEventListener('message', handleMessage);

            return () => {
                window.removeEventListener('message', handleMessage);
            };
        }, []);

        // Calcul des pourcentages
        const healthPercent = Math.min(100, (health / maxHealth) * 100);
        const endurancePercent = Math.min(100, (endurance / maxEndurance) * 100);
        const expPercent = Math.min(100, (experience / maxExperience) * 100);

        return (<>
            <div className={styles.container}>
                <div className={styles.stats}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <CircularProgress
                                percent={healthPercent}
                                icon={<Vie/>}
                                color="#ff3b3b"
                                size={60}
                            />
                        </div>

                        <div className={styles.statItem}>
                            <CircularProgress
                                percent={endurancePercent}
                                icon={<Endurance/>}
                                color="#4CAF50"
                                size={60}
                            />
                            {endurance} -
                            {maxEndurance}
                        </div>
                    </div>
                </div>

                <div className={styles.levelContainer}>
                    <LevelProgress
                        percent={expPercent}
                        value={level}
                        size={70}
                    />
                </div>

                <div className={styles.moneyContainer}>
                    <div className={styles.moneyValue}>
                        ${Math.floor(money)}.
                        <span className={styles.moneyCents}>
                                {(Math.round((money % 1) * 100)).toString().padStart(2, '0')}
                             </span>
                    </div>
                </div>
            </div>
        </>);
    };

    export default Hud;