import { useState } from 'react';
import './ServerButton.css';

interface ServerButtonProps {
    className?: string;
    buttonId: number;
    serverId?: string;
    serverName?: string;
    icon?: string;
    hoverIcon?: string;
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    hasMessage?: boolean;
}

const ServerButton = ({
    className = '',
    buttonId,
    serverId = '',
    serverName = '',
    icon = `${process.env.PUBLIC_URL}/images/logo/logo.png`,
    hoverIcon = icon,
    selected,
    setSelected,
    hasMessage = false,
}: ServerButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex w-full ${className}`}>
            <div
                className={`StatusIndicator focus:outline-none rounded fixed bg-white w-1 transition-all duration-200 ease-in-out transform ${
                    selected === buttonId
                        ? 'top-4 h-8'
                        : isHovered
                        ? 'top-6 h-4'
                        : hasMessage
                        ? 'top-7 h-2'
                        : 'top-8 h-0'
                }`}
            />
            <div className='flex mx-auto justify-center'>
                <button
                    className={`ServerButton outline-none focus-visible:outline-2 focus-visible:outline-blue-500 w-12 h-12 ${
                        selected === buttonId ? 'Selected' : ''
                    }`}
                    onClick={() => setSelected(buttonId)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img
                        className='w-12 h-12 overflow-hidden'
                        src={isHovered ? hoverIcon : icon}
                        alt={serverName}
                    />
                </button>
            </div>
        </div>
    );
};

export default ServerButton;
