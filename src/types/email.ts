import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongEmail = StrongType<string>;

export function makeEmail(fallback: string, initial?: string | null): StrongEmail {
	const rules = new STRules();
	rules.add().must.match.type.string();
	rules.add().must.be.email();
	return makeStrong<string>(fallback, initial, rules);
}
