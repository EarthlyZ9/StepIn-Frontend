'use client';

import Navbar from '@components/layout/Navbar';
import Breadcrumbs from '@components/layout/Breadcrumbs';
import StepContainer from '@components/layout/StepContainer';
import { useSelector } from 'react-redux';

export default function Main() {
	const currentProject = useSelector((state) => state.project.value);
	console.log(currentProject);
	return (
		<div className={'h-full w-full'}>
			<Navbar></Navbar>
			<Breadcrumbs></Breadcrumbs>
			<StepContainer></StepContainer>
		</div>
	);
}
