import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MapFeature from './MapFeature';
import { useTheme, useMediaQuery } from '@mui/material';

const MapDownSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div
            className={`d-flex ${
                isMobile ? 'flex-column' : 'flex-row'
            } justify-content-between  gap-3 mt-4`}
        >
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
