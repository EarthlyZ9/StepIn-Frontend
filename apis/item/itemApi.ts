import { ItemCreateParam, ItemUpdateParam } from '@apis/item/itemApi.type';
import instance from '@apis/_axios/instance';

export class ItemApi {
	async createItem(stepId: number, body: ItemCreateParam): Promise<Item> {
		if (!body.content) body.content = 'New Item';
		try {
			return await instance.post(`/steps/${stepId}/items`, body);
		} catch (error) {
			console.log(error);
		}
	}

	async patchItem(id: number, body: ItemUpdateParam): Promise<Item> {
		try {
			return await instance.patch(`/items/${id}`, body);
		} catch (error) {
			console.log(error);
		}
	}

	async deleteItem(id: number): Promise<void> {
		try {
			return await instance.delete(`/items/${id}`);
		} catch (error) {
			console.log(error);
		}
	}
}

const itemApi = new ItemApi();
export default itemApi;
