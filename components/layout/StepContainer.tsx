'use client';

import ModalWrapper from '@components/layout/ModalWrapper';
import { useEffect, useState } from 'react';
import LoginModal from '@components/auth/LoginModal';
import Portal from '@components/layout/Portal';
import { useDispatch, useSelector } from 'react-redux';
import projectApi from '@apis/project/projectApi';
import { useRouter } from 'next/navigation';
import { projectPatch } from '../../globalState/projectSlice';

export default function StepContainer() {
	const router = useRouter();
	const user = useSelector((state) => state.user.value);
	const currentProject = useSelector((state) => state.project.value);
	const [isModalOpen, setIsModalOpen] = useState<Boolean>(true);
	const [projectId, setProjectId] = useState<Number>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			projectApi.getProjects().then((r) => {
				if (!r.hasOwnProperty('_embedded')) {
					projectApi.createEmptyProject().then((r) => {
						setProjectId(r.id);
						dispatch(projectPatch(r));
					});
				} else {
					projectApi.getProjects().then((r) => {
						const latestProject = r._embedded.projects[0];
						setProjectId(latestProject.id);
						dispatch(projectPatch(latestProject));
					});
				}
			});
		}
	}, []);

	useEffect(() => {
		router.replace('/main?project=' + projectId);
		// router.push('/test-page');
	}, [projectId]);

	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	console.log(user);
	console.log(currentProject);

	return (
		<div className={'p-1'}>
			<p>This is Container</p>
			<div>{user?.id}</div>
			{!user ? (
				<Portal>
					<ModalWrapper
						Modal={LoginModal}
						isModal={isModalOpen}
						onCloseModal={closeModalHandler}
					/>
				</Portal>
			)}
		</div>
	);
}
