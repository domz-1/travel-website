import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CountriesWrapper from './ContriesWrapper';

const Favourite = () => {
    return (
        <div className=" section-wrapper py-5">
            <p className="title">DESTINASI FAVORIT</p>
            <div className="section-sub">
                <h1>🚁 • Temukan Destinasi Favoritmu </h1>
                <p className="title">
                    Lihat semua <ChevronRightRoundedIcon />
                </p>
            </div>
            <CountriesWrapper />
        </div>
    );
};

export default Favourite;
