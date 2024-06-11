import React from 'react';
import About from './About';
import ChooseUs from './ChooseUs';
import Homeslideshow from './Homeslideshow';
import Services from './Services';
import Offers from './Offers'; // Import the new Offers component
import OtherLaundryWebsites from './OtherLaundryWebsites';

const Home = () => {
  return (
    <>
      <Homeslideshow />
      <Offers /> {/* Add the Offers section here */}
      <Services />
      <OtherLaundryWebsites />
      <ChooseUs />
      <About />
    </>
  );
}

export default Home;
