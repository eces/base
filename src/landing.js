import _ from 'lodash'

import './landing.sass'

import angular from 'angular'

const app = angular.module('app', [

])

app.controller('index', [
  '$scope',
  '$timeout',
  ($scope, $timeout) => {
    console.log('angular index')
    $scope.hello = 'PLAYAPI'

    $timeout(() => {
      $scope.done = true
    }, 1000)
  }
])

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})