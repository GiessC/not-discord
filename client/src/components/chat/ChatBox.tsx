import { useState } from 'react';
import {
    BsEmojiSunglassesFill as EmojiIcon,
    BsPlusCircleFill as PlusIcon,
} from 'react-icons/bs';
import { sanitizeMessage } from '../../utils/Sanitization';
import './ChatBox.css';
import GifButton from './GifButton';

interface ChatBoxProps {
    channel?: string;
}

const ChatBox = ({ channel = 'channel' }: ChatBoxProps) => {
    const [message, setMessage] = useState<string | null>(null);

    const sendMessage = () => {
        if (!message?.trim()) return;
        console.log(message);
        const sanitized = sanitizeMessage(message);
        console.log(sanitized);
        setMessage(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className='ChatBox flex justify-center items-center w-11/12 h-12 rounded-md m-auto border-2 border-transparent'>
            <label className='mx-2 w-8 h-8' htmlFor='file-input'>
                <PlusIcon className='UploadIcon w-full h-full' />
            </label>
            <input
                id='file-input'
                type='file'
                className='Upload mx-2 w-8 h-8'
            />
            <button className='transparent w-full h-full cursor-none outline-none focus-visible:outline-2 focus-visible:outline-blue-500'>
                <textarea
                    rows={message?.split('\n').length || 1}
                    className='pl-2 outline-none resize-none bg-inherit w-full h-full'
                    placeholder={`Message #${channel}`}
                    value={message || ''}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                    }
                    onKeyDown={handleKeyDown}
                />
            </button>
            <GifButton className='outline-none focus-visible:outline-2 focus-visible:outline-blue-500' />
            <button className='Emoji mx-2 w-8 h-8 outline-none focus-visible:outline-2 focus-visible:outline-blue-500'>
                <EmojiIcon className='EmojiIcon w-full h-full' />
            </button>
        </div>
    );
};

export default ChatBox;
