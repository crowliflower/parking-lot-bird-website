import Banner from '../components/Banner';
import BookingForm from '../components/BookingForm';


function Booking() {

    return (
        <div>
            <Banner />
            <div className='componentBox'>
                <BookingForm />
            </div>
        </div>
    );
}

export default Booking;
