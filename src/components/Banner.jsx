import styles from './styles/Banner.module.css'

/* 
This is the main Banner at the top of the page. Put one of every page, no fuss, no muss. Does what it says on the tin etc.
*/

function Banner() {

    return (
        <div className={styles.Banner}>
                <h1>PARKING LOT BIRD</h1>
                <p>Tattoos</p>
        </div>
    )
}

export default Banner;
