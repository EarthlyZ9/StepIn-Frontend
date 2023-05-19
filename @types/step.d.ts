interface StepBase extends BaseResponseAttributes, SimpleOwnerAttribute {
	name: string;
	number: number;
}

interface SimpleStep extends StepBase {
	projectId: number;
}

interface Step extends StepBase {
	project: SimpleProject;
	items: Item[];
}
