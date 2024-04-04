import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
app.use(bodyParser.json());
const p = 4000;
const t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE1OTcxLCJpYXQiOjE3MTIyMTU2NzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRmNDQ4NTc0LTUyZjUtNGVjYi1hZTcwLTZmMjgwMDY3ODI1MyIsInN1YiI6ImtpdC4yNS4yMWJjczAyNkBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjRmNDQ4NTc0LTUyZjUtNGVjYi1hZTcwLTZmMjgwMDY3ODI1MyIsImNsaWVudFNlY3JldCI6Inp2dVBDWU92VFhKdlRVaUkiLCJvd25lck5hbWUiOiJNYW5pa2FuZGFuIE0iLCJvd25lckVtYWlsIjoia2l0LjI1LjIxYmNzMDI2QGdtYWlsLmNvbSIsInJvbGxObyI6IjcxMTUyMWJjczAyNiJ9.E0oMZjTf-UyBWBqDpVl6CBqUZ7Ueoc12eEC-Y6WKCJ4";
app.get("/fetchData", async (req, res) => {
    try {
        const response = await axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000", {
            headers: {
                Authorization: `Bearer ${t}`
            }
        });
        const j = response.data;
        res.json(j);
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});
app.listen(p, () => {
    console.log(`running in port ${p}`);
});
