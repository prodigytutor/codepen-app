import type { NextPage } from 'next';
import Header from '../components/index/Sidebar';
import Search from '../components/index/Search';
import Section from '../components/index/Section';
import Footer from '../components/index/Footer';

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Search />
    <Section />
    <Footer />
    </>
  )
}

export default Home
