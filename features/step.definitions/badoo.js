const { Builder, By, Key, until, Keys } = require('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require('cucumber');
var webdriver = require('selenium-webdriver');
require('chromedriver');

var driver;
setDefaultTimeout(600 * 1000);

Given('abrir la pagina de badoo', async function () {

this.driver = await new webdriver.Builder().forBrowser('chrome').build();
await this.driver.get ('http://www.badoo.com');
    
});

When(/^iniciar sesion en badoo con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, contraseña) {
    await this.driver.wait(until.elementLocated(By.xpath('//*[@id="header"]/div/div[2]/div/div/a')));
    let WEbotonConectar = await this.driver.findElement(By.xpath('//*[@id="header"]/div/div[2]/div/div/a'));
    await WEbotonConectar.click();
    await this.driver.wait (until.elementLocated(By.xpath('//input[@name="email"]')));
    let WEusuario = await this.driver.findElement(By.xpath('//input[@name="email"]'));
    await WEusuario.sendKeys(usuario);
    let WEcontraseña = await this.driver.findElement(By.xpath('//input[@type="password"]'));
    await WEcontraseña.sendKeys(contraseña);
    let WEiniciarsesion = await this.driver.findElement(By.xpath('//button[@type="submit"]'));
    await WEiniciarsesion.click();

    
});

Then('mandar corazones', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});