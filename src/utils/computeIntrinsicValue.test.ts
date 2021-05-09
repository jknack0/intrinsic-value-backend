import computeIntrinsicValue from './computeIntrinsicValue';

describe('Computing intrinsic value of:', () => {
    test('Apple', () => {
        const result = computeIntrinsicValue(10, 4.45, .18, .15, .5, 24.5);
        expect(result).toBeGreaterThanOrEqual(68);
    });
});
