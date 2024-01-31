import { PORT } from "./config/serverConfig.js";
import connectToMongo from "./config/dbConfig.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const setUpAndStartServer = async () => {
  try {
    //- connect to database
    await connectToMongo();

    const app = express();
    const corsOptions = {
      origin: ["http://localhost:5173"],
      credentials: true,
      optionSuccessStatus: 200,
    };

    app.use(cors(corsOptions));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //- routes use
   app.use("/api/v1/auth", authRoutes);

    app.listen(PORT, () => {
      console.log("Server started on PORT : ", PORT);
    });
  } catch (error) {
    console.log("Error, connecting to database..." + error);
    throw error;
  }
};

//* Calling the legend function of the file...
setUpAndStartServer();
