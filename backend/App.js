import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import "dotenv/config";

const { Client } = pg;
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = new Client({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

await db.connect();

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM passwords");
  res.json(result.rows);
});

app.post("/", async (req, res) => {
  const body = req.body;
  await db.query(
    "INSERT INTO passwords (id, site, username, password) VALUES ($1,$2,$3,$4) RETURNING *",
    [body.id, body.site, body.username, body.password]
  );
  res.status(200);
});

app.delete("/", async (req, res) => {
  var id = req.body.id;
  await db.query("DELETE FROM passwords WHERE id = $1", [id]);
  res.status(200);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
