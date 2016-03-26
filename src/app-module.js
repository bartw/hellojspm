import angular from 'angular';
import layoutModule from './layout/layout-module';

const dependencies = [
    layoutModule.name
];

export default angular.module('app', dependencies);