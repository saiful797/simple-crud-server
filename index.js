const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port= process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// saifulislamsaif797
// sms3nKs9kdnyEKui


const uri = "mongodb+srv://saifulislamsaif797:sms3nKs9kdnyEKui@cluster0.a3qxp45.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{

    res.send('SIMPLE CRUD IS RUNNING');

})

app.listen(port, ()=>{
    console.log(`Simple-crud-server is running on port: ${port}`)
})