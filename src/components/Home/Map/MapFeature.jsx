const MapFeature = (props) => {
    return (
        <div className="d-flex flex-row">
            <div
                className="text-center align-self-center mx-2 "
                style={{
                    backgroundColor: '#EFF2F6',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    verticalAlign: 'top',
                }}
            >
                <p
                    style={{
                        backgroundColor: '#EFF2F6',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        verticalAlign: 'top',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'top',
                        justifySelf: 'top',

                        fontSize: '20px',
                    }}
                >
                    {props.svg}
                </p>
            </div>
            <div className="d-flex flex-column">
                <p className="fw-bold">{props.title}</p>
                <p className="feature-discretion">{props.description}</p>
            </div>
        </div>
    );
};

export default MapFeature;
