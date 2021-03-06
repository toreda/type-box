import {StrongDouble, makeDouble} from '../../src/types/double';
import {StrongInt, makeInt} from '../../src/types/int';
import {StrongUInt, makeUInt} from '../../src/types/uint';

interface TestType {
	name: string;
	instance: any;
}

let double: StrongDouble;
let int: StrongInt;
let uint: StrongUInt;
let testTypes: TestType[];

describe('numberMethods', () => {
	double = makeDouble(0);
	int = makeInt(0);
	uint = makeUInt(0);
	testTypes = [
		{name: 'double', instance: double},
		{name: 'int', instance: int},
		{name: 'uint', instance: uint}
	];

	beforeEach(() => {
		double.reset();
		int.reset();
		uint.reset();
	});

	describe('Usage', () => {
		for (const testType of testTypes) {
			describe(`Type: ${testType.name}`, () => {
				describe('increment', () => {
					it(`should increment by 1 when the value is a number`, () => {
						const value = 5;
						const result = testType.instance;
						result(value);
						expect(result()).toBe(value);
						result.increment();
						expect(result()).toBe(6);
					});

					it(`should return fallback when the value is null`, () => {
						const value = null;
						const result = testType.instance;
						result(value);
						result.increment();
						expect(result()).toBe(0);
					});
				});

				describe('decrement', () => {
					it(`should decrement by 1 when the value is a number`, () => {
						const value = 5;
						const result = testType.instance;
						result(value);
						expect(result()).toBe(value);
						result.decrement();
						expect(result()).toBe(4);
					});

					it(`should return fallback when the value is null`, () => {
						const value = null;
						const result = testType.instance;
						result(value);
						result.decrement();
						expect(result()).toBe(0);
					});
				});
			});
		}
	});
});
