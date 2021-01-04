import {StrongTime, makeTime} from '../../src/types/time';

const MOCK_INITIAL = '21:52:36';
const MOCK_FALLBACK_DEFAULT = '05:24:41';
const MOCK_FALLBACK = '23:05:12';

describe('StrongTime', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = '00:52:36';
			const result = makeTime(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeTime(null, MOCK_INITIAL);
			const sampleValue = '5pm';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = '21:45:12';
			const emptyString = '';
			const result = makeTime(null, sampleFallback);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = '20:52:00';
			const result = makeTime(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = '03:01:52';
			const result = makeTime(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = '01:03:01';
			const numberedValue = 5 as any;
			const result = makeTime(null, sampleFallback);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = '18:41:36';
			const booleanValue = false as any;
			const result = makeTime(null, sampleFallback);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = '15:34:25';
				const string = makeTime(null, MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = '04:02:54';
				const string = makeTime(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});