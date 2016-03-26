import angular from 'angular';
import appHeaderComponent from './app-header-component';

const dependencies = [];

export default angular
    .module('app.layout', dependencies)
    .component('appHeader', appHeaderComponent);