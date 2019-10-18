const express = require('express');
const cors = require('cors');

//creating express instance
const app = express();

// usin cors module
app.use(cors());






const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
