"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@ignite-ui/react");
const image_1 = __importDefault(require("next/image"));
const styles_1 = require("./styles");
const app_preview_png_1 = __importDefault(require("../../assets/app-preview.png"));
function Home() {
    return (React.createElement(styles_1.Container, null,
        React.createElement(styles_1.Hero, null,
            React.createElement(react_1.Heading, { size: "4xl" }, "Agendamento descomplicado"),
            React.createElement(react_1.Text, { size: "lg" }, "Conecte seu calend\u00E1rio e permita que as pessoas marquem agendamentos no seu tempo livre.")),
        React.createElement(styles_1.Preview, null,
            React.createElement(image_1.default, { src: app_preview_png_1.default, height: 400, quality: 100, priority: true, alt: "Calend\u00E1rio simbolizando a aplica\u00E7\u00E3o em funcionamento" }))));
}
exports.default = Home;
