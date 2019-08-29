import { helloWorld } from '../../../src/core/helloWorld';
describe('helloWorld', () => {
    it('Should console.log de phrase "Hello world!"', () => {
        jest.spyOn(console, 'log');

        helloWorld();

        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toBeCalledWith('Hello world!');
    });
});
