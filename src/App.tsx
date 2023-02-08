import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './styles/global.scss';
import styles from './styles/App.module.scss';

interface IPost {
	id: number;

	author: {
		avatarUrl: string;
		name: string;
		role: string;
	};

	content: {
		type: 'link' | 'paragraph';
		content: string;
	}[];

	publishedAt: Date;
}

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/maymisk.png',
			name: 'Khalil Bohner',
			role: 'High School student',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Here is a paragraph of my amazing post!',
			},
			{
				type: 'paragraph',
				content: 'Here is *another* paragraph!!',
			},
			{
				type: 'link',
				content: 'Check out my github and hire me 😏',
				href: 'https://github.com/maymisk',
			},
		],
		publishedAt: new Date('2022-07-24 21:48:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/maymisk.png',
			name: 'Khalil Bohner',
			role: 'High School student',
		},
		content: [
			{
				type: 'paragraph',
				content:
					'This project was made to learn the react fundamentals.',
			},
			{
				type: 'paragraph',
				content: '🎈',
			},
			{
				type: 'link',
				content: 'Check out my github and hire me 😏',
				href: 'https://github.com/maymisk',
			},
		],
		publishedAt: new Date('2022-07-23 21:00:00'),
	},
] as IPost[];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
