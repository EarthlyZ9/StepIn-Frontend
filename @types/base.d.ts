interface BaseResponseAttributes {
	id: number;
	createdAt: string;
	updatedAt: string;
	_links: Object;
}

interface SimpleOwnerAttribute {
	ownerId: number;
}

interface OwnerAttribute {
	owner: User;
}

interface CollectionResponse<T> {
	_embedded: T;
	_links: Object;
}
