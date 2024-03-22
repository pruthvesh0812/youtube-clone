import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import VideoGrid from '@/components/VideoGrid';
import AppBar from '@/components/AppBar';
import SideBar from '@/components/SideBar';
import { ShowSideBar } from '@/store/atom/ShowSideBar';
import { RecoilRoot } from 'recoil';
import { GetServerSidePropsContext } from 'next';


const inter = Inter({ subsets: ['latin'] });

type pageProps = {
  isAuthenticated: boolean
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {

  console.log(context.req.cookies, "cookies clinet")
  const cookies = context.req.cookies
  const token = cookies['userTokenCookie']
  let isAuthenticated = false
  if (token) {
    isAuthenticated = true
  }

  return {
    props: {
      isAuthenticated
    }
  }
}

export default function Home({ isAuthenticated }: pageProps) {

  return (
    <div>
      <RecoilRoot>
        <AppBar isAuthenticated={isAuthenticated} />
        <div className='flex'>
          <SideBar />
          <VideoGrid />
        </div>
      </RecoilRoot>
    </div>
  )
}
