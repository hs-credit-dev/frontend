'use client';

import Image from 'next/image';
import Link from 'next/link';

type Credit = {
	id: string;
	url: string;
	creditname: string;
};

type Credits = Credit[];

type SearchValueProps = {
	search: string;
};

const CreditList = ({ search }: SearchValueProps) => {
	// Dummy data until backend is resolved
	const creditsData: Credits = [
		{
			id: '1',
			url: 'https://s39613.pcdn.co/wp-content/uploads/2017/08/iStock-157735020-170828.jpg',
			creditname: 'Filmmaking',
		},
		{
			id: '2',
			url: 'https://www.fastweb.com/uploads/article_photo/photo/2036778/crop635w_five-tips-for-freshmen-to-find-a-study-buddy-in-class-without-knowing-anyone.jpg',
			creditname: 'African American Studies',
		},
		{
			id: '3',
			url: 'https://s39613.pcdn.co/wp-content/uploads/2021/06/positive-excited-multiethnic-students-in-casual-clothing-lying-on-in-picture-id1185581975.jpg',
			creditname: 'Cognitive Science',
		},
		{
			id: '4',
			url: 'https://as2.ftcdn.net/v2/jpg/06/22/36/87/1000_F_622368744_1Se3p1utvpwaiidqpix4GfPC4nSfcVos.jpg',
			creditname: 'Music Theory',
		},
		{
			id: '5',
			url: 'https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg',
			creditname: 'Data Science',
		},
		{
			id: '6',
			url: 'https://newsroom.lmu.edu/wp-content/uploads/2023/02/Study-12th-Grade-Math-Classes-Support-College-Attendance-and-Persistence.jpg',
			creditname: 'Digital Animation',
		},
		{
			id: '7',
			url: 'https://www.shutterstock.com/image-photo/group-happy-students-applauding-their-600nw-1937720896.jpg',
			creditname: 'Business Administration',
		},
		{
			id: '8',
			url: 'https://postsecondaryreadiness.org/wp-content/uploads/2018/03/classroom-focus-teacher.jpg',
			creditname: 'Clinical Pyschology',
		},
		{
			id: '9',
			url: 'https://kahoot.com/files/2023/07/kahoot-higher-ed-2.jpg',
			creditname: 'Software Engineering',
		},
		{
			id: '10',
			url: 'https://d3srkhfokg8sj0.cloudfront.net/wp-content/uploads/sites/669/0622_STD_AskProf_Feature-696x313.png',
			creditname: 'AI Understanding',
		},
		{
			id: '11',
			url: 'https://canfasd.ca/wp-content/uploads/2022/11/AdobeStock_374849718-1046x697.jpeg',
			creditname: 'Web Architecture',
		},
		{
			id: '12',
			url: 'https://apcentral.collegeboard.org/media/2022-03/ap-professional-learning-project-based-learning-50-50.jpg',
			creditname: 'Communications',
		},
	];

	return (
		<>
			{creditsData && (
				<>
					{creditsData
						.filter((credit) => {
							return search.toLowerCase() === ''
								? credit
								: credit.creditname.toLowerCase().includes(search);
						})
						.map((credit) => (
							<div key={credit.id} className="mb-8">
								<Link href="/">
									<Image
										src={credit.url}
										width={200}
										height={200}
										sizes="100vw"
										alt="Picture of the credit"
										className="w-full h-full object-cover transition-opacity opacity-0 duration-300 border-2 border-transparent hover:border-[#805DBE]"
										onLoadingComplete={(image) => image.classList.remove('opacity-0')}
									/>
								</Link>
								<Link href="/">
									<p className="text-sm font-semibold mt-2">{credit.creditname}</p>
								</Link>
							</div>
						))}
				</>
			)}
		</>
	);
};

export default CreditList;
