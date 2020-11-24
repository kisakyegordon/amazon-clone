const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hq2b3FM99lMmkwcnUS98NAGccOxh4bJQ1gwc4dnPUPLn1aYC839S2dCa9Aa7KuhJSXm0y9ZMs9MQe7O54Hf5fXT00shNPFWIK"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
app.get("/dream", (request, response) =>
  response.status(200).send("Hello Dreamer, don't stop !!")
);

app.post("/payments/create", async (request, response) => {
  // query param
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
