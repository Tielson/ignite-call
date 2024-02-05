"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalStyles = void 0;
const react_1 = require("@ignite-ui/react");
exports.globalStyles = (0, react_1.globalCss)({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased',
    },
});
