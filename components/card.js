class myCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['image', 'title', 'description'];
	}

	attributeChangedCallback(attr, prev, current) {
		switch (attr) {
			case 'image':this.image = current;break;
			case 'title':this.title = current;break;
			case 'description':this.description = current;break;
		}
	}

	getTemplate() {
		const template = document.createElement('template');

		template.innerHTML = `
      <div class='card'>
        <figure class='card__media'>
          <img src='${this.image}' alt='qr code example' />
        </figure>
      
        <section class='card__content'>
          <h2 class='card__title'>${this.title}</h2>
          
          <p class='card__description'>${this.description}</p>
        </section>
      </div>

      ${this.getStyles()}
    `;

		return template;
	}

	getStyles() {
		return `
      <style>
        :host {
          --white: hsl(0, 0%, 100%);
          --light-gray: hsl(212, 45%, 89%);
          --grayish-blue: hsl(220, 15%, 55%);
          --dark-blue: hsl(218, 44%, 22%);
          display: inline-block;
        }

        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        .card {
          font-family: 'Outfit', 'sans-serif';
          width: 210px;
          background-color: var(--white);
          padding: 10px;
          border-radius: 15px;
          box-shadow: 0 10px 30px 0px var(--grayish-blue);
        }
        
        .card__media {
          overflow: hidden;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
        
        .card__media img {
          max-width: 100%;
          height: auto;
          transition: all 250ms;
        }

        .card__media img:hover {
          border-radius: 10px;
          max-width: 120%;
          height: auto;
        }
        
        .card__content {
          padding: 10px;
          text-align: center;
          line-height: 80%;
          font-size: 15px;
        }
        
        .card__title {
          font-weight: bold;
          line-height: 100%;
          font-size: 1em;
          margin-bottom: 1em;
          color: var(--dark-blue);
        }
        
        .card__description {
          font-size: 0.7em;
          color: var(--grayish-blue);
        }
      </style>
    `;
	}

	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define('custom-card', myCard);
