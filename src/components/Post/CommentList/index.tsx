import { Dispatch, SetStateAction } from 'react';
import { Comment } from '../../Comment';
import styles from './CommentList.module.scss';

interface ICommentListProps {
	comments: string[];
	setComments: Dispatch<SetStateAction<string[]>>;
}

export function CommentList({ comments, setComments }: ICommentListProps) {
	function deleteComment(commentToDelete: string) {
		setComments(prevState => {
			const filteredComments = prevState.filter(
				comment => comment != commentToDelete
			);

			return filteredComments;
		});
	}

	return (
		<div className={styles.commentList}>
			{comments.map(comment => {
				return (
					<Comment
						key={comment}
						comment={comment}
						deleteComment={deleteComment}
					/>
				);
			})}
		</div>
	);
}
