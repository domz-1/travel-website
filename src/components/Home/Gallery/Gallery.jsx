import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import GalleryImages from './GalleryImages';
const Gallery = () => {
    return (
        <div className="section-wrapper">
            <p className="title">MENGENAL DESTINIZE</p>
            <div className="section-sub">
                <h1>📷• Galeri Pariwisata & Blog Travel</h1>
                <p className="title">
                    Lihat semua <ChevronRightRoundedIcon />
                </p>
            </div>
            <GalleryImages />
        </div>
    );
};

export default Gallery;
