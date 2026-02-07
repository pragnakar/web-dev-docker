const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// all are API endpoints
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Node.js server is running 🚀🚀🚀🚀",
    time: new Date().toISOString(),
  });
});

app.get("/first_api", (req, res) => {
  res.json({
    status: "ok",
    message: "This is my first API endpoint! 🎉",
    time: new Date().toISOString(),
  });
});

// this is to adde two numbers sent as query parameters
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({
      error: "Both query parameters 'a' and 'b' must be numbers response form server file"
    });
  }

  res.json({
    a,
    b,
    result: a + b
  });
});

// API endpoints end here

//-------------------------
// from routes API

// import routes
const mathRoutes = require("./routes/maths.routes.js");

// mount routes
app.use("/api", mathRoutes);


//-----------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
