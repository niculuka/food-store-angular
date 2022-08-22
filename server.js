const express = require('express');
const app = express();

const root = __dirname + "/dist/food-store";

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: root})
});

app.listen(process.env.PORT || 8080);