import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/logo.jpg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-red-600 text-base-content">
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
    <span className="footer-title text-white">Important Links</span> 
    <Link to='/' className="link link-hover text-white">Home</Link> 
    <Link to='/bloodRequests' className="link link-hover text-white">Add Blood Request</Link>
    <Link to='/donors' className="link link-hover text-white">Search Blood Donors in Bangladesh</Link> 
    <Link className="link link-hover text-white">Frequently Asked Questions (FAQs)</Link> 
    <Link to='/aboutUs' className="link link-hover text-white">About Us</Link>
    <Link to='/contactUs' className="link link-hover text-white">Contact Us</Link>
  </div> 
  <div>
    <span className="footer-title text-white">About Blood</span> 
    <Link to='/what-is-blood' className="link link-hover text-white">What is blood?</Link> 
    <Link to='/what-is-blood-donation' className="link link-hover text-white">What is blood donation?</Link> 
    <Link to='/who-can-donate-blood' className="link link-hover text-white">Who can donate blood?</Link>
    <Link className="link link-hover text-white">How often can I donate blood?</Link>
    <Link className="link link-hover text-white">Different Blood Terms</Link>
    <Link className="link link-hover text-white">Different Blood Groups</Link>
  </div>
</footer>
    );
};

export default Footer;