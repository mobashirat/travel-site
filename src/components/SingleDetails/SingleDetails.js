import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleDetail.css'


const SingleDetails = () => {
    const { serviceId } = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
                <div className="col-md-7 col-12 mt-4 des">
                    <h3 className="header">{singleDetail?.name}</h3>
                    <p>{singleDetail?.describtion}</p>
                    <h4>Total Package cost:  <span> {singleDetail?.price}</span></h4>
                </div>
                <div className="col-md-5 col-12 mt-4">
                    <img src={singleDetail?.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;