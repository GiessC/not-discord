import { BsPlusCircleFill as PlusIcon } from 'react-icons/bs';
import './ChatBox.css';

interface ChatBoxProps {
    channel?: string;
}

const ChatBox = ({ channel = 'channel' }: ChatBoxProps) => {
    return (
        <div className='ChatBox flex justify-center items-center w-11/12 h-12 rounded-md m-auto'>
            <button className='Upload mx-2 w-8 h-8'>
                <PlusIcon className='w-full h-full' />
            </button>
            <input
                className='w-full h-full'
                type='text'
                placeholder={`Message #${channel}`}
            />
            <button className='Gif'></button>
            <button className='Emoji'></button>
        </div>
    );
};

export default ChatBox;
