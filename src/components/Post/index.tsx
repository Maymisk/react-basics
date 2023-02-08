import { useState } from 'react';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { PostHeader } from './Header';
import styles from './Post.module.scss';

interface IContent {
	type: 'link' | 'paragraph';
	content: string;
	href?: string;
}

interface IPostProps {
	author: {
		name: string;
		role: string;
		avatarUrl: string;
	};
	content: IContent[];
	publishedAt: Date;
}

export function Post({ author, content, publishedAt }: IPostProps) {
	const [comments, setComments] = useState([] as string[]);

	return (
		<article className={styles.post}>
			<PostHeader author={author} publishedAt={publishedAt} />

			<div className={styles.content}>
				{content.map(line => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<p key={line.content}>
								<a href={line.href} target="_blank">
									{line.content}
								</a>
							</p>
						);
					}
				})}
			</div>

			<CommentForm setComments={setComments} />

			<CommentList comments={comments} setComments={setComments} />
		</article>
	);
}
