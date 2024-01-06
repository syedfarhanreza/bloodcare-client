import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_vh5t4nn', 'template_om8ityr', form.current, '1XENWBGUSp5ChM5sJ')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email Send Successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero py-10 bg-pink-100">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left card shrink-0 w-full max-w-sm">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6 font-bold">Email: bloodcare.pub@gmail.com <br />Number: 01786767972</p>
          <p className="py-6"></p>
        </div>
        <div className="card shrink-0 w-full max-w-md lg:max-w-xl shadow-2xl bg-base-100">
          <form ref={form} onSubmit={sendEmail} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input name="subject" placeholder="Subject" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" value="Send">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
