

import React from 'react';
import {RoomContext} from '../Context';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero'
class SingleRoom extends React.Component{


    constructor(props){
super(props);
console.log('The slug ',this.props.match.params.id);
this.state = {
    slug : this.props.match.params.id
}
    }
    static contextType = RoomContext;

render(){
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    console.log(JSON.stringify(room))
    if(!room){
        return (
            <div className="error">
No room found
<Link to="/rooms" className="btn-primary">Back To Rooms</Link>
            </div>
        )
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;//destructing
    const [firstImg,...netImages] = images;
    return (
        <>
        <StyledHero img={firstImg}>
<Banner title={`${name} room`}>
    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
</Banner>
        </StyledHero>
<section className="single-room">
<div className="single-room-images">
{
    netImages.map((item,index)=>{
        return <img key={index} src={item}/>
    })
}
</div>
<div className="single-room-info">
    <article className="desc">
<h3>details</h3>
<p>{description}</p>
    </article>
    <article className="info">
<h3>info</h3>
<h6>price : $ {price}</h6>
<h6>Size : ${size} sqft</h6>
<h6>
    max capacity :
    {
        capacity > 1 ? `${capacity} people`: `${capacity} person`
    }
</h6>
<h6>
    {
        pets ? 'pets Allowed ' : 'no pets allowed'
    }
</h6>
    </article>
</div>
</section>
<section className="room-extras">
<h6>extras</h6>
<ul className="extras">
{
    extras.map((item,index)=>{
        return <li key={index}>
            {item}
        </li>
    })
}
</ul>
</section>
        </>

    )
}

}

export default SingleRoom;