import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import GalleryImages from './GalleryImages';
import { Emoji } from 'react-apple-emojis';
const Gallery = () => {
    return (
        <div className="section-wrapper mx-5">
            <p className="title">MENGENAL DESTINIZE</p>
            <div className="section-sub">
                <h1>
                    <Emoji name="camera" className="section-emoji" />• Galeri
                    Pariwisata & Blog Travel
                </h1>
                <p className="title">
                    Lihat semua <ChevronRightRoundedIcon />
                </p>
            </div>
            <GalleryImages />
        </div>
    );
};

export default Gallery;
