const rf = require("./index.js");

rf.getRandom().then(fact => {
    console.log('Random: ' + fact.fact);
});

rf.getCategory("test").then(fact => {
    console.log('category: ' + fact.fact);
});