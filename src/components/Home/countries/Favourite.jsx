import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CountriesWrapper from './ContriesWrapper';
import { Emoji } from 'react-apple-emojis';

const Favourite = () => {
    return (
        <div className=" section-wrapper fav-sec mx-5">
            <p className="title">DESTINASI FAVORIT</p>
            <div className="section-sub">
                <h1>
                    <Emoji name="airplane-arrival" className="section-emoji" />•
                    Temukan Destinasi Favoritmu
                </h1>
                <p className="title">
                    Lihat semua <ChevronRightRoundedIcon />
                </p>
            </div>
            <CountriesWrapper />
        </div>
    );
};

export default Favourite;
