import CarouselBanner from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Gallery/Gallery";
import Review from "../../Components/Reveiw/Review";
import Title from "../../Components/Title/Title";
import Trainer from "../../Components/Trainer/Trainer";

const Home = () => {
  return (
    <div>
      <CarouselBanner />
      <Title />
      <Gallery />
      <Trainer />
      <Review />
    </div>
  );
};

export default Home;
