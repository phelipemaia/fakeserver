var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresss' });
});

router.get('/api/onboarding-progress', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send({
    "productName": "UltraFirst broadband",
    "productType": "TELCO",
    "milestones": [
      {
        "primaryContent": "Order received",
        "secondaryContent": "12 Jan 2018",
        "current": false,
        "complete": true
      },
      {
        "primaryContent": "Order acceptedd",
        "secondaryContent": "28 Jan 2018",
        "current": false,
        "complete": true
      },
      {
        "primaryContent": "Router dispatched",
        "current": false,
        "complete": true
      },
      {
        "primaryContent": "Broadband live",
        "secondaryContent": "30 Jan 2018",
        "current": true,
        "complete": true
      }
    ]
  });
});

router.get('/api/my-plan', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send({
    tariffName: 'UltraFirst broadband FIBRE',
    baseRate: '£29.99',
    estimatedSpeed: 'Up to 76Mbps',
    addOns: [
      { title: 'Evening & Weekend', price: '£7.99' },
      { title: 'Call plan', price: '£2.00' },
      { title: 'Voicemail 1571', price: '£2.00' },
      { title: 'Choose to refuse', price: '£2.00' },
      { title: 'Caller Display', price: '\u00a0' },
      { title: 'Total', price: '£54.99' }
    ]
  });
});

router.get('/api/contextual-help', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send({
    articles: [
      {
        icon: 'page',
        title: 'Help Guide',
        body: 'What to expect on GO live day'
      },
      {
        icon: 'page',
        title: 'Help Guide',
        body: 'Secondary help (based on mapping tbc)'
      }
    ]
  });
});

module.exports = router;
