import React, { useState } from 'react';
import {
    BsStarFill as FavoritesIcon,
    BsSearch as SearchIcon,
} from 'react-icons/bs';
import { PiTrendUpBold as TrendingIcon } from 'react-icons/pi';
import Gif from '../../models/Gif';
import TenorApi from '../../tenor/TenorApi';
import './GifPicker.css';

type GifCardColor = 'green' | 'red';

interface GifCardProps {
    className?: string;
    icon?: React.ReactNode | null;
    title: string;
    color?: GifCardColor;
}

const INPUT_KEYS = 'abcdefghijklmnopqrstuvwxyz1234567890';

const GifCard = ({
    className = '',
    icon,
    title,
    color = 'green',
}: GifCardProps) => {
    return (
        <div
            className={`GifCard mx-1 w-1/2 flex justify-center items-center h-20 rounded-md cursor-pointer ${
                color === 'green' && 'bg-green-600 hover:bg-green-700'
            } ${
                color === 'red' && 'bg-red-600 hover:bg-red-700'
            } ${className}`}>
            {icon}
            <span className='font-bold'>{title}</span>
        </div>
    );
};

const GifPicker = () => {
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const [lastSearch, setLastSearch] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState<Gif[]>([]);

    const handleSearchChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value: string = e.target?.value.trim() || '';
        if (value === lastSearch) return;
        const response = await TenorApi.getInstance().search(value);
        setLastSearch(value);
        const gifs: Gif[] = response?.data?.results;
        console.debug(gifs);
        setSearchResults(gifs);
    };

    return (
        <div className='GifPicker rounded-md w-1/4 p-2 absolute left-1/2 top-1/4'>
            <div className='Header w-full h-12 mb-2'>
                <div
                    className={`SearchContainer flex border-2 rounded-md items-center w-full h-full ${
                        isSearchFocused
                            ? 'border-blue-500'
                            : 'border-transparent'
                    }`}
                    onClick={() => setIsSearchFocused(true)}>
                    <SearchIcon className='m-3' />
                    <input
                        className='Search w-full h-full bg-inherit focus:outline-none'
                        id='gif-search'
                        name='gif-search'
                        type='text'
                        placeholder='Search GIFs'
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className={`List flex ${Boolean(searchResults) && 'hidden'}`}>
                <GifCard
                    icon={<FavoritesIcon className='mr-1' />}
                    title='Favorites'
                />
                <GifCard
                    icon={<TrendingIcon className='mr-1' />}
                    title='Trending'
                />
            </div>
            <div
                // TODO: search results are being displayed horizontally instead of vertically with 2 columns.
                className={`GifSearchResults h-20 overflow-y-scroll overflow-x-hidden columns-2 gap-0 ${
                    !searchResults && 'hidden'
                }`}>
                {searchResults.map((gif: Gif) => (
                    <img
                        className='GifSearchResult break-inside-avoid-column rounded-md m-2'
                        key={gif.id}
                        src={gif.media_formats['tinygif']?.url}
                        alt={gif.title}
                        height={gif.media_formats['tinygif']?.dims[1]}
                    />
                ))}
            </div>
        </div>
    );
};

export default GifPicker;
