
import { Image } from 'antd';
import { useEffect, useState } from 'react';
import { sliceData } from '../../helper/helper';
import { useAppSelector } from '../../store/Hooks/hooks';
import { IUserDataOnBack } from '../../store/todoSlice';
import { IFolowing, IRepos, IStars } from '../../types/typesUrlInfo';
import styles from './InfoUser.module.css'

export const InfoUser = () => {
	const state = useAppSelector(state => state.userData);
	const [repos, setRepos] = useState<IRepos[]>([])
	const [folowing, setFolowing] = useState<IFolowing[]>([])
	const [stars, setStars] = useState<IStars[]>([])

	useEffect(() => {
		if (state.findUser === 'FindUser') {
			fetch(state.userDataOnBack.repos_url).then(res => res.json()).then((res: IRepos[]) => setRepos(res))
			fetch(state.userDataOnBack.following_url).then(res => res.json()).then((res: IFolowing[]) => setFolowing(res))
			fetch(state.userDataOnBack.starred_url).then(res => res.json()).then((res: IStars[]) => setStars(res))
		}


	}, [state.findUser])

	return (
		<div className={styles.wrapper} >
			<div className={styles.text}>
				<div className={styles.blockText}>
					<div className={styles.titleInfoUser}>Repos</div>
					{repos.length != 0 ? repos.map(item => {
						return (
							<div key={item.pushed_at} className={styles.descUser}>
								<span>Name repos: {item.name}</span>
								<span>Url: <a href={item.clone_url}>{item.clone_url}</a></span>
								<span>Forks {item.forks}</span>
								<span>Pushed at: {sliceData(item.pushed_at)}</span>
							</div>)
					}) : <div>No data repos</div>}
				</div>
				<div className={styles.blockText}>
					<div className={styles.titleInfoUser}>Folowing</div>
					{folowing.length != 0 ? folowing.map(item => {

						return (
							<div key={item.id} className={styles.folowing}>
								<div>
									<Image width={80} src={item.avatar_url} />
								</div>
								<div className={styles.text}>
									<span>Name repos: {item.login}</span>
									<span>Url: <a href={item.html_url}>{item.html_url}</a></span>
								</div>
							</div>)
					}) : <div>No data Folowing</div>}
				</div>
				<div className={styles.blockText}>
					<div className={styles.titleInfoUser}>Stars</div>
					{stars.length != 0 ? stars.map(item => {
						return (
							<div key={item.pushed_at} className={styles.descUser}>
								<span>Name stars: {item.name}</span>
								<span>Url: <a href={item.clone_url}>{item.clone_url}</a></span>
								<span>Forks {item.forks}</span>
								<span>Pushed at: {sliceData(item.pushed_at)}</span>
							</div>)
					}) : <div>No data Folowing</div>}
				</div>
			</div>

		</div>
	)
}