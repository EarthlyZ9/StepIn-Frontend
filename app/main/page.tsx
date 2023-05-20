// import { Metadata } from 'next';
import Navbar from '@components/layout/Navbar';
import Breadcrumbs from '@components/layout/Breadcrumbs';
import StepContainer from '@components/layout/StepContainer';

// export const metadata: Metadata = {
// 	title: 'Main page',
// 	description: 'Description of main page',
// };

export default function Main() {
	return (
		<div className={'h-full w-full'}>
			<Navbar></Navbar>
			<Breadcrumbs></Breadcrumbs>
			<StepContainer></StepContainer>
		</div>
	);
}
