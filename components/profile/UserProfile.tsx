import Image from 'next/image';
import DefaultProfileImg from '../../public/images/img.png';
import Button from '@components/common/Button';
import projectApi from '@apis/project/projectApi';
import { useDispatch } from 'react-redux';
import { projectPatch } from '../../globalState/projectSlice';

export default function UserProfile() {
	const dispatch = useDispatch();
	const createProjectHandler = async () => {
		const currentProject = await projectApi.createEmptyProject();
		dispatch(projectPatch(currentProject));
	};

	return (
		<div className={'flex flex-row justify-between w-full mb-3'}>
			<div className={'flex flex-row'}>
				<div className={'bg-gray-4 w-12'}>
					<Image src={DefaultProfileImg} alt={'user profile image'} />
				</div>
				<div className={'w-fit flex flex-col ms-1'}>
					<p>EMAIL GOES HERE</p>
					<p>NICKNAME GOES HERE</p>
				</div>
			</div>
			<div>
				<Button
					message={'Create Project'}
					onClickHandler={createProjectHandler}
				/>
			</div>
		</div>
	);
}
