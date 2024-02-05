"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@ignite-ui/react");
const document_1 = require("next/document");
function Document() {
    return (React.createElement(document_1.Html, { lang: "en" },
        React.createElement(document_1.Head, null,
            React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
            React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap", rel: "stylesheet" }),
            React.createElement("style", { id: "stiches", dangerouslySetInnerHTML: { __html: (0, react_1.getCssText)() } })),
        React.createElement("body", null,
            React.createElement(document_1.Main, null),
            React.createElement(document_1.NextScript, null))));
}
exports.default = Document;
