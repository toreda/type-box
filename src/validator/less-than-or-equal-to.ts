import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const lessThanOrEqualToFn = (curr: number, target: number): boolean => {
	return curr <= target;
};

export function createIsLessThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsLessThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const ruleFn: KVPRuleFn = (curr: number) => {
			return lessThanOrEqualToFn(curr, target);
		};

		const node = new KVPRuleNode('LT_EQT', KVPRuleNodeType.CMP, ruleFn, mods.invert);
		rule.add(node);

		return caller;
	};
}