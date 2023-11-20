import FavoriteItem from './favoriteItem';

const FavoritesWrapper = () => (
    <div className='flex-none flex justify-between w-10/12 h-48 my-8 border-white border-2'>
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
    </div>
);

export default FavoritesWrapper;
