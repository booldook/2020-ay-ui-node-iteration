const express = require('express');
const app = express();

const prds = [
	{id: 1, src: "p0.jpg", title: "product_01", price: "$18.00"},
	{id: 2, src: "p1.jpg", title: "product_02", price: "$22.00"},
	{id: 3, src: "p2.jpg", title: "product_03", price: "$12.00"},
	{id: 4, src: "p3.jpg", title: "product_04", price: "$19.99"},
	{id: 5, src: "p4.jpg", title: "product_05", price: "$19.99"},
	{id: 6, src: "p5.jpg", title: "product_06", price: "$18.00"},
	{id: 7, src: "p6.jpg", title: "product_07", price: "$17.99"},
	{id: 8, src: "p7.jpg", title: "product_08", price: "$17.99"}
];

app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

app.locals.pretty = true;
app.set("view engine", "pug");
app.set("views", "./views");


app.use("/", express.static("./public"));

app.get("/prd", (req, res) => {
	res.render("prd.pug", {
		title: "생성된 상품리스트",
		prds
	});
});

app.get("/api/prd", (req, res) => {
	res.json({
		title: "API 상품리스트",
		prds
	});
});