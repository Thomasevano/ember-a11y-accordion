import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onCollapsibleShow() {
      console.log('onCollapsibleShow');
    },
    onCollapsibleHide() {
      console.log('onCollapsibleHide');
    },
  },
});
