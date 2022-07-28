var net = require("net");
var https = require("https");
const punycode = require("punycode/"); // to import userland modules rather than core modules

const VERSION = "1.0.2";
const BASE_URL = "api.ip2whois.com/v2";

class IP2WhoisApi {
  #apiKey = "";

  constructor() {}

  // Set the API key
  open(apiKey) {
    this.#apiKey = apiKey;
  }

  // Query API to get whois information by domain
  lookup(domain, callback) {
    let data = {
      key: this.#apiKey,
      domain: domain,
    };

    let url = "https://" + BASE_URL + "?";

    Object.keys(data).forEach(function (key, index) {
      if (this[key] != "") {
        url += key + "=" + encodeURIComponent(this[key]) + "&";
      }
    }, data);

    url = url.substring(0, url.length - 1);

    let d = "";
    let req = https.get(url, function (res) {
      res.on("data", (chunk) => (d = d + chunk));
      res.on("end", function () {
        callback(null, JSON.parse(d));
      });
    });

    req.on("error", function (e) {
      callback(e);
    });
  }

  // Convert normal text to Punycode
  getPunycode(domain) {
    return punycode.toASCII(domain);
  }

  // Convert Punycode to normal text
  getNormalText(domain) {
    return punycode.toUnicode(domain);
  }
}

module.exports = {
  IP2WhoisApi: IP2WhoisApi,
};
