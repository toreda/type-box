import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec2 extends StrongMap {
	public x: StrongDouble;
	public y: StrongDouble;

	constructor(x: number | null, y: number | null) {
		super();

		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
	}
}
