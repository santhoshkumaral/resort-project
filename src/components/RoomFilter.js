import React from 'react';
import {useContext} from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';
const RoomFilter = ({rooms})=>{
const context = useContext(RoomContext);
console.log('The new data is ',context)

const getUnique = (items,value)=>{//2nd
    let typeArr = items.map((item)=>{
        return item[value]
    })
    return [...new Set(typeArr)];//we get a unique array
}

const {//3rd
    handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
} = context;
let types = getUnique(rooms,'type');
types = ['all',...types];
console.log('The types is ',types);
types=types.map((item,index)=>{
    return <option value={item} key={index}>
{item}
    </option>
})

let people = getUnique(rooms,'capacity');
people = people.map((item,index)=>{
    return (
        <option key={index} value={item}>
{item}
        </option>
    )
})
return (
    <section className="filter-container">
        <Title title="search rooms"/>
        <form className="filter-form">
            <div className="form-group">
<label>room type</label>
<select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
{types}
</select>
            </div>
<div className="form-group">
<label>Guest's</label>
<select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
{people}
</select>
</div>
       
<div>
<label>room for ${price}</label>

<input type="range" className="form-control" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}/>
</div>       

        </form>
    </section>
)

}

export default RoomFilter;