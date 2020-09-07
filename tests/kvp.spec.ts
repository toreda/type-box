import { ArmorKVP, ArmorKVPNullable, createKVP, createKVPNullable } from '../src/kvp';

const types = [];
const MOCK_STRING = '113333';
const MOCK_STRING2 = '10914094aaal';

describe('ArmorKVP', () => {
	describe('createKVP', () => {
		describe('string type', () => {
			let strKVP: ArmorKVP<string>;

			beforeAll(() => {
				strKVP = createKVP<string>(MOCK_STRING, MOCK_STRING2);
			});

			it('should create and return a function', () => {
				expect(typeof strKVP).toBe('function');
			});

			it('should return initial value when call with no arguments', () => {
				expect(strKVP()).toBe(MOCK_STRING);
			});
		});
	});

	describe('createKVPNullable', () => {

	});
});
