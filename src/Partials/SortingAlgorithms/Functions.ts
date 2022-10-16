export function compareAZ(a: any, b: any) {
	let fa = a.name.toLowerCase(),
		fb = b.name.toLowerCase();

	if (fa < fb) {
		return -1;
	}
	if (fa > fb) {
		return 1;
	}
	return 0;
}

export function compareZA(a: any, b: any) {
	let fa = a.name.toLowerCase(),
		fb = b.name.toLowerCase();

	if (fa > fb) {
		return -1;
	}
	if (fa < fb) {
		return 1;
	}
	return 0;
}

export function compareIDLH(a: any, b: any) {
	return a.id - b.id;
}

export function compareIDHL(a: any, b: any) {
	return b.id - a.id;
}
