import {Second} from "../base-units/second";
import {UnitPerUnit} from "./unit-per-unit";
import {Joule} from "../derived-units/joule";

export class JoulesPerSecond extends UnitPerUnit<Joule, Second> {

	constructor(metres: Joule | number, seconds?: Second | number) {
		super(metres, seconds);
	}

	public forSeconds(seconds: Second | number): Joule {
		return new Joule(this.forB(seconds));
	}

	public forJoules(joules: Joule | number): Second {
		return new Second(this.forA(joules));
	}
}