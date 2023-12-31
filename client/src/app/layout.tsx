import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Pricer',
    description: 'Checks prices without effort',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className='dark' lang='en'>
            <body className={`${inter.className} dark:bg-primary-dark`}>{children}</body>
        </html>
    );
}
