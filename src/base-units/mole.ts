import {BaseUnit} from "./base-unit";

export class Mole extends BaseUnit {
	public readonly unitSymbol: string = "mol";
	public readonly dimensionSymbol: string = "N";
	public readonly quantityName: string = "amount of substance";
	public readonly definition: string = "The amount of substance of exactly 6.02214076e23 elementary entities. This number is the fixed numerical value of the Avogadro constant, NA, when expressed in the unit mol−1 and is called the Avogadro number.";
}