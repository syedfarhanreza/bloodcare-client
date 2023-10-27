import React from 'react';

const AboutBlood = () => {
    return (
        <div className='w-4/5 mx-auto mt-5 mb-20 text-justify'>
            <h1 className='text-4xl font-bold my-2'>What is blood?</h1>
            <p className='mt-10 mb-3 text-lg'>
                Blood is a constantly circulating fluid providing the body with nutrition, oxygen, and waste removal. Blood is mostly liquid, with numerous cells and proteins suspended in it, making blood “thicker” than pure water. The average person has about 5 liters (more than a gallon) of blood.</p>
            <p className='mt-5 mb-3 text-lg'>
                A liquid called plasma makes up about half of the content of the blood. Plasma contains proteins that help the blood to clot, transport substances through the blood, and perform other functions. Blood plasma also contains glucose and other dissolved nutrients.
            </p>
            <p className='mt-5 mb-3 text-lg'>
                About half of the blood volume is composed of blood cells:
                <ul className='list-disc ml-14 mt-2'>
                    <li>Red blood cells, which carry oxygen to the tissues</li>
                    <li>White blood cells, which fight infections</li>
                    <li>Platelets, smaller cells that help the blood to clot</li>
                </ul>
            </p>
            <p className='mt-5 mb-3 text-lg'>
                Blood is conducted through blood vessels (arteries and veins). Blood is prevented from clotting in the blood vessels by their smoothness, and the finely tuned balance of clotting factors.
            </p>
        </div>
    );
};

export default AboutBlood;