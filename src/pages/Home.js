import React from 'react';
import Hero from '../components/Hero'
import  {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import SimpleButton from '../components/StyledHero';
const Home = ()=>{

return (
    <>
    <Hero >
<Banner title="luxarious rooms" subtitle="delux rooms starterd at $230">
<Link to="/rooms" className="btn-primary">our rooms</Link>
</Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    <SimpleButton></SimpleButton>
    </>
)
}

export default Home;