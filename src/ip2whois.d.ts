export class IP2WhoisApi {
    /**
     * Initialize with the IP2WHOIS API key.
     *
     * @param apiKey IP2WHOIS API key.
     */
    open(apiKey: string): void;
    /**
     * Queries WHOIS information for the domain name.
     *
     * @param domain Domain name to retrieve the WHOIS data.
     * @param callback Callback function to receive the WHOIS data.
     */
    lookup(domain: string, callback: any): void;
    /**
     * Converts domain name to Punycode equivalent.
     *
     * @param domain Domain name to convert to Punycode.
     * @returns Punycode for the domain.
     */
    getPunycode(domain: string): string;
    /**
     * Converts Punycode to domain name equivalent.
     *
     * @param domain Punycode to convert to domain name.
     * @returns Domain name for the Punycode.
     */
    getNormalText(domain: string): string;
    #private;
}
