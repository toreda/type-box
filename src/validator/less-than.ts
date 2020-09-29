import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsLessThan<CallerType> = (a: number) => CallerType;

export const lessThanFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	if (typeof target !== 'number') {
		return false;
	}

	return curr < target;
};

export function createIsLessThan<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsLessThan<CallerType> {
	return (target: number): CallerType => {
		const fn: KVPRuleFn = (curr: number) => {
			return lessThanFn(curr, target);
		};

		const node = new KVPRuleNode('LT', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}