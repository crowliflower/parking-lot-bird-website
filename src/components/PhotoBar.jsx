import styles from './styles/PhotoBar.module.css';

function PhotoBar() {
  return (
    <>
      <div className={styles.mainContainer}>
        <ul className={styles.thumbnailBar}>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_2.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_3.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_4.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_5.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_1.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_2.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_3.jpg' alt="" /></li>
          <li className={styles.photoThumbnail}><img src='src/assets/test_pic_4.jpg' alt="" /></li>
        </ul>
      </div>
    </>
  );
}

export default PhotoBar;
