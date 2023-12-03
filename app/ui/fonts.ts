import { Inter, DotGothic16, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const dotGothic = DotGothic16({ subsets: ['latin'], weight: '400' });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
