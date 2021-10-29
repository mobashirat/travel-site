import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light">

            <div className="row mt-4 footer">
                <div className="col-md-3 col-12 mt-4">
                    <li>Country</li>
                    <li>contact us</li>
                    <li>help</li>
                    <li>FAQ</li>
                </div>
                <div className="col-md-3 col-12 mt-4">
                    <li>news</li>
                    <li>about us</li>
                    <li>privacy policy</li>
                    <li>discount</li>
                </div>
                <div className="col-md-3 col-12 mt-4">

                    <li>support</li>
                    <li>flight</li>
                    <li>hotels</li>
                    <li>booking</li>
                </div>
                <div className="col-md-3 col-12 mt-4 social-link">
                    <h6>Follow us</h6>
                    <i class="fab fa-facebook fs-3"></i>
                    <i class="fab fa-linkedin fs-3"></i>
                    <i class="fab fa-instagram fs-3"></i>
                    <i class="fab fa-twitter fs-3"></i>

                </div>
                <p style={{ color: 'gray' }}><i class="far fa-copyright"></i>All right reserved by Take Off 2021</p>

            </div>

        </div>
    );
};

export default Footer;