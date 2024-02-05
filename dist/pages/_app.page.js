"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = require("../styles/global");
(0, global_1.globalStyles)();
function App({ Component, pageProps }) {
    return React.createElement(Component, Object.assign({}, pageProps));
}
exports.default = App;
