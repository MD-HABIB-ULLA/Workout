import { Helmet } from "react-helmet-async";
import CarouselBanner from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Gallery/Gallery";
import Review from "../../Components/Reveiw/Review";
import Title from "../../Components/Title/Title";
import Trainer from "../../Components/Trainer/Trainer";
import Featured from "../../Components/Featured/Featured";
import FeaturedClasses from "../../Components/FeaturedClasses/FeaturedClasses";
import NewsletterForm from "../../Components/NewsletterForm/NewsletterForm";
import RecentForumPost from "../../Components/RecentForumPost/RecentForumPost";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Helmet>
        <title>Workout - Home</title>
      </Helmet>
      <CarouselBanner />
      <Featured />
      <Title />
      <Gallery />
      <Trainer />
      <FeaturedClasses />
      <Review />
      <RecentForumPost />
      <NewsletterForm />
    </div>
  );
};

export default Home;
