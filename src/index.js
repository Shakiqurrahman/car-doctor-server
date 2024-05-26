import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";
import routes from "./routes/routes.js";

const port = process.env.PORT || 3000;

connectDB()
app.get("/", (req, res) => {
  res.send("Hello Car Doctor!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Car Doctor Server is listening at http://localhost:${port}`);
});
