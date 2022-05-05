import type { NextPage } from 'next';
import Header from '../components/index/Header';
import Sidebar from '../components/index/Sidebar';
import Section1 from '../components/index/Section1';
import Section2 from '../components/index/Section2';

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Section1 />
      <Section2 />
    </>
  )
}

export default Home
