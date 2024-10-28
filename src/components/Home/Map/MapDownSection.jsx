import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MapFeature from './MapFeature';

const MapDownSection = () => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center gap-3">
            <MapFeature
                svg={<FmdGoodRoundedIcon />}
                title="Populer di dekatmu"
                description="Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu"
            />
            <MapFeature
                svg={<GroupsRoundedIcon />}
                title="Favorit di dekatmu"
                description="Tempat wisata yang tersedia di sekitar lokasi anda"
            />
            <MapFeature
                svg={<FavoriteRoundedIcon />}
                title="Tempat Favorit"
                description="Tempat wisata yang anda sukai yang tersedia di sekitar lokasi anda"
            />
        </div>
    );
};

export default MapDownSection;
