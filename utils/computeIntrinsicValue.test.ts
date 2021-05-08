import computeIntrinsicValue from './computeIntrinsicValue';

test('Testing the test', () => {
    const result = computeIntrinsicValue();
    expect(result).toBe(1);
});