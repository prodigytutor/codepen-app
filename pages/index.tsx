import type { NextPage } from 'next';
import Header from '../components/index/Header';
import Sidebar from '../components/index/Sidebar';
import Section1 from '../components/index/Section1';
import Section2 from '../components/index/Section2';

const Home: NextPage = () => {
  return (
    <>
    <div className='home-container flex flex-row'>
      <div className='flex flex-col'>
      <Sidebar />
      </div>
      <div className='flex flex-col'>
      <Header />
     <Section1 />
    {/*    <Section2 /> */}
      </div>
      </div>
    </>
  )
}

export default Home
