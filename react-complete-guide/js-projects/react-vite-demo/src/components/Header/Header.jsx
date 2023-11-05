import styles from './Header.module.css';
import reactImg from "../../assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)]
    return (
        <header className={styles.headerContainer}>
            <img src={reactImg} alt="Stylized atom" className={styles.headerImage}/>
            <h1 className={styles.headerTitle}>React Essentials</h1>
            <p className={styles.headerDescription}>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}
