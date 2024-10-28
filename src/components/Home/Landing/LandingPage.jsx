import LandingPageText from './LandingPageText';
import ManPhoto from '../../../assets/man1.png';
const LandingPage = () => {
    return (
        <div className="landing-wrapper">
            <LandingPageText />
            <img src={ManPhoto} alt="" />
        </div>
    );
};

export default LandingPage;
