import {expect} from 'chai';
import 'mocha';
import {ConsoleTablePluginOptions} from "../../src/ConsoleTablePluginOptions";

describe('ConsoleTablePluginOptions', () => {
    describe('constructor()', () => {
        it('uses console.log as default message output', () => {
            // When
            const options = new ConsoleTablePluginOptions();

            // Then
            expect(options.out).to.equal(console.log);
        });
    });
});
