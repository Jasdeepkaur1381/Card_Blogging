import React, { useState } from 'react';
import logo from '../images/toodleLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
// import axios from 'axios';

const Navbarh = ({ onsetInputValueList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Input Value:', inputValue);
        onsetInputValueList(inputValue, selectedOption);
        // const handleUpdateData = async () => {
        //     try {
        //       await axios.post('', { data: updatedData });
        //       console.log('Data updated successfully!');
        //     } catch (error) {
        //       console.error('Error updating data:', error);
        //     }
        //   };
        setInputValue('');
        closeModal();
    };
    return (
        <>
            <div className='h-16 w-full flex flex-row justify-between '>
                <div className='flex flex-row w-2/5'>
                    <img className='h-10' src={logo} alt='"toodle' />
                    <span className='pt-2'>toodle</span>
                </div>
                <div>
                    <div className='border-gray-400 outline-1'>
                        <SearchIcon />
                        <input className='border-none focus-visible:border-none' placeholder='Search..' />
                        <button className='bg-pink-300 p-1 h-8 text-m font-bold' onClick={openModal}>+ create New Board</button>
                    </div>
                    {isOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <div className='flex flex-row justify-between'>
                                    <h4>Add a name for your board</h4>
                                    <span className="close" onClick={closeModal}><CancelIcon /></span>
                                </div>
                                {/* <h4>Add a name for your board</h4>
                                <span className="close" onClick={closeModal}><CancelIcon /></span> */}
                                <form onSubmit={handleSubmit}>

                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder='Board Name'
                                    />
                                    <div className='flex flex-row m-4 justify-evenly'>
                                        <input
                                            type="radio"
                                            value="#007be5"
                                            checked={selectedOption === '#007be5'}
                                            onChange={handleOptionChange}
                                        />
                                        <div className='rounded-lg bg-[#007be5] w-5 h-5'></div>
                                        <input
                                            type="radio"
                                            value="#9747ff"
                                            checked={selectedOption === '#9747ff'}
                                            onChange={handleOptionChange}
                                        />
                                        <div className='rounded-lg bg-[#9747ff] w-5 h-5'></div>
                                        <input
                                            type="radio"
                                            value="#ff24bd"
                                            checked={selectedOption === '#ff24bd'}
                                            onChange={handleOptionChange}
                                        />
                                        <div className='rounded-lg bg-[#ff24bd] w-5 h-5'></div>
                                        <input
                                            type="radio"
                                            value="#ffcd29"
                                            checked={selectedOption === '#ffcd29'}
                                            onChange={handleOptionChange}
                                        />
                                        <div className='rounded-lg bg-[#ffcd29] w-5 h-5'></div>
                                    </div>


                                    <button className='bg-pink-300 p-0.5 h-8 text-m font-bold' type='Submit'>Create Board</button>
                                </form>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </>
    )
}
export default Navbarh;