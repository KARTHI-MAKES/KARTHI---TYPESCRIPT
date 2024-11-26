var Websites;
(function (Websites) {
    Websites[Websites["safari"] = 0] = "safari";
    Websites[Websites["google"] = 1] = "google";
    Websites[Websites["Chrome"] = lol('chrome')] = "Chrome";
})(Websites || (Websites = {}));
function lol(web) {
    if (web === "chrome") {
        return 100;
    }
    return -1;
}
var develpers;
(function (develpers) {
    develpers["DEV"] = "dev";
    develpers["QA"] = "qa";
    develpers["BROKER"] = "broker";
})(develpers || (develpers = {}));
console.log(Websites.Chrome);
console.log(develpers.BROKER);
