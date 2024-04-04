export default function ItemList({productDetails, removeItem}){
 
    return(
    <>  
        <table  className="table">
            <thead >
                <tr>
                    <th>sn no</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    {/* <th>Remove Item</th> */}
                </tr>
            </thead>
            <tbody>
            {productDetails.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{key+1}</td>
                        <td>{val.productName}</td>
                        <td>{val.quantity + val.weight}</td>
                        {/* <td>
                            <button className='removeButton' name={val.productName} onClick={e => {
                            removeItem(e);
                            }}>
                                remove</button>
                        </td> */}
                        <button className='removeButton' name={val.productName} onClick={e => {
                            removeItem(e);
                        }}> remove</button>
                    </tr>
                    
                )
            })}
            </tbody>
        </table>
        <div className='display'>

        </div>
    </>
    )

    
}   