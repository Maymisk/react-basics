import styles from './Header.module.scss';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from '../../Avatar';

interface IPostHeaderProps {
	author: {
		name: string;
		role: string;
		avatarUrl: string;
	};
	publishedAt: Date;
}

export function PostHeader({ author, publishedAt }: IPostHeaderProps) {
	const formattedPublishedAtTitle = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const formattedPublishedAt = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<header>
			<div className={styles.author}>
				<Avatar src={author.avatarUrl} />

				<div>
					<strong>{author.name}</strong>
					<span>{author.role}</span>
				</div>
			</div>

			<time
				title={formattedPublishedAtTitle}
				dateTime={publishedAt.toISOString()}
			>
				{formattedPublishedAt}
			</time>
		</header>
	);
}
