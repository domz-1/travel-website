import sposnsor1 from '../../../assets/s1.png';
import sposnsor2 from '../../../assets/s2.png';
import sposnsor3 from '../../../assets/s3.png';
import sposnsor4 from '../../../assets/s4.png';
import sc from '../../../assets/sc.png';

const Sponsors = () => {
    return (
        <div className="sponsors">
            <img
                src={sposnsor1}
                alt="s1"
                className="photo-gray"
                style={{
                    transition: 'linear',
                }}
            />
            <img
                src={sposnsor2}
                alt="s2"
                className="photo-gray"
                style={{
                    transition: 'linear',
                }}
            />
            <img
                src={sc}
                alt="sc"
                className="photo-gray"
                style={{
                    transition: 'linear',
                }}
            />
            {/* <img src={sc} alt="sc" className="photo-normal" /> */}
            <img
                src={sposnsor3}
                alt="s3"
                className="photo-gray"
                style={{
                    transition: 'linear',
                }}
            />
            <img
                src={sposnsor4}
                alt="s4"
                className="photo-gray"
                style={{
                    transition: 'linear',
                }}
            />
        </div>
    );
};

export default Sponsors;
