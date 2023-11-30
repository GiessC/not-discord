import { useState } from 'react';
import './ServerButton.css';

interface ServerButtonProps {
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
        <div className='flex w-full'>
            <div
                className={`StatusIndicator rounded fixed bg-white w-1 transition-all duration-200 ease-in-out transform ${
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
                    className={`ServerButton w-12 h-12 ${
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
