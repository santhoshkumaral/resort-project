import React from 'react';
import items from './data'
const RoomContext = React.createContext();
class RoomProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            //filter start
            type: 'all',
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
            //filter end
        }
    }

    getRoom = (slug) => {
        let tmpRooms = this.state.rooms;
        let room = tmpRooms.find((room) => {
            return room.slug == slug;
        })
        return room;
    }
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter((room) => {
            return room.featured == true;
        })
        //set max price
        let maxPrice = Math.max(...rooms.map((item => {
            return item.price
        })))
        //set max size
        let maxSize = Math.max(...rooms.map((item) => {
            return item.size;
        }))
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price : maxPrice,
            maxPrice : maxPrice,
            maxSize : maxSize
        })
        console.log('The final data is ', rooms);
    }

    handleChange = event =>{
//         const type = event.target.type;
//         const name = event.target.name;
//         const value = event.target.value;
// console.log(`Type : ${type} : Name : ${name} : value : ${value}`)
const target = event.target;
const value = target.type==='checkbox'?target.checked:target.value;
const name = target.name;//type,capacity,breakfast
this.setState({
    [name] : value
},this.filterRooms);
    }

    filterRooms = ()=>{
    let    {
            rooms,type,capacity,price,maxPrice,minPrice,breakfast,pets
        } = this.state;
        let tempRooms = [...rooms];
        //set type filter
        if(type !== 'all'){
            tempRooms = tempRooms.filter((room)=>{
                return room.type===type;
            })
            this.setState({
                sortedRooms : tempRooms
            })
        }
        //set capacity filter
        capacity = parseInt(capacity);
        if(capacity != 1){
            tempRooms = tempRooms.filter((room)=>{
                return room.capacity>=capacity;
            })
            this.setState({
                sortedRooms : tempRooms
            })
        }
        else{
            tempRooms = tempRooms.filter((room)=>{
                return room.capacity==capacity;
            })
            this.setState({
                sortedRooms : tempRooms
            })
        }
        //set filter for price
         price = parseInt(price);
         tempRooms = tempRooms.filter((room)=>{
            return room.price<=price;
        })
        this.setState({
            sortedRooms : tempRooms
        })
    }

    formatData = (rawData) => {
        let tmpdata = rawData.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((img) => {
                return img.fields.file.url
            })
            let room = { ...item.fields, images, id }
            return room;
        })
        return tmpdata;
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom,handleChange : this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }

}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
