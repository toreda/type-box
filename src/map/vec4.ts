import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec4 extends StrongMap {
	public readonly x: StrongDouble;
	public readonly y: StrongDouble;
	public readonly z: StrongDouble;
	public readonly w: StrongDouble;

	constructor(x: number | null, y: number | null, z: number | null, w: number | null) {
		super();

		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
		this.z = makeDouble(0, z);
		this.w = makeDouble(0, w);
	}
}
