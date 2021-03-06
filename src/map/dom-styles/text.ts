import {StrongString, makeString} from '../../types/string';

import {StrongMap} from '../../map';

export class DOMStylesText extends StrongMap {
	public readonly decoration: StrongString;
	public readonly shadow: StrongString;

	constructor() {
		super();

		this.decoration = makeString('none', null);
		this.shadow = makeString('0', null);
	}
}
