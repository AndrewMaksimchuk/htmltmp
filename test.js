import { a, div, hr, br } from "./htmltmp.js"
import * as html from "./htmltmp.js"

console.log(
    html.div().attributes({style: { border: '', backgroundColor: 'blue', accentColor: 'blue' }, id:'13'}).children([
        html.a().attributes({ title: 'Where is the end?', href: 'google.com'}).children(['This is the end!']).end()
    ]).end(),

    html.hr().end(),
    html.br().end(),
)
