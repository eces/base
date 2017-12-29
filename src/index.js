import _ from 'lodash'
import KEY from './key'
// import './style.css'
import './s1.sass'
import './local.sass'
// import semantic from 'semantic-ui'
// import semantic from 'semantic-ui'
import '../semantic/dist/semantic.css'
import aa from './a.pug'

import angular from 'angular'

// console.log(aa({}))

const app = angular.module('app', [

])

app.controller('index', [
  '$scope',
  ($scope) => {
    console.log('angular index')
    $scope.hello = 'dfsdfdsfsdfds'
  }
])

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})

console.log('src/index.js', _.merge({a:1}, {b:2}), KEY)