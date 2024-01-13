import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import VideoGrid from '@/components/VideoGrid';
import AppBar from '@/components/AppBar';
import SideBar from '@/components/SideBar';
import { ShowSideBar } from '@/atoms/ShowSideBar';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
   <div>
    <RecoilRoot>
      <AppBar />
      <div className='flex'>
        <SideBar />
        <VideoGrid />
      </div>
    </RecoilRoot>
   </div>
  )
}
