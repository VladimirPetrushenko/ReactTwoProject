import React, {useState, useEffect} from 'react'
import {API_KEY} from '../config'
import {API_URL} from '../config'

import {Preloader} from './Preloader'
import {ProductList} from './ProductList'
import {Cart} from './Cart'
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

export const Shop = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('');


    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const addOrder = (item) =>{
        const itemIndex = orders.findIndex(order=>order.id===item.id)

        if(itemIndex<0){
            const newItem = {
                ...item,
                quantity:1,
            }
            setOrders([...orders, newItem]);
        }
        else{
            const newOrder = 
            orders.map((order,index) => {
                if(index===itemIndex){
                    return{
                        ...order,
                        quantity:order.quantity + 1,
                    }
                }
                else{
                    return order;
                }})
            setOrders(newOrder);      
        }
        setAlertName(item.name);
    }
    const removeOrder = (id) =>{
        const newOrders = orders.filter(order=>order.id!==id)
        setOrders(newOrders);      
    }

    const handleQuantity = (item) =>{
        const newOrder = orders.map( order => {
                if(order.id===item.id){
                    return{
                        ...order,
                        quantity:item.value,
                    };
                }
                else{
                    return order;
                }})
        const notZeroQuantity = newOrder.filter(order=>order.quantity>0)
        setOrders(notZeroQuantity);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(()=>{
        fetch(API_URL, {
            headers: {'Authorization' : API_KEY}
        }).then(response=>response.json())
        .then(data =>{ 
            data.shop ? setItems(data.shop) : setItems([]);
            setLoading(false);
        });
    }, [])

    return <main className="container content">
            <Cart quantity={orders.length} handleBasket={handleBasketShow}/>
        {loading ? <Preloader /> : <ProductList items={items} buy={addOrder}/>}
        {isBasketShow && <BasketList orders={orders} handleBasket={handleBasketShow} removeOrder={removeOrder} handleQuantity={handleQuantity}/>}
        {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
    </main>
}