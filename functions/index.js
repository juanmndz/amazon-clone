const functions = require('firebase-functions');
const express =require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HdgOmBXsMDmZZcdkDscGgFvkT269F7zfqulQzLTm8zt1tOwaneYmvdCVLJ0ZXyoJbyqR6RXifM4YhsCjZpHKY5j00XoAcKnhg')

// API

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}))
app.use(express.json());

// Api Route
app.get('/', (request, response) => {
    response.status(200).send('hello world')
})
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// Listen command

exports.api = functions.https.onRequest(app)