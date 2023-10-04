class AppBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                h2 {
                    padding: 16px;
                    width: 100%;
                    text-align: center;
                }
            </style>

            <h2>Nemu Film</h2>
        `;
    }
}

customElements.define('app-bar', AppBar);