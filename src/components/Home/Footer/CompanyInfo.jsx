const CompanyInfo = ({ icon }) => {
    return (
        <div className="gap-16">
            <img
                src={icon}
                alt=""
                className=""
                style={{ width: 32, height: 32 }}
            />
            <p className="fw-bold text-black" style={{ fontSize: '24px' }}>
                Destinize
            </p>
            <p className="gray-color">
                Destinize adalah website atau layanan aplikasi yang membantu
                kamu
                <br /> memilih atau merekomendasikan tempat yang dijuluki
                'hidden gems' agar <br /> lebih dikenal dan ramai &nbsp;
                <span style={{ fontWeight: 700, color: 'rgb(68, 117, 242)' }}>
                    Baca Selengkapnya
                </span>
            </p>
        </div>
    );
};

export default CompanyInfo;
