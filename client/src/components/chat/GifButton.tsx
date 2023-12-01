// import GifPicker, { TenorImage } from 'gif-picker-react';
import { useState } from 'react';
import { PiGifFill as GifIcon } from 'react-icons/pi';

interface GifButtonProps {
    className?: string;
}

const GifButton = ({ className = '' }: GifButtonProps) => {
    const [gifPickerOpen, setGifPickerOpen] = useState<boolean>(false);

    // const handleGifClick = (gif: TenorImage) => {
    // console.log(
    // `You have selected a GIF with the following URL: ${gif.tenorUrl}`,
    // );
    // };

    return (
        <>
            <button
                onClick={() => setGifPickerOpen(!gifPickerOpen)}
                className={`Gif mx-2 w-8 h-8 ${className}`}>
                <GifIcon className='GifIcon w-full h-full' />
            </button>
            {/* {gifPickerOpen && process.env.REACT_APP_TENOR_API_KEY && (
                <GifPicker
                    onGifClick={handleGifClick}
                    tenorApiKey={process.env.REACT_APP_TENOR_API_KEY}
                />
            )} */}
            {!process.env.REACT_APP_TENOR_API_KEY &&
                console.error(
                    'Error in GIF Picker: Failed to find Tenor API key.',
                )}
        </>
    );
};

export default GifButton;
