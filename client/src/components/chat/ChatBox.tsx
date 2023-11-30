import { useState } from 'react';
import {
    BsEmojiSunglassesFill as EmojiIcon,
    BsPlusCircleFill as PlusIcon,
} from 'react-icons/bs';
import { sanitizeMessage } from '../../utils/Sanitization';
import './ChatBox.css';
import GifButton from './GifButton';
import GifPicker from './GifPicker';

interface ChatBoxProps {
    channel?: string;
}

const ChatBox = ({ channel = 'channel' }: ChatBoxProps) => {
    const [message, setMessage] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

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
        <div
            className={`ChatBox flex justify-center items-center w-11/12 h-12 rounded-md m-auto border-2 ${
                isFocused ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setIsFocused(true)}
        >
            <label className='mx-2 w-8 h-8' htmlFor='file-input'>
                <PlusIcon className='UploadIcon w-full h-full' />
            </label>
            <input
                id='file-input'
                type='file'
                className='Upload mx-2 w-8 h-8'
            />
            <textarea
                rows={message?.split('\n').length || 1}
                className='pl-2 focus:outline-none resize-none bg-inherit w-full h-full'
                placeholder={`Message #${channel}`}
                value={message || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                }
                onKeyDown={handleKeyDown}
                onFocus={(e: React.FocusEvent) => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <GifButton />
            <button className='Emoji mx-2 w-8 h-8'>
                <EmojiIcon className='EmojiIcon w-full h-full' />
            </button>
        </div>
    );
};

export default ChatBox;

