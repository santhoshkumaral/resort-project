import React from 'react';
import Room from '../components/Room';
const RoomList = ({rooms})=>{

    if(rooms.length ==0){
        return (
            <h1>No rooms found</h1>
        )
    }
    else{
return (
    <section className="roomslist">
<div className="roomslist-center">
{
    rooms.map((item,key)=>{
        return <Room key={key} room={item}/>
    })
}
</div>
    </section>
)
    }
}

export default RoomList;