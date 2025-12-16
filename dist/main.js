const htmlTemplate = document.createElement('template');
htmlTemplate.innerHTML = ` <style> h1{background-color: yellow}</style>
<h1> I am asif </h1>
`;
class UserCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(htmlTemplate.content.cloneNode(true));
    }
}
customElements.define('user-card', UserCard);
export {};
//# sourceMappingURL=main.js.map