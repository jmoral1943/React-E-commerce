import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import BannerCard from './BannerCard';
import surfBoards from '../../assets/img/homeBannerOne.jpeg';

const Home = () => {
  return(
    <div>
      <Hero />
      <Banner />
      <BannerCard 
        image={surfBoards}
        title="Taco Grinder Surfboard"
        descr="Surfer surfing"
      />
      <BannerCard 
        image={surfBoards}
        title="Taco Grinder Surfboard"
        descr="Surfer surfing"
      />
      <BannerCard 
        image={surfBoards}
        title="Taco Grinder Surfboard"
        descr="Surfer surfing"
      />
    </div>
  );
}

export default Home;