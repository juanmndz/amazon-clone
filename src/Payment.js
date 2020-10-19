import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import {db} from './firebase'

import axios from './axios'
function Payment() {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory();
    
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [succeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState("")

    // runs whens it begins to load or when variables in the brackets change
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [basket])

    console.log('The secret is >>>', clientSecret)



    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async event => {
        // do fancy stripe
        event.preventDefault()
        setProcessing(true)


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // PaymentIntent = payment confirmation
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET',
                  
            })
            history.replace('/orders')
        })

    }

    const handleChange = event => {
        // listen for changes in card element
        // and display errors as the customer types their card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Payment Section - deliver address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Strip magic will happen */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={value => (
                                    <h3>Order Total: {value}</h3>

                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSperator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeded}><span>{processing ? <p>Processing</p> : "Buy Now" }</span></button>
                            </div>
                                    {/* Errors */}
                                    {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
