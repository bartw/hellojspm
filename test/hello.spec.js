'use strict';

import Hello from '../src/hello';

describe('hello test', () => {

    it('should return Hello Jspm', function () {
        var name = 'jspm';
        var hello = new Hello(name);
        
        expect(hello.speak()).toEqual("Hello " + name);
    });
});