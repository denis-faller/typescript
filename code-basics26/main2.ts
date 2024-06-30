type AllowedToConcatenation = number | string | null | undefined | boolean;

const concat = (base: AllowedToConcatenation, suffix: AllowedToConcatenation): string => `${base}${suffix}`;

console.log(concat(1, "HHHAAA"));