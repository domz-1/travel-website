const MapFeature = (props) => {
    return (
        <div className="d-flex flex-row w-100 mx-2 gap-2 map-feature">
            <div
                className="text-center align-self-center mx-2 "
                style={{
                    backgroundColor: '#EFF2F6',
                    borderRadius: '50%',
                    verticalAlign: 'top',
                    display: 'flex',
                    transform: 'translatey(-40px)',
                }}
            >
                <p
                    style={{
                        backgroundColor: '#EFF2F6',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        verticalAlign: 'top',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        justifySelf: 'top',
                        fontSize: '24px',
                    }}
                >
                    {props.svg}
                </p>
            </div>
            <div className="d-flex flex-column">
                <p
                    className="fw-bold"
                    style={{
                        fontSize: '22px',
                    }}
                >
                    {props.title}
                </p>
                <p
                    className="feature-discretion"
                    style={{
                        fontSize: '22px',
                    }}
                >
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default MapFeature;
