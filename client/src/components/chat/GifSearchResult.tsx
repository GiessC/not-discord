import {
    BsStarFill as FavoritesIcon,
    BsStar as FavoritesOutlineIcon,
} from 'react-icons/bs';
import Gif from '../../models/Gif';
import Skeleton from '../common/skeleton/Skeleton';

interface GifSearchResultProps {
    gif: Gif;
    favorited?: boolean;
    favoriteGIF: (gifId: string) => void;
}

const GifSearchResult = ({
    gif,
    favorited = false,
    favoriteGIF,
}: GifSearchResultProps) => {
    return (
        <Skeleton
            key={gif.id}
            className='GifSearchResult relative h-full w-full break-inside-avoid-column rounded-md hover:border-2 hover:border-blue-500'>
            <img
                className='rounded-md w-full'
                key={gif.id}
                src={gif.media_formats['tinygif']?.url}
                alt={gif.title}
                height={gif.media_formats['tinygif']?.dims[1]}
            />
            <button
                className='FavoriteButton absolute top-0 right-0 m-2'
                onClick={() => favoriteGIF(gif.id)}>
                {favorited ? (
                    <FavoritesIcon
                        strokeWidth={1}
                        className='text-yellow-500'
                    />
                ) : (
                    <FavoritesOutlineIcon
                        strokeWidth={1}
                        className='hover:text-yellow-500'
                    />
                )}
            </button>
        </Skeleton>
    );
};

export default GifSearchResult;
