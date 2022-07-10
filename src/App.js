import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './sections/Home';
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';

import Dragon from './pages/Dragon';
import Falcon9 from './pages/Falcon9';
import FalconHeavy from './pages/FalconHeavy';
import HumanSpaceflight from './pages/HumanSpaceflight';
import Launches from './pages/Launches';
import Mission from './pages/Mission';
import Rideshare from './pages/Rideshare';
import Starship from './pages/Starship';

import Player from './components/Player';
import StarlinkMission from './sections/StarlinkMission';
import Ses22 from './sections/Ses22';
import Globalstar from './sections/Globalstar';
import Sarah1 from './sections/Sarah1';
import StarshipUpdate from './sections/StarshipUpdate';

function App() {
  return (
    <>
      <Router>
      <Header />
      <Hamburger />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/falcon9' element={<Falcon9 />} />
          <Route path='/falcon-heavy' element={<FalconHeavy />} />
          <Route path='/dragon' element={<Dragon />} />
          <Route path='/starship' element={<Starship />} />
          <Route path='/human-spaceflight' element={<HumanSpaceflight />} />
          <Route path='/rideshare' element={<Rideshare />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/launches' element={<Launches />} />

          <Route path='/starlink-mission' element={<StarlinkMission />} />
          <Route path='/ses-22' element={<Ses22 />} />
          <Route path='/globalstar' element={<Globalstar />} />
          <Route path='/sarah1' element={<Sarah1 />} />
          <Route path='/updates' element={<StarshipUpdate />} />


          <Route path='/starlink-mission/video' element={<Player url="https://www.youtube.com/watch?v=u_A7xdnVllM" />} />
          <Route path='/ses-22/video' element={<Player url="https://www.youtube.com/watch?v=ZjUvXWg2_fE" />} />
          <Route path='/globalstar/video' element={<Player url="https://www.youtube.com/watch?v=94cClvOFWH4&t=4s" />} />
          <Route path='/sarah1/video' element={<Player url="https://www.youtube.com/watch?v=lCX-KUCn4A4" />} />
          <Route path='/falcon9/video' element={<Player url="https://www.youtube.com/watch?v=Z4TXCZG_NEY" />} />
          <Route path='/falcon-heavy/video' element={<Player url="https://www.youtube.com/watch?v=A0FZIwabctw" />} />
          <Route path='/dragon/video' element={<Player url="https://www.youtube.com/watch?v=78ATfCaBn6E" />} />
          <Route path='/dragon-parachute/video' element={<Player url="https://www.youtube.com/watch?v=ulVZds71CZQ&list=WL&index=43" />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
