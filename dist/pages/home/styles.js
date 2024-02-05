"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = exports.Hero = exports.Container = void 0;
const react_1 = require("@ignite-ui/react");
exports.Container = (0, react_1.styled)('div', {
    display: 'flex',
    alignitems: 'center',
    gap: '$20',
});
exports.Hero = (0, react_1.styled)('div', {});
exports.Preview = (0, react_1.styled)('div', {});
