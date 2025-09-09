import styles from "./index.module.scss";

const CircularProgress = ({ percent, icon, value, maxValue, color, size = 80 }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
        <div className={styles.circularProgress} style={{ width: size, height: size }}>
            <svg width={size} height={size} className={styles.progressSvg}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#2d2d2d"
                    strokeWidth="4"
                    fill="black"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    className={styles.progressCircle}
                />
            </svg>
            <div className={styles.progressContent}>
                <div className={styles.progressIcon}>{icon}</div>
                {value && (
                    <>
                        <div className={styles.progressValue}>{value}</div>
                        {maxValue && <div className={styles.progressMax}>/{maxValue}</div>}
                    </>
                )}
            </div>
        </div>
    );
};

export default CircularProgress;
