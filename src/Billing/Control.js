import {useState} from 'react'
import Header from './Header'
import ItemSelection from './ItemSelection'
import ItemList from './ItemList'
import Download from './download'
export default function Control(){
    
    const [data, setData] = useState([])
        
    
    const AddItem = () => {
        let productsVal = document.querySelector('.products')
        let quantityVal = document.querySelector('.quantity')
        let weight = document.querySelector('.weight');

        if(productsVal.value !== '' &&  quantityVal.value !== '' && weight.value !== ''){   
            let productValue  = productsVal.value;
            let quantityValue = quantityVal.value;
            let canAdd = true;
            data.map(x =>{

                if(x.productName === productValue) {
                    canAdd = false;
                    productsVal.value = '';
                    quantityVal.value = '';
                    weight.value = '';
                    alert('Item already added')
                }
            }
            )
            if(canAdd){
                setData([
                    ...data, {id : productValue, productName: productValue, quantity: quantityValue, weight: weight.value}
                ]
                )
                productsVal.value = '';
                quantityVal.value = '';
                weight.value = '';
            }
            console.log(data)
        } else {
            alert('select all values')
        }
    }

    const removeItem = (e) => {
        // console.log('got clicked', e.target.name)
        setData(l => l.filter(item => item.productName !== e.target.name));
         
    }
    console.log(document.querySelector('.table'))
    return(
        <>
            <Header/>
            <ItemSelection addItem = {AddItem}/>
            {data.length > 0 && <ItemList productDetails = {data} removeItem ={removeItem}/> } 
            {data.length > 0 && <Download products = {data}/>}
        </>
    )
}