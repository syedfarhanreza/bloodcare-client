import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/logo.jpg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-red-900 text-base-content">
  <div>
    <img  src={logo} alt="" />
    <p className='text-white'>BloodCare<br/>A web-based solution for effective Blood Management and Donation Campaigns</p>
  </div> 
  <div>
    <span className="footer-title text-white">Services</span> 
    <Link className="link link-hover text-white">Branding</Link> 
    <Link className="link link-hover text-white">Design</Link> 
    <Link className="link link-hover text-white">Marketing</Link> 
    <Link className="link link-hover text-white">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title text-white">Company</span> 
    <Link className="link link-hover text-white">About us</Link> 
    <Link className="link link-hover text-white">Contact</Link> 
    <Link className="link link-hover text-white">Jobs</Link> 
    <Link className="link link-hover text-white">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title text-white">Legal</span> 
    <Link className="link link-hover text-white">Terms of use</Link> 
    <Link className="link link-hover text-white">Privacy policy</Link> 
    <Link className="link link-hover text-white">Cookie policy</Link>
  </div>
</footer>
    );
};

export default Footer;