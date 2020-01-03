import React from 'react';
import {RoomConsumer} from '../Context';
import RoomFilter from '../components/RoomFilter';
import RoomList from '../components/RoomList';
const RoomsContainer = ()=>{
    return (<RoomConsumer>
    {
        (value)=>{
            console.log('The data is ',value);
            const {sortedRooms,rooms}=value;
            return (
   
                <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms}/>
                </div>
            )
        }
    }
    </RoomConsumer>)


}

export default RoomsContainer;