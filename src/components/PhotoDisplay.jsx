import styles from "./PhotoDisplay.module.css";
import PhotoBar from "./PhotoBar";

function PhotoDisplay() {
    const handleClick = (event) => {
        alert(`The current target of the click is ${event.target.id}`)
        console.log(`The current target of the click is ${event.target.id}`)
    }
    
    return (
        <div className={styles.photoDisplay}>
            <div onClick={handleClick} className={styles.tabContainer}>
                <ul>
                    <li id="Illustrative" key={1} className={styles.currentTab}>Illustrative</li>
                    <li id="realism" key={2} className={styles.backgroundTab}>Realism</li>
                    <li id="Neotrad" key={3} className={styles.backgroundTab}>Neotrad</li>
                    <li id="Cover-ups" key={4} className={styles.backgroundTab}>Cover-ups</li>
                    <li id="Fine_Line" key={5} className={styles.backgroundTab}>Fine Line</li>
                </ul>
            </div>
            <div className={styles.imageCanvas}>
                <div className={styles.imageContainer}>
                    <img src="src/assets/TestPic.jpg" alt="test pic" />
                    <PhotoBar />
                </div>
            </div>
        </div>    
    );
}

export default PhotoDisplay;
