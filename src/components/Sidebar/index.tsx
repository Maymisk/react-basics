import styles from './Sidebar.module.scss';
import bannerSample from '../../assets/bannerSample.jpg';

import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img className={styles.banner} src={bannerSample} />

			<div className={styles.profile}>
				<Avatar
					src="https://avatars.githubusercontent.com/u/92688722?v=4"
					alt="Maymisk github profile picture"
				/>

				<strong>Khalil Bohner</strong>
				<span>Web developer</span>
			</div>

			<footer>
				<a
					href="
                #"
				>
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
