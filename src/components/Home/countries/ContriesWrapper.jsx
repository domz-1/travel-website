import PictureWithBlurText from './PictureWithBlurText';
import PhotoOne from '../../../assets/p1.png';
import PhotoTwo from '../../../assets/p2.png';
import PhotoThree from '../../../assets/p3.png';

const CountriesWrapper = () => {
    return (
        <div className="counries">
            <PictureWithBlurText src={PhotoOne} title="Bali" desc="afwls" />
            <PictureWithBlurText src={PhotoTwo} title="Japan" desc="kawaii" />
            <PictureWithBlurText
                src={PhotoThree}
                title="Malaysia"
                desc="kawaii"
            />
            <PictureWithBlurText src={PhotoOne} title="Bali" desc="afwlo" />
        </div>
    );
};

export default CountriesWrapper;
