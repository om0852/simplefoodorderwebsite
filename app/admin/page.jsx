"use client"
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
        console.log(savedOrders);
    }, []);

    return (
        <div>
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={index}>
                        <h3>Order {index + 1}</h3>
                        <p><strong>Name:</strong> {order.name}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                        <p><strong>Mobile:</strong> {order.mobile}</p>
                        <h4>Items:</h4>
                        <ul>
                            {order.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {item.name} - ${item.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
}

export default Page;
