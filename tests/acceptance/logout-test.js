import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'window-location-example/tests/helpers/start-app';
import windowProxy from "window-location-example/utilities/window-proxy";

var application, originalChangeLocation;

module('Acceptance: Logout', {
  beforeEach: function() {
    application = startApp();
    originalChangeLocation = windowProxy.changeLocation;
    windowProxy.changeLocation = function(url) {
        visit('/rando');
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    windowProxy.changeLocation = originalChangeLocation;
  }
});

test('visiting /logout', function(assert) {
  visit('/');
  click('.logout-link');
  andThen(function() {
    assert.equal(currentURL(), '/rando');
  });
});
