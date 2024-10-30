import Navbar from '../components/Home/Navbar/Navbar';
import LandingPage from '../components/Home/Landing/LandingPage';
import Sponsors from '../components/Home/Sponsor/Sponsors';
import Favourite from '../components/Home/countries/Favourite';
import Reserv from '../components/Home/reserv/Reserv';
import Map from '../components/Home/Map/Map';
import Gallery from '../components/Home/Gallery/Gallery';
import Comments from '../components/Home/Comments/Comments';
import Collapses from '../components/Home/Collapses/Collapses';
import Last from '../components/Home/Last/Last';
import Footer from '../components/Home/Footer/Footer';

const Home = () => {
    return (
        <div className="home container  flex-column ">
            <Navbar />
            <LandingPage />
            <Sponsors />
            <Favourite />
            <Reserv />
            <Map />
            <Gallery />
            <Comments />
            <Collapses />
            <Last />
            <Footer />
        </div>
    );
};

export default Home;
