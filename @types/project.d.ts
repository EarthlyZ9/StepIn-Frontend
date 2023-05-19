interface ProjectBase extends BaseResponseAttributes {
	name: string;
}

interface SimpleProject extends ProjectBase, SimpleOwnerAttribute {}

interface Project extends ProjectBase, OwnerAttribute {
	steps: Step[];
}

interface ProjectCollection {
	projects: SimpleProject;
}
