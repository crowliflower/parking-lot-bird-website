import Banner from '../components/Banner';
import PhotoDisplay from "../components/PhotoDisplay";


function Gallery() {

    return (
        <div>
            <Banner />
            <div className='componentBox'>
                <PhotoDisplay />
            </div>
        </div>
    );
}

export default Gallery;
