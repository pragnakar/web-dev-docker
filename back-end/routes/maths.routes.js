
const express = require("express"); // express means using express framework
const router = express.Router();

// GET /api/add?a=1&b=2
router.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({
      error: "Both query parameters 'a' and 'b' must be numbers"
    });
  }

  res.json({
    a,
    b,
    result: a + b
  });
});

// GET /api/sub?a=1&b=2
router.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({
      error: "Both query parameters 'a' and 'b' must be numbers"
    });
  }

  res.json({
    a,
    b,
    result: a - b
  });
});

// GET /api/mul?a=1&b=2
router.get("/mul", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({
      error: "Both query parameters 'a' and 'b' must be numbers"
    });
  }

  res.json({
    a,
    b,
    result: a * b
  });
});

// GET /api/div?a=1&b=2
router.get("/div", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({
      error: "Both query parameters 'a' and 'b' must be numbers"
    });
  }

  if (b === 0) {
    return res.status(400).json({
      error: "Cannot divide by zero"
    });
  }

  res.json({
    a,
    b,
    result: a / b
  });
});

module.exports = router;

