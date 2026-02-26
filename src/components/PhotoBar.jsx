import styles from './styles/PhotoBar.module.css';

function PhotoBar() {
  return (
    <>
      <div className={styles.mainContainer}>
        <ul className={styles.thumbnailBar}>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
          <li className={styles.photoThumbnail}></li>
        </ul>
      </div>
    </>
  );
}

export default PhotoBar;
