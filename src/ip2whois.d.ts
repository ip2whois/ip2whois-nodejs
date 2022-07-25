export class IP2WhoisApi {
    open(apiKey: any): void;
    lookup(domain: any, callback: any): void;
    getPunycode(domain: any): string;
    getNormalText(domain: any): any;
    #private;
}
