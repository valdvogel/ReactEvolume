var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var Clock = require('Clock');

describe('Clock', () =>{
    it('should exit', () =>{
        expect(Clock).toExist();
    });

describe('formatSeconds', () => {
    it('should format', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);

        });
    it('should format seconds when min/sec are less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);

        });
    });
});