import _ from 'lodash'
import KEY from './key'
// import './style.css'
// import '!style-loader!css-loader!sass-loader!./s1.sass'
// import './local.sass'
// import semantic from 'semantic-ui'
// import semantic from 'semantic-ui'
// import '../semantic/dist/semantic.css'
// import welcome from '!html-loader!pug-html-loader!./welcome.pug'
// import '!style-loader!css!file-loader!url-loader!https://unpkg.com/semantic-ui@2.2.13/dist/semantic.css'
// s.className = 'sdfsdf'

import angular from 'angular'

// console.log(aa({}))
console.log(11133333444)

const app = angular.module('app', [

])

app.controller('index', [
  '$scope',
  ($scope) => {
    console.log('angular index')
    // $scope.hello = 'dfsdfdsfsdfds'
  }
])

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})

console.log('src/index.js', _.merge({a:1}, {b:2}), KEY)