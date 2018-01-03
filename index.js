"use strict";
const UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

module.exports = (num, unit) => {
	if (!Number.isFinite(num)) {
		throw new TypeError(
			`Expected a finite number, got ${typeof num}: ${num}`
		);
	}

	const neg = num < 0;

	if (neg) {
		num = -num;
	}

	if (num < 1) {
		return (neg ? "-" : "") + num + " B";
	}
	let exponent = Math.min(
		Math.floor(Math.log(num) / Math.log(1000)),
		UNITS.length - 1
	);
	if (unit) {
		unit = unit.toUpperCase();
		exponent = UNITS.indexOf(unit);
	}
	const numStr = Number((num / Math.pow(1000, exponent)).toPrecision(3));
	const units = UNITS[exponent];

	return (neg ? "-" : "") + numStr + " " + units;
};
