import Image from 'next/image';

import styles from './footer.module.css';

export default function footer() {
	return (
		<footer id={styles.footer}>
			<div id={styles.smallLogo}>
				<Image
					src='/hscreditlogonowords-2.svg'
					width={22}
					height={22}
					alt='hs.credit logo'
				/>
			</div>
			<div id={styles.bottomNav}>
				<div>Powered by hs.credit</div>
				<div>&#169; Academic Capital Foundation, Inc.</div>
			</div>
		</footer>
	);
}
