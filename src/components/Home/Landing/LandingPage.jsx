import LandingPageText from './LandingPageText';
import ManPhoto from '../../../assets/man1.png';
const LandingPage = () => {
    return (
        <div className="landing-wrapper">
            <LandingPageText />
            <img
                src={ManPhoto}
                alt=""
                className="man-landing-photo flex-shrink-1"
            />
        </div>
    );
};

export default LandingPage;
