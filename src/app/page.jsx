import Image from "next/image";
import { Header } from "./Components/Header/Header";
import { Banner } from "./Components/Banner/Banner";
import MarqueeSlider from "./Components/Marqueeslider/Marqueeslider";
import Ourexperties from '@/app/Components/Ourexperties/Ourexperties';
import Global from "./Components/Global/Gloabl";
import Carousel from "./Components/Carousel/Carousel";
import FAQAccordion from "./Components/Accordian/Accordian";
import Form from "./Components/Form/Form";
import MarqueeText from "./Components/Marqueestrip/Marqueestrip";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <MarqueeSlider></MarqueeSlider>
      <Ourexperties></Ourexperties>
      <Global></Global>
      <Carousel></Carousel>
      <FAQAccordion></FAQAccordion>
      <Form></Form>
      <MarqueeText></MarqueeText>
      <Footer></Footer>
    </div>
  );
}
