import styles from "./PhotoDisplay.module.css";
import PhotoBar from "./PhotoBar";

import { useState } from "react";


const [currentTab, setCurrentTab] = useState("Illustrative")

// the variable below is just providing a url hardcoded. Later, currentPic will 
//  actually a reference to an item from the 
let currentPic = { key: 1, url: "src/assets/test_pic_1.jpg" }

function PhotoDisplay() {
    const handleClick = (event) => {
        // placeholder/debug below.
        //  Feed the event.target to the setCurrentTab function. 
        setCurrentTab(event.target.id)
        alert(`The current target of the click is ${event.target.id}`)
        alert(`The current Tab is now ${event.target.id}`)
    }
    
    return (
        <div className={styles.photoDisplay}>
            {/* Clicking on the style tab should change the display to show the 
            current tab as highlited, and also change the list of photos shown */}
            <div onClick={handleClick} className={styles.tabContainer}>
                <ul>
                    <li id="Illustrative" key={1} className={styles.currentTab}>Illustrative</li>
                    <li id="realism" key={2} className={styles.backgroundTab}>Realism</li>
                    <li id="Neotrad" key={3} className={styles.backgroundTab}>Neotrad</li>
                    <li id="Cover-ups" key={4} className={styles.backgroundTab}>Cover-ups</li>
                    <li id="Fine_Line" key={5} className={styles.backgroundTab}>Fine Line</li>
                </ul>
            </div>
            {/* splitting up the picture display into multiple boxes to leave 
            room for other elements */}
            <div className={styles.imageCanvas}>
                <div className={styles.imageContainer}>
                    <img src={currentPic.url} alt="test pic" />
                    <PhotoBar />
                </div>
            </div>
        </div>    
    );
}

export default PhotoDisplay;
