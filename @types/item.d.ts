interface ItemBase extends BaseResponseAttributes, SimpleOwnerAttribute {
	content: string;
	memo: string | null;
	parentItemId: number | null;
	stepId: number;
}

interface Item extends ItemBase {
	step: SimpleStep;
}
