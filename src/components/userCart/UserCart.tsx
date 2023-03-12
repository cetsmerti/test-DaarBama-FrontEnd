import { InfoUser } from '../infoUser/InfoUser'
import { TopInfo } from '../topInfo/TopInfo'
import styles from './UserCart.module.css'

export const UserCart = () => {


	return (
		<div className={styles.wrapper}>
			<TopInfo />
			<InfoUser />
		</div>
	)
}