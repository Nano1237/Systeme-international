import {BaseUnit} from "./base-unit";

export class Kilogram extends BaseUnit {
	public readonly unitSymbol: 'kg' = 'kg';
	public readonly dimensionSymbol: 'M' = 'M';
	public readonly quantityName: 'mass' = 'mass';
	public readonly definition: string = 'The kilogram is defined by setting the Planck constant h exactly to 6.62607015e−34 J⋅s (J = kg⋅m2⋅s−2), given the definitions of the metre and the second.';
}