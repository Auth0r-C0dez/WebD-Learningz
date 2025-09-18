const express = require("express");

const morgan = require("morgan");
const tourRouter = require('./routes/tourRoutes');
const userRouter = require ('./routes/userRoutes');

const app = express();

//middlewares

if(process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours',tourRouter); 
app.use('/api/v1/users',userRouter)

module.exports=app;

// app.use((req,res,next) => {
//     console.log("middle ware is created ");
//     next();
// });

// app.use((req,res,next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });


// app.get('/', (req,res) => {
//     res.status(200).json({message :"hello from the server",
//         app:"the app" }
//     );
// });

//routes



// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id' , getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

//api endpoints
//app.use('/api/v1/tours',tourRouter); //middleware

//const tourRouter = express.Router();

//mounting the rounter
// tourRouter.route('/')
//   .get(getAllTours)
//   .post(createTour);

// tourRouter.route('/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);


