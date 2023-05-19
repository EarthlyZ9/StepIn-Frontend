export type ItemUpdateParam = {
	content: null | string;
	memo: null | string;
};

export type ItemCreateParam = {
	content: null | string;
	parentItemId: number;
};
