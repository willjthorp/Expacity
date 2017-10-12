const express = require('express');
const app = express();
const path = require('path');
console.log(path.resolve('./dist/index.html'));
app.use(express.static('./dist'));

app.use((req, res, next) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(process.env.PORT);
