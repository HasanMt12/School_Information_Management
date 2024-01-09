
import Hero from "../../components/hero/Hero"
import BackToTopButton from "../../components/topBUtton/BackToTop"
import Gallery from "./Gallery"
import GoverningBody from "./GoverningBody"
import HomePageSpeech from "./HomePageSpeech"
import ResultChart from "./ResultChart"
import SchoolFacilities from "./SchoolFacilities"
import Subscription from "./Subscription"
import Total from "./Total"



const HomePage = () => {
  return (
    <div className="">
     
      <Hero></Hero>
      <HomePageSpeech />
      <GoverningBody />
      <SchoolFacilities></SchoolFacilities>
      <Total></Total>
      <ResultChart />
      <Gallery></Gallery>
      <Subscription></Subscription>
      <BackToTopButton />
    </div>
  )
}
export default HomePage