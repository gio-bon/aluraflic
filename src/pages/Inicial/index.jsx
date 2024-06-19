import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import HeaderMain from '../../components/HeaderMain';
import SectionCards from '../../components/SectionCards';


const Inicial = () => {
  return (
    <>
      <HeaderMain/>
      <Banner/>
      <SectionCards titulo="Front End" selecao="videos-front"/>
      <SectionCards titulo="Back End" selecao="videos-back"/>
      <SectionCards titulo="Mobile" selecao="videos-mobile"/>
      <Footer />
    </>
  )
}

export default Inicial
