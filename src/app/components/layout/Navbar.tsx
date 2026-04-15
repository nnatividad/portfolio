import styles from "./NavBar.module.css"

export default function Navbar(){
    return(
        <div className={styles.navContainer}>
            <div className={styles.leftSide}>
                <h1>nate natividad.</h1>
            </div>
            <div className={styles.rightSide}>
                <button>projects</button>
                <button>experience</button>
                <button>contact</button>
            </div>
        </div>
    );
}