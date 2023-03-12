

import Title from 'antd/es/typography/Title'
import { sliceData } from '../../helper/helper';
import { useAppSelector } from '../../store/Hooks/hooks';
import { IUserDataOnBack } from '../../store/todoSlice';
import styles from './TopInfo.module.css'
export const TopInfo = () => {

	const state = useAppSelector(state => state.userData);
	const { login, created_at, html_url, avatar_url } = state.userDataOnBack as IUserDataOnBack

	return (
		<div className={styles.wrapper}>
			<img src={avatar_url} width={90} className={styles.img
			} />
			<section className={styles.textArea}>
				<h2 className={styles.name} >User name:{login}</h2>
				<span>Data create accaunt: {sliceData(created_at)}</span>
				<span> Url accaunt: <a href={html_url}>{html_url} </a> </span>
			</section>
		</div>
	)
}