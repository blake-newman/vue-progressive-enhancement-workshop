Vue.component('modal', {
  template: '#modal-template',
  data: function() {
    return { show: false };
  },
  methods: {
    open: function() {
      this.show = true;
    },
    close: function() {
      this.show = false;
    }
  }
});

// start app
new Vue({
  el: '#app',
  methods: {
    parentHandler: function () {
      this.$refs.modal1.close();
      this.$refs.modal2.open();
    }
  }
});
