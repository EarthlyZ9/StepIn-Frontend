interface ProjectBase extends BaseResponseAttributes {
	name: string;
}

interface SimpleProject extends ProjectBase, SimpleOwnerAttribute {}

interface Project extends ProjectBase, OwnerAttribute {
	owner: User;
	steps: [] | Step[];
}

interface ProjectCollection {
	projects: SimpleProject[];
}
