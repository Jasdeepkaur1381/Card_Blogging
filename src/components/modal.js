import React from 'react';

const modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    // const [list, addList] = useState('');
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
        // Do something with the input value
        console.log('Input Value:', inputValue);
        setInputValue('');
        closeModal();
    };

    return (
        <>
            <button onClick={openModal}>Open Modal</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>close</span>
                        <h2>Modal Title</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Input Field:
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default modal;