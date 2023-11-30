import {
    BsEmojiSunglassesFill as EmojiIcon,
    BsPlusCircleFill as PlusIcon,
} from 'react-icons/bs';
import { PiGifFill as GifIcon } from 'react-icons/pi';
import './ChatBox.css';

interface ChatBoxProps {
    channel?: string;
}

const ChatBox = ({ channel = 'channel' }: ChatBoxProps) => {
    return (
        <div className='ChatBox flex justify-center items-center w-11/12 h-12 rounded-md m-auto'>
            <label className='mx-2 w-8 h-8' htmlFor='file-input'>
                <PlusIcon className='UploadIcon w-full h-full' />
            </label>
            <input
                id='file-input'
                type='file'
                className='Upload mx-2 w-8 h-8'
            />
            <input
                className='w-full h-full'
                type='text'
                placeholder={`Message #${channel}`}
            />
            <button className='Gif mx-2 w-8 h-8'>
                <GifIcon className='GifIcon w-full h-full' />
            </button>
            <button className='Emoji mx-2 w-8 h-8'>
                <EmojiIcon className='EmojiIcon w-full h-full' />
            </button>
        </div>
    );
};

export default ChatBox;
