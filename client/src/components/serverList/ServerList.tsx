import { useState } from 'react';
import Server from '../../models/Server';
import HorizontalDivider from '../common/divider/HorizontalDivider';
import AddServerButton from './AddServerButton';
import DMButton from './DMButton';
import ServerButton from './ServerButton';
import './ServerList.css';

interface ServerListProps {
    servers?: Server[];
}

const ServerList = ({ servers = [] }: ServerListProps) => {
    const [selectedServer, setSelectedServer] = useState<number>(0);

    return (
        <div className='ServerList flex flex-col items-center w-16 h-full pt-2'>
            <DMButton
                buttonId={0}
                selected={selectedServer}
                setSelected={setSelectedServer}
                hasMessage={false}
            />
            <HorizontalDivider className='my-2' />
            {servers.map((server, index) => {
                return (
                    <ServerButton
                        key={server.id}
                        serverId={server.id}
                        serverName={server.name}
                        buttonId={1 + index}
                        selected={selectedServer}
                        setSelected={setSelectedServer}
                    />
                );
            })}
            <AddServerButton />
        </div>
    );
};

export default ServerList;
