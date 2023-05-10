require('dotenv');

const app = require('./app');

const port = +process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App Running On Port ${port} 😁😁😁`);
});

