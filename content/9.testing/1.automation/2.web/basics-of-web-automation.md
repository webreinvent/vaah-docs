---
title: Basics of Web Automation
---

## Introduction
In this documentation we will explore on web automation fundamentals using WebdriverIO. Here you'll delve into the essential techniques and concepts for automating a webpage using WebdriverIO. 

## Concept 1: Mocha Framework
The below is the basic boilerplate code for a test case in mocha framework.
```js
describe('Test Suite Name', () => {
    it('Test Case Name', async () => {      
        await browser.url('www.google.com')
    })
})
```
Let's look at each statements in detail:
- `describe('Test Suite Name' , () => {...})`: The **describe** function is a test suite container provided by Mocha. It groups together related test cases. In this case, *'test suite name'* is passed as the description.
- `it('Test Case Name', async () => {...})`: The **it** function is a test case definition provided by Mocha. It specifies an individual test case. In this case, *'Test Case Name'* is passed as the description.
- `async () => {...}`: The arrow function is an asynchronous function used to define the test case. This allows us to use await to handle promises.
- `await browser.url('www.google.com')`: This line uses the WebDriverIO's browser.url() method to navigate to the specified URL. In this case, it navigates to 'www.google.com'.
- All the excutable statements for the automation script should be inside the it block.
- You can add multiple it and describe blocks for mulitple test cases or test suites.

To explore more about the **mocha** framework, refer to this documentation by [webdriver.io](https://webdriver.io/docs/frameworks/#using-mocha)

## Concept 2: Selectors

| Selector              | Usage | HTML | Description |
| :---------------- | :------: | ----: | :---------: |
| Python Hat        |   True   | 23.99 | wefwefwe    |
| SQL Hat           |   True   | 23.99 |    wefwef   |
| Codecademy Tee    |  False   | 19.99 |             |
| Codecademy Hoodie |  False   | 42.99 |             |