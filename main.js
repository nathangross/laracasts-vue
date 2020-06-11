Vue.component('modal', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-content">
                    .box
                    Lorem Ipsum
                </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
        
    `,
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});



new Vue({
    el: '#root', 

    data: {
        showModal: true
    }
});