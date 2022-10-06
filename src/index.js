import express from 'express';
import morgan from "morgan";
import { engine } from 'express-handlebars';
// import path from 'path';
const app = express();
const port = 3000;

app.use(express.static('./src/public'));

app.use(morgan('combined'));

app.engine('hbs', engine({
  extname : ".hbs"
}));


app.set('view engine', 'hbs');
app.set('views', './src/resources/views');
app.get('/', (req, res) => {
    res.render('home');
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})