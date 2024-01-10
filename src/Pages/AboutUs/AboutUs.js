import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="m-20">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-12 rounded-lg shadow-xl shadow-pink-500/50">
                <h3 className="text-4xl font-bold mb-4">Welcome to BloodCare!</h3>
                <p className="text-lg">Discover the life-saving world of blood donation.</p>
            </div>

            <div className="my-20 grid md:grid-cols-2 gap-16">
                <div>
                    <p className="text-lg leading-relaxed">
                        BloodCare is an immersive platform that celebrates the beauty and impact of blood donation. Our mission is to inspire individuals to donate blood and save lives. With BloodCare, you can explore the importance of blood donation, learn about the donation process, and find donation centers near you.
                    </p>

                    <div className="my-8">
                        <h3 className="font-bold text-2xl mb-4">Why Choose BloodCare?</h3>
                        <p className="text-lg leading-relaxed">
                            At BloodCare, we firmly believe that every blood donation has the potential to create a ripple effect of positive change. When you generously donate blood, you not only save lives in the immediate moment but also contribute to building stronger, healthier communities for the future. The impact of your selfless act reverberates through countless lives, providing a lifeline for those facing medical emergencies, surgeries, and chronic conditions.
                            Our platform is dedicated to empowering individuals with the knowledge and resources they need to make informed decisions about blood donation. We strive to foster a deep understanding of the importance of regular donations, emphasizing the ongoing need for a sustainable blood supply to meet the ever-growing demands of medical treatments and emergencies.
                            By connecting donors with blood banks and recipients, we bridge the gap between compassion and necessity. Through our user-friendly interface, you can easily find nearby blood donation centers, schedule appointments, and even track the journey of your donated blood, gaining a sense of fulfillment knowing that your contribution has directly impacted someone's life.
                            At BloodCare, we are passionate about creating a culture of giving and gratitude. We celebrate the generosity of donors, recognizing their invaluable role in strengthening the fabric of society. Together, let us continue to inspire others to join this life-saving movement and shape a brighter, healthier future for all. </p>
                    </div>
                </div>

                <div>
                    <div>
                        <h3 className="font-bold text-2xl mb-4">Our Vision</h3>
                        <p className="text-lg leading-relaxed">
                            Our vision is to create a world where every individual understands the significance of blood donation and actively participates in this life-saving act. We strive to ensure that no one suffers due to a shortage of blood, and everyone has access to safe and timely blood transfusions when needed.
                        </p>
                    </div>

                    <div className="my-8">
                        <h3 className="font-bold text-2xl mb-4">Our Mission</h3>
                        <p className="text-lg leading-relaxed">
                            Our mission is to promote the culture of blood donation, educate the community about its importance, and facilitate the blood donation process. We are committed to maintaining a robust network of blood banks, organizing donation drives, and providing support to donors and recipients throughout their blood donation journey.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-4">Our Objective</h3>
                        <p className="text-lg leading-relaxed">
                            Our objective is to raise awareness about blood donation, encourage regular blood donations, and ensure the availability of safe and quality blood for patients in need. We aim to create a united community of blood donors who selflessly contribute to saving lives, fostering a culture of compassion and empathy.
                        </p>
                    </div>
                </div>
            </div>

            <section className="bg-gray-100 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Join the BloodCare Community</h2>
                <p className="text-lg leading-relaxed">
                    Become a part of our passionate community of blood donors and advocates. Together, we can make a lasting impact on countless lives. Join BloodCare today and let your selfless act of blood donation bring hope and healing to those in need.
                </p>
             <Link to='/register'><button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 mt-6 font-bold transition duration-300">Get Involved</button></Link>
            </section>


            {/* <section className="my-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Our Work</h1>
                    <p className="md:px-20">
                        Red Cross volunteers and staff work tirelessly to deliver vital services, providing relief and support to those in crisis while helping individuals and communities be prepared to respond effectively during emergencies.
                    </p>
                </div>

                <div className="my-10 md:mx-32 grid md:grid-cols-2 gap-12">
                    <div className="flex items-center">
                        <div className="rounded-full  p-2">
                            <img src="https://www.redcross.org/content/dam/redcross/about-us/about-us-icons/ERV-80x80-G-RC.png.transform/282/q70/feature/image.png" alt="Disaster Relief" className="h-12 w-12" />
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Disaster Relief</h4>
                            <p className="text-gray-600">Discover how we assist families and communities in their recovery efforts following natural disasters.</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="rounded-full  p-2">
                            <img src="https://www.redcross.org/content/dam/redcross/about-us/about-us-icons/World-Map-80x80-G-RC.png.transform/282/q70/feature/image.png" alt="International Services" className="h-12 w-12" />
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">International Services</h4>
                            <p className="text-gray-600">Learn how we provide aid and support programs to communities around the world.</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="rounded-full  p-2">
                            <img src="https://www.redcross.org/content/dam/redcross/about-us/about-us-icons/Blood-Donation-80x80-G-RC.png.transform/282/q70/feature/image.png" alt="Lifesaving Blood" className="h-12 w-12" />
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Lifesaving Blood</h4>
                            <p className="text-gray-600">Discover our blood donation processes, requirements, hosting opportunities, and more.</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="rounded-full  p-2">
                            <img src="https://www.redcross.org/content/dam/redcross/about-us/about-us-icons/Dog-Tags-80x80-G-RC.png.transform/282/q70/feature/image.png" alt="Military Families" className="h-12 w-12" />
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Military Families</h4>
                            <p className="text-gray-600">Learn how we support service members, veterans, and their families.</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="rounded-full  p-2">
                            <img src="https://www.redcross.org/content/dam/redcross/about-us/about-us-icons/Training-80x80-G-RC.png.transform/282/q70/feature/image.png" alt="Training & Certification" className="h-12 w-12" />
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Training & Certification</h4>
                            <p className="text-gray-600">Explore our health and safety courses for individuals and companies.</p>
                        </div>
                    </div>
                </div>
            </section> */}



        </div>
    );
};

export default AboutUs;