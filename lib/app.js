import express from 'express';

var app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, function () {
  console.log('listening...');
});
