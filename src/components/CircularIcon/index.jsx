import styles from "./index.module.scss";

const CircularIcon = ({ icon, size = 50 }) => {
    return (
        <div 
            className={styles.circularIcon} 
            style={{ 
                width: size, 
                height: size,
            }}
        >
            <div className={styles.iconContainer}>
                {icon}
            </div>
        </div>
    );
};

export default CircularIcon;
