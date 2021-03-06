import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongArray<T> = StrongType<T[]>;

export function makeArray<T>(fallback: T[], initial?: T[] | null): StrongArray<T> {
	const rules = new STRules();
	rules.add().must.match.type.array();
	return makeStrong<T[]>(fallback, initial, rules);
}
