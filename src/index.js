import express from 'express';
import morgan from "morgan";
import { engine } from 'express-handlebars';
import { route } from './routes/index.js';
import { connect } from './config/db/index.js';
import bodyParser from 'body-parser';
import moment from 'moment';
import  methodOverride  from 'method-override';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded())
app.use(methodOverride('_method'))
route(app);
app.use(express.static('./src/public'));
connect();
app.use(morgan('combined'));

app.engine('hbs', engine({
  extname: ".hbs",
  helpers: {
    sum: (a, b) => a + b,
    // formatDate: (dateString) => {
    //   return new engine.SafeString(
    //     moment(dateString).format("MMM D").toUpperCase()
    //   );
    // }
  },
}));

app.set('view engine', 'hbs');
app.set('views', './src/resources/views/');

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})