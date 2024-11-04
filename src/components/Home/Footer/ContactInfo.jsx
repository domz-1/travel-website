import { CiPhone, CiMail } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { BsPrinter } from 'react-icons/bs';

const ContactInfo = () => {
    return (
        <div className="d-flex flex-column gap-3">
            <p className="gray-color">
                <CiPhone style={{ width: 18, height: 18 }} /> &nbsp;
                0851-5616-2840
            </p>
            <p className="gray-color">
                <CiMail style={{ width: 18, height: 18 }} /> &nbsp;
                syaokay@gmail.com
            </p>
            <p className="gray-color">
                <SlLocationPin style={{ width: 18, height: 18 }} /> &nbsp;
                Ciamis, Jawa Barat. Indonesia
            </p>
            <p className="gray-color">
                <BsPrinter style={{ width: 18, height: 18 }} /> &nbsp;
                +1-212-9876543
            </p>
        </div>
    );
};

export default ContactInfo;
