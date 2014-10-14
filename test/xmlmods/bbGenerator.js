module.exports = [{
    xpath: "//*[@nullFlavor]"
}, {
    xpath: "//h:text"
}, {
    xpath: "//h:originalText"
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.18",
    description: "Payers Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: ".//h:time"
    }]
}, {
    xpath: "2.16.840.1.113883.10.20.22.2.4",
    description: "Vital Signs Section",
    type: "rootTemplate",
    childxpaths: [{
        xpath: "..",
        action: "flatten",
        params: "2.16.840.1.113883.10.20.22.4.27"
    }, {
        xpath: "h:entry"
    }]
}];
