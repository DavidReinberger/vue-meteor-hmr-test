import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';   // here! // here!

import App from '/imports/client/App.vue';
import './main.html';

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});
