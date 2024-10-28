import MapImg from '../../../assets/Base.png';
import MapDownSection from './MapDownSection';
import MapRoundedIcon from '@mui/icons-material/MapRounded';

const Map = () => {
    return (
        <div className="d-flex flex-column gap-4 mb-5">
            <p
                className="px-2 fw-bold text-center"
                style={{
                    color: '#4475F2',
                }}
            >
                RESERVASI TEMPAT
            </p>
            <h1
                style={{
                    color: '#14183E',
                    fontWeight: 'bold',
                }}
                className="fw-bold text-wrap text-center"
            >
                <MapRoundedIcon /> • Cari Tempat Wisata Didekatmu
            </h1>
            <p className="text-center text-wrap">
                Fitur ini memungkinkan kamu untuk mencari tempat wisata atau
                tempat yang sedang populer <br />
                di daerah kamu dengan begitu kamu akan selalu update dan gak
                kudet lagi 👍🏻
            </p>
            <img src={MapImg} alt="map" />
            <MapDownSection />
        </div>
    );
};

export default Map;
