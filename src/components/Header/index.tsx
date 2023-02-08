import styles from './Header.module.scss';
import IgniteLogoPath from '../../assets/ignite-symbol.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={IgniteLogoPath} alt="Ignite logo" />
		</header>
	);
}
