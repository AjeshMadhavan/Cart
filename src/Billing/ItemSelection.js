import {ProductName} from './Data'
export default function ItemSelection({addItem}){
    const AddItem = () => {
        const products = document.querySelector('.products');
        const quantity = document.querySelector('.quantity')
        console.log(typeof(quantity.value))
    }

    return(
        <div className="select-box">
            <div className="select">
                {/* <select className ='products'>
                    <option value = ''>-select-</option>
                    {
                        ProductName.map( x => 
                            <option value ={x.name}>{x.name}</option>    
                        )
                    }
                </select> */}
                <input type="text" className='products' placeholder='Enter Item'/>
                <input type="number" className="quantity" placeholder="Enter Quantity"/> 
                <select className="weight">
                    <option value = {''}>--select--</option>
                    <option>ml</option>
                    <option>L</option>
                    <option>g</option>
                    <option>Kg</option>
                    <option>pkt</option>
                    <option>pcs</option>
                </select>
            </div>
            <button onClick={addItem} className="button">Add</button>
        </div>
    )
}