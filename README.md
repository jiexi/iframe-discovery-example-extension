# iframe-discovery-example

Example Chrome extension that establishes a pattern for extension discovery via iframe

## Usage
1. Start the [test dapp](https://github.com/MetaMask/test-dapp), or something else that spins up a webserver at `http://locahost:9011`
2. Open `dapp.html` as a file locally in your browser
3. View console logs from `dapp.html`


## Note
* The webpage used in an iframe must be allowed by [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options). Github does not allow this, so we cannot use that as a shared discovery page
