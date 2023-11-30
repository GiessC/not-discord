import { useState } from 'react';
import { BsPlus as PlusIcon } from 'react-icons/bs';

const AddServerButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`ServerButton w-12 h-12 ${
                isHovered ? 'bg-lime-500' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <PlusIcon
                className={`mx-auto w-8 h-8 overflow-hidden text-lime-500 ${
                    isHovered ? 'text-white' : ''
                }`}
            />
        </button>
    );
};

export default AddServerButton;
