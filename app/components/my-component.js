import Ember from 'ember';

export default Ember.Component.extend({
    container: null,

    didInsertElement() {
        this.set("container", this.element.querySelector(".my-component-container"));
        if (this.container) {
            this.container.style.backgroundColor = "tomato";
        }
    }
});
