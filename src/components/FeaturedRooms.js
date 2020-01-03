import React from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading'
import Title from '../components/Title';
import Room  from  './Room'
class FeaturedRooms extends React.Component{
static contextType = RoomContext;
render(){
    let {loading,featuredRooms : rooms} = this.context;
    console.log('The value is ',rooms);
   let roomslist = rooms.map((room)=>{
        return <Room key={room.id} room={room}/>
    })
    return (
        <section className="featured-rooms">
        <Title title="featured rooms"/>
        <div class="featured-rooms-center">
       
        {
            (loading)?<Loading/>:roomslist
        }
         </div>
        </section>
    )
}
}
export default FeaturedRooms;