import { createApp, createRouter, defineEventHandler } from "h3"
import * as html from './htmltmp.js'

export const app = createApp()
const router = createRouter()

app.use(router)

const mainChildren = [
    html.h1().children(['This is example']).attributes({ onmouseover: "console.log('This inline script!')"}).end(),
    html.p().children(['Fish text']).end(),
    html.img().attributes({ width: "300px", height: "200px", alt: 'Some random image from net', style: {border: 'solid 1px black;'}}).end(),
    html.br().end(),
    html.button().attributes({onclick: "console.log('This click on button', this)", type: "button"}).children(["Click me"]).end(),
]
const footerChildren = ['This is footer element']
const mainElement = html.main().children(mainChildren).end()
const footerElement = html.footer().children(footerChildren).end()
const htmlFragment = mainElement + footerElement

router.get("/", defineEventHandler((event) => htmlFragment));
