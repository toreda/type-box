// typeguard implementation by Ran Lottem
// https://dev.to/krumpet/generic-type-guard-in-typescript-258l

export interface typeMap {
	// for mapping from strings to types
	string: string;
	number: number;
	boolean: boolean;
}

export type PrimitiveOrConstructor = {new (...args: any[]): any} | keyof typeMap; // 'string' | 'number' | 'boolean' | constructor

// infer the guarded type from a specific case of PrimitiveOrConstructor
export type GuardedType<T extends PrimitiveOrConstructor> = T extends {new (...args: any[]): infer U}
	? U
	: T extends keyof typeMap
	? typeMap[T]
	: never;

export default function typesMatch<T extends PrimitiveOrConstructor>(o, className: T): o is GuardedType<T> {
	const localPrimitiveOrConstructor: PrimitiveOrConstructor = className;
	if (typeof localPrimitiveOrConstructor === 'string') {
		return typeof o === localPrimitiveOrConstructor;
	}
	return o instanceof localPrimitiveOrConstructor;
}