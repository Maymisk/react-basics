import {
	ChangeEvent,
	FormEvent,
	InvalidEvent,
	SetStateAction,
	Dispatch,
	useState,
} from 'react';
import styles from './CommentForm.module.scss';

interface ICommentFormProps {
	setComments: Dispatch<SetStateAction<string[]>>;
}

export function CommentForm({ setComments }: ICommentFormProps) {
	const [newCommentText, setNewCommentText] = useState('');

	const isNewCommentEmpty = newCommentText.length === 0;

	function handleCommentSubmission(event: FormEvent) {
		event.preventDefault();

		setComments(prevState => [...prevState, newCommentText]);
		setNewCommentText('');
	}

	function handleInvalidSubmission(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório!');
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}

	return (
		<form className={styles.commentForm} onSubmit={handleCommentSubmission}>
			<strong>Deixe seu feedback</strong>

			<textarea
				placeholder="Digite aqui..."
				value={newCommentText}
				onChange={handleNewCommentChange}
				onInvalid={handleInvalidSubmission}
			/>

			<footer>
				<button type="submit" disabled={isNewCommentEmpty}>
					Publicar
				</button>
			</footer>
		</form>
	);
}
