'use strict';

angular.module('documentApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
