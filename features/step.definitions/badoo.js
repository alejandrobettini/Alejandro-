const { Builder, By, Key, until, Keys } = require('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require('cucumber');
var webdriver = require('selenium-webdriver');
require('chromedriver');
const { WElements} = require(`${process.cwd()}/features/pages/badoo.js`);

var driver;
setDefaultTimeout(600 * 1000);

Given('abrir la pagina de badoo', async function () {

this.driver = await new webdriver.Builder().forBrowser('chrome').build();
await this.driver.get ('http://www.badoo.com');
    
});

When(/^iniciar sesion en badoo con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, contraseña) {
    await this.driver.wait(until.elementLocated(By.xpath(WElements.botonConectar)));
    let WEbotonConectar = await this.driver.findElement(By.xpath(WElements.botonConectar));
    await WEbotonConectar.click();
    await this.driver.wait (until.elementLocated(By.xpath(WElements.email)));
    let WEusuario = await this.driver.findElement(By.xpath(WElements.email));
    await WEusuario.sendKeys(usuario);
    let WEcontraseña = await this.driver.findElement(By.xpath(WElements.contraseña));
    await WEcontraseña.sendKeys(contraseña);
    let WEiniciarsesion = await this.driver.findElement(By.xpath(WElements.iniciarSesion));
    await WEiniciarsesion.click();
    

    
});

Then('mandar corazones', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});