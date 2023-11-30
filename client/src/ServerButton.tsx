import './ServerButton.css';

interface ServerButtonProps {
    serverId?: string;
    serverName?: string;
    icon?: string;
    hoverIcon?: string;
}

const ServerButton = ({
    serverId = '',
    serverName = '',
    icon = '',
    hoverIcon = '',
}: ServerButtonProps) => {
    return (
        <button className='ServerButton rounded-full w-12 h-12'>
            <img src={icon} alt={serverName} />
        </button>
    );
};

export default ServerButton;
