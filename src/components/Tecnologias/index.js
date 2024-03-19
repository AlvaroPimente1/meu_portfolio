import '../../App.css';
import { useState } from 'react';
import Front from '../Front';
import Back from '../Back';

function Tecnologias() {
    const [activeContent, setActiveContent] = useState('frontEnd');

    return (
        <div className='bg-custom-blue flex justify-center h-screen'>
            <div className='flex flex-col pt-16 text-center'>
            {/* <h1 className='text-white'>Tecnologias</h1> */}
                <ul className='flex flex-row space-x-8'>
                    <li className={`p-8 border-2 border-custom-light-green rounded-xl bg-white cursor-pointer ${activeContent === 'frontEnd' ? 'text-custom-light-green bg-blue-500' : 'text-black'}`} onClick={() => setActiveContent('frontEnd')}>
                        Front-End
                    </li>
                    <li className={`p-8 border-2 border-custom-light-green rounded-xl bg-white cursor-pointer ${activeContent === 'backEnd' ? 'text-custom-light-green bg-blue-500' : 'text-black'}`} onClick={() => setActiveContent('backEnd')}>
                        Back-End
                    </li>
                </ul>
                <div className='flex p-8 rounded-xl items-center justify-center'>
                    {activeContent === 'frontEnd' && <Front/>}
                    {activeContent === 'backEnd' && <Back/>}
                </div>
            </div>
        </div>
    );
}

export default Tecnologias;
