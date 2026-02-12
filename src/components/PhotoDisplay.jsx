import styles from "./PhotoDisplay.module.css";
import PhotoBar from "./PhotoBar";
import PicDictionary from "./PicDictionary";

import { useState, useEffect } from "react";


function PhotoDisplay() {

    const [currentTab, setCurrentTab] = useState("Illustrative")

    // the variable below is just providing a url hardcoded. Later, currentPic will 
    //  actually a reference to an item from the 
    let currentPic = { id: 1, url: "src/assets/test_pic_1.jpg" }
    
    const handleClick = (event) => {
        if (event.target.className === styles.backgroundTab) {
            console.log(`${event.target.className}`)
            const tabToChange = document.getElementById(currentTab)
            tabToChange.className = styles.backgroundTab;
            event.target.className = styles.activeTab;
            setCurrentTab(event.target.id)
        }

        /* Look at all these comments. This *&%^ing functionality took me so long to
        get working as intended. multiple weeks of studying and trying shit. I got it
        though, and I will eventually delete all of this, but for now it's nice to 
        look at all the shit I tried
        */

        // const tabToChange = document.getElementsByClassName(styles.activeTab)
        // tabToChange.className = styles.backgroundTab;
        // // console.log(event.target.id)
        // // // let clickedTab = document.getElementById(event.target.id)
        // // console.log(`clicked tab is ${event.target.id}`)
        // // // placeholder/debug below.
        // // //  Feed the event.target to the setCurrentTab function. 
        // event.target.className = styles.activeTab;
        // setCurrentTab(event.target.id)
        // alert(`The current target of the click is ${event.target.id}`)
        // alert(`The current Tab is now ${event.target.id}`)
        return
    }
    
    return (
        <div className={styles.photoDisplay}>
            {/* Clicking on the style tab should change the display to show the 
            current tab as highlited, and also change the list of photos shown */}
            <div onClick={handleClick} className={styles.tabContainer}>
                <ul>
                    <li id="Illustrative" key={1} className={styles.activeTab} > Illustrative </li>
                    <li id="realism" key={2} className={styles.backgroundTab} > Realism </li>
                    <li id="Neotrad" key={3} className={styles.backgroundTab} > Neotrad </li>
                    <li id="Cover-ups" key={4} className={styles.backgroundTab} > Cover-ups </li>
                    <li id="Fine_Line" key={5} className={styles.backgroundTab} > Fine Line </li>
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
