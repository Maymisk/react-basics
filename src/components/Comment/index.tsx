import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.scss';

interface ICommentProps {
	comment: string;
	deleteComment(commentToDelete: string): void;
}

export function Comment({ comment, deleteComment }: ICommentProps) {
	const [likes, setLikes] = useState(0);

	function handleIncreaseLikeCounter() {
		setLikes(prevState => prevState + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/unclebob.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Robert Martin</strong>

							<time title="11 de maio as 8h13">
								Cerca de 1h atrás
							</time>
						</div>

						<button
							title="deletar comentário"
							onClick={() => deleteComment(comment)}
						>
							<Trash size={24} />
						</button>
					</header>

					<p>{comment}</p>
				</div>

				<footer>
					<button onClick={handleIncreaseLikeCounter}>
						<ThumbsUp />
						Aplaudir <span>{likes}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
