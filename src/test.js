// const {IP2WhoisApi} = require("ip2whois-nodejs");
const {IP2WhoisApi} = require("./ip2whois.js");

let ip2whois = new IP2WhoisApi();

let apiKey = 'YOUR_API_KEY';

ip2whois.open(apiKey);

let domain = 'example.com';
ip2whois.lookup(domain, (err, data) => {
	if (!err) {
		console.log(data);
	}
});

let result = ip2whois.getPunycode('täst.de');
console.log(result);

result = ip2whois.getNormalText('xn--tst-qla.de');
console.log(result);

result = ip2whois.getDomainName('https://www.example.com/exe');
console.log(result);

result = ip2whois.getDomainExtension('https://www.example.com/exe');
console.log(result);