import { ProjectUpdateParam } from './projectApi.type';
import instance from '@apis/_axios/instance';

export class ProjectApi {
	async getProjects(): Promise<CollectionResponse<ProjectCollection>> {
		try {
			const res = await instance.get('/projects');
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}

	async getProjectById(id: number): Promise<Project> {
		try {
			return await instance.get(`/projects/${id}`);
		} catch (error) {
			console.log(error);
		}
	}

	async patchProject(id: number, body: ProjectUpdateParam): Promise<Project> {
		try {
			return await instance.patch(`/projects/${id}`, body);
		} catch (error) {
			console.log(error);
		}
	}

	async deleteProject(id: number): Promise<void> {
		try {
			return await instance.delete(`/projects/${id}`);
		} catch (error) {
			console.log(error);
		}
	}

	async createEmptyProject(): Promise<Project> {
		try {
			return await instance.post('/projects');
		} catch (error) {
			console.log(error);
		}
	}
}

const projectApi = new ProjectApi();

export default projectApi;
