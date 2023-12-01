import { useState } from 'react';
import { BsPlus as PlusIcon } from 'react-icons/bs';

interface AddServerButtonProps {
    className?: string;
}

const AddServerButton = ({ className = '' }: AddServerButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`ServerButton outline-none focus-visible:outline-2 focus-visible:outline-blue-500 w-12 h-12 ${
                isHovered ? 'bg-lime-500' : ''
            } ${className}`}
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
