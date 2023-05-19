import { StepUpdateParam } from '@apis/step/stepApi.type';
import instance from '@apis/_axios/instance';

export class StepApi {
	async patchStep(id: number, body: StepUpdateParam): Promise<Step> {
		try {
			return await instance.patch(`/steps/${id}`, body);
		} catch (error) {
			console.log(error);
		}
	}

	async deleteStep(id: number): Promise<void> {
		try {
			return await instance.delete(`/steps/${id}`);
		} catch (error) {
			console.log(error);
		}
	}

	async createStep(
		projectId: number,
		body: StepUpdateParam | null,
	): Promise<Step> {
		const name = body === null ? 'New Step' : body.name;
		try {
			return await instance.post(`/projects/${projectId}/steps`, {
				name: name,
			});
		} catch (error) {
			console.log(error);
		}
	}
}

const stepApi = new StepApi();
export default stepApi;
