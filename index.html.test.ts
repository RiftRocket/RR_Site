import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('./index.html',"utf-8");
const dom = new JSDOM(html);
const document = dom.window.document;

test('index.html file has <header> tag', async () => {
    const header = document.querySelector('header');
    expect(header).not.toBeNull()
})

test('index.html file has <main> tag', async () => {
    const main = document.querySelector('main');
    expect(main).not.toBeNull()
})

test('index.html file has <footer> tag', async () => {
    const footer = document.querySelector('footer');
    expect(footer).not.toBeNull()
})