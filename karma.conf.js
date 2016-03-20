module.exports = function (config) {
    'use strict';
    
    config.set({
        autoWatch: true,
        singleRun: true,
        frameworks: ['jspm', 'jasmine'],
        jspm: {
            config: 'config.js',
            loadFiles: ['test/**/*.js'],
            serveFiles: ['src/**/*.js']
        },
        proxies: {
            '/test/': '/base/test/',
            '/src/': '/base/src/',
            '/jspm_packages/': '/base/jspm_packages/'
        },
        browsers: ['PhantomJS'],
        reporters: ['progress']
    });
};