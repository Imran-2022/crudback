require("dotenv").config();
const app = require('./app')
const port = process.env.PORT || 8080
const { DATABASE} = require('./models/connect.database')
async function run() {
        await DATABASE.connect();
        console.log("mongodb connected")
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})