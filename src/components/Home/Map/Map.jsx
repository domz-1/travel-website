import MapImg from '../../../assets/Base.png';
import MapDownSection from './MapDownSection';
import { useTheme, useMediaQuery } from '@mui/material';
import { Emoji } from 'react-apple-emojis';

const Map = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className="d-flex flex-column gap-4 map-section-wrapper justify-content-center align-content-center mx-5">
            <p
                className="px-2 fw-bold text-center"
                style={{
                    color: 'rgba(71, 55, 255, 1)',
                }}
            >
                RESERVASI TEMPAT
            </p>
            <h1
                style={{
                    color: '#14183E',
                    fontWeight: 'bold',
                }}
                className="fw-bold text-wrap text-center px-2"
            >
                <Emoji name="world-map" className="section-emoji" /> • Cari
                Tempat Wisata Didekatmu
            </h1>
            <p className="text-center text-wrap px-2">
                Fitur ini memungkinkan kamu untuk mencari tempat wisata atau
                tempat yang sedang populer <br />
                di daerah kamu dengan begitu kamu akan selalu update dan gak
                kudet lagi 👍🏻
            </p>
            <img
                src={MapImg}
                alt="map"
                className="flex-shrink-1 "
                style={{
                    maxWidth: '100%',
                    height: isMobile ? '200px' : 'auto',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '1px solid #F0F0F0',
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                    marginBottom: '20px',
                }}
            />
            <MapDownSection />
        </div>
    );
};

export default Map;
