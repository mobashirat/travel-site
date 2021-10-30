import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleDetails = () => {
    const { serviceId } = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))

    }, [])
    useEffect(() => {
        const foundDetails = serviceDetails?.find(service => service.id === serviceId)
        setSingleDetail(foundDetails)
    }, [serviceId, serviceDetails])
    return (
        <div>
            <div className="row">
                <div className="col-md-7 col-12">
                    <h3>{singleDetail?.name}</h3>
                </div>
                <div className="col-md-5 col-12">
                    <img src={singleDetail?.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;