'use strict';

class Accordion {
  constructor(domNode) {
    this.buttonEl = domNode.querySelector('button[aria-expanded]');
    this.contentEl = document.getElementById(this.buttonEl.getAttribute('aria-controls'));
    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';
    this.buttonEl.addEventListener('click', () => this.toggle());

    if (this.open) {
      this.showContent();
    }
  }

  toggle() {
    this.open = !this.open;
    this.buttonEl.setAttribute('aria-expanded', this.open);
    this.open ? this.showContent() : this.hideContent();
  }

  showContent() {
    this.contentEl.removeAttribute('hidden');
    const height = `${this.contentEl.scrollHeight}px`;
    this.contentEl.style.height = '0px';
    this.contentEl.offsetHeight; // trigger reflow
    this.contentEl.style.height = height;
    this.contentEl.style.opacity = 1;
    this.contentEl.classList.add('is-active');
    setTimeout(() => {
      this.contentEl.style.height = 'auto';
    }, 300); // Match this duration to the CSS transition duration
  }

  hideContent() {
    const height = `${this.contentEl.scrollHeight}px`;
    this.contentEl.style.height = height;
    this.contentEl.offsetHeight; // trigger reflow
    this.contentEl.style.height = '0px';
    this.contentEl.style.opacity = 0;
    this.contentEl.classList.remove('is-active');
    setTimeout(() => {
      this.contentEl.setAttribute('hidden', '');
    }, 300); // Match this duration to the CSS transition duration
  }
}

document.querySelectorAll('.accordion h3').forEach((accordionEl) => {
  new Accordion(accordionEl);
});