import React from 'react';
import Title from '../components/Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
class Services extends React.Component{

constructor(){
    super();
    this.state = {
        services : [
            {
                icon :  <FaCocktail/>,
                title : "Free Cocktails",
                info : "Discover Good Food's best ever mocktail recipes for every occasion, including non-alcoholic punch, mulled drinks, juices, spritzers, cordials and coolers. "
            },
            {
                icon :  <FaHiking/>,
                title : "Endless hiking",
                info : "Endless Hikes documents some of the adventures to be had on these treks and provides some tips on how best to travel safely through these remote wilderness regions. "
            },
            {
                icon :  <FaShuttleVan/>,
                title : "Free Shuttle",
                info : "Certain conditions may delay or disrupt shuttle services managed by Commute.org. When possible, we use 'route specific' Text Alerts to notify riders about schedule changes, stop or route adjustments. "
            },
            {
                icon :  <FaBeer/>,
                title : "Strongest Beer",
                info : "Take a deeper dive into America’s craft beer styles and improve your ability to describe the tastes, textures and aromas of beer.  "
            }
        ]
    }
}
render(){
    return (
        <div>
<Title title="services"/>
<div className="services-center">
{
    this.state.services.map((item,i)=>{
        return (
            <article key={i} className="service">
<span>{item.icon}</span>
<h6>
    {item.title}
</h6>
<p>
    {item.info}
</p>
            </article>
        )
    })
}
</div>
        </div>
    )
}
}
export default Services;