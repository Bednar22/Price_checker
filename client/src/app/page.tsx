import AreaChartComponent from '../components/areaChart';
import FavoritesWrapper from '@/components/mainPage/favorites/favoritesWrapper';
import ItemsWrapper from '@/components/mainPage/items/itemsWrapper';

export default function Home() {
    return (
        <main className='flex flex-col w-screen min-h-screen items-center px-8'>
            {/* <div className='h-64'>
                <AreaChartComponent />
            </div> */}
            <FavoritesWrapper />
            <ItemsWrapper />
            {/* <h1 className='dark:text-label-dark'>text</h1> */}
        </main>
    );
}
// https://huemint.com/gradient-3/#palette=e6effd-ca4648-071514
