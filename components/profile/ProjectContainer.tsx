'use client';

import projectApi from '@apis/project/projectApi';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ProjectContainer() {
	const user = useSelector((state) => state.user.value);
	const [projects, setProjects] = useState<SimpleProject[]>([]);
	useEffect(() => {
		projectApi.getProjects().then((r) => {
			if (r.hasOwnProperty('_embedded'))
				setProjects(r._embedded.projects);
		});
	}, []);

	return (
		<div>
			{projects.length > 0 ? (
				projects.map((value, index) => <p key={index}>{value.name}</p>)
			) : (
				<p>no projects yet</p>
			)}
		</div>
	);
}
