import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Main page',
	description: 'Description of main page',
};

export default function Main() {
	return <div>메인 페이지</div>;
}