const Proactive = require('../../../../tests/amex/amexcom/new_proactonst helper = require('../../../../helpers');
const { expect } = require('chai');const Proactive = require('../../../../tests/amex/amexcom/new_proactive');
const helper = require('../../../../helpers');
const { expect } = require('chai');
const util = require('util');
const fs = require("fs");

// htmlList
const htmlList = {
  container: 'product-list',
  cardBox: 'product-box-container'
};

// data attrs
const textList = {
  title: 'product-box__title__link',
  benefitsText: 'product__highlights-section',
  annualFee: 'data-fees-annual',
  APR: 'data-apr',
  toolTip: ''
};

const attrList = {
  imageSource: 'product-box__href-image'
};

const clickList = {
  apply: 'product-box__apply-button',
  learnMore: 'product__card-details-link',
  legalLinks: 'product__details-rates-link'
};

// create a new Proactive
const proactive = new Proactive(browser, 'body', textList, attrList, clickList, htmlList);

describe('Proactive function run', () => {
  it('grab all priority content on page', () => {
    // Open the page
    browser.url('http://www.qa.creditcards.com.s3-website-us-west-2.amazonaws.com/citi/');
    const results = proactive.runProactive();
    fs.writeFile(__dirname + '/output/ccdcOutput.json', JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }; 
      console.log("File has been created");
    });
  });
});

const util = require('util');
const fs = require("fs");

// htmlList
const htmlList = {
  container: 'product-list',
  cardBox: 'product-box-container'
};

// data attrs
const textList = {
  title: 'product-box__title__link',
  benefitsText: 'product__highlights-section',
  annualFee: 'data-fees-annual',
  APR: 'data-apr',
  toolTip: ''
};

const attrList = {
  imageSource: 'product-box__href-image'
};

const clickList = {
  apply: 'product-box__apply-button',
  learnMore: 'product__card-details-link',
  legalLinks: 'product__details-rates-link'
};

// create a new Proactive
const proactive = new Proactive(browser, 'body', textList, attrList, clickList, htmlList);

describe('Proactive function run', () => {
  it('grab all priority content on page', () => {
    // Open the page
    browser.url('http://www.qa.creditcards.com.s3-website-us-west-2.amazonaws.com/citi/');
    const results = proactive.runProactive();
    fs.writeFile(__dirname + '/output/ccdcOutput.json', JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }; 
      console.log("File has been created");
    });
  });
});

