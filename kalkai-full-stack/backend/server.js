// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// const app = express();
// const port = process.env.PORT || 4000;

// // Connect to MongoDB and Cloudinary
// connectDB();
// connectCloudinary();

// // Middleware
// app.use(express.json());

// // Dynamic CORS origin support
// const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// app.use(cors({
//   origin: function (origin, callback) {
//     // allow requests with no origin (e.g. mobile apps, curl)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));

// // Optional: Set Access-Control-Allow-Credentials header manually
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

// // Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Test route
// app.get('/', (req, res) => {
//   res.send('API Working');
// });

// // Start the server
// app.listen(port, () => console.log(`Server started on PORT: ${port}`));

import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://kalkai-furnitures-project-git-5adfc1-cmkhurd-gmailcoms-projects.vercel.app",
  "https://kalkai-furnitures-project-done-frontend-9e2x1tkgj.vercel.app",
  "https://kalkai-furnitures-project-done.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, token"
  );
  next();
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
