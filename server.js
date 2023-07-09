const express = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = 5000;

//Connect to DB
connectDB();

app.use(express.json({ extended: false }))


//Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))


app.listen(PORT || 5000, () => console.log(`Server running on ${PORT}`));
