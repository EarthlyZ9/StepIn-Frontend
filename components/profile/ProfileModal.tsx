'use client';

import UserProfile from '@components/profile/UserProfile';
import SearchProject from '@components/profile/SearchProject';
import ProjectContainer from '@components/profile/ProjectContainer';

export default function ProfileModal() {
	return (
		<div
			className={'flex items-center flex-col justify-items-center w-full'}
		>
			<UserProfile></UserProfile>
			<SearchProject></SearchProject>
			<ProjectContainer></ProjectContainer>
		</div>
	);
}
