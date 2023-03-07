import React, { useEffect } from 'react'
import { fetchOrderHistory } from './orderHistorySlice'
import { useDispatch, useSelector } from 'react-redux'

const OrderHistory = () => {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.orderHistory)
    const isLoggedIn = useSelector((state) => !!state.auth.me.id)
    const userId = useSelector((state) => state.auth.me.id)

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchOrderHistory(userId))
        }
    }, [dispatch, isLoggedIn, userId])

    return (
        <>
            {isLoggedIn ? (
                <div>
                    <h1>Order History</h1>
                    {!product[0] ? (
                        <div>Order History is Empty</div>
                    ) : (
                        <div>
                            <ul>
                                {product.map((item) => {
                                    const orderDate = new Date(item.updatedAt).toString().split(' ')
                                    const showDate =
                                        orderDate[0] +
                                        ' ' +
                                        orderDate[1] +
                                        ' ' +
                                        orderDate[2] +
                                        ', ' +
                                        orderDate[3]

                                    return (
                                        <li key={item.id}>
                                            <div>Order Number: {item.id}</div>
                                            <div>Order Date: {showDate}</div>
                                            <div>Items: {item.vans.length}</div>
                                            <div>
                                                Total Price:{' '}
                                                {item.vans.reduce((sum, van) => sum + van.OrderDetail.price, 0)}
                                            </div>
                                            <div>Order Details</div>
                                            <ul>
                                                {item.vans.map((van) => {
                                                    return (
                                                        <li key={van.id} className="cvanList">
                                                            <img src={van.imageURL} className="cvanImage" />
                                                            <div>Name: {van.name}</div>
                                                            <div>vanist: {van.vanist}</div>
                                                            <div>Price: {van.OrderDetail.price}</div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <hr />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div>Please log in to view your order history.</div>
            )}
        </>
    )
}

export default OrderHistory;
