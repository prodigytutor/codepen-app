import type { NextPage } from 'next';
import Header from '../components/index/Header';
import Sidebar from '../components/index/Sidebar';

const Home: NextPage = () => {
  return (
    <>
    <Sidebar />
    <Header />
    </>
  )
}

export default Home
