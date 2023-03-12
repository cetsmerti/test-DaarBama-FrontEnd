import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/Hooks/hooks';
import { setError, setfindUser, setInput, setloadingState, setuserDataOnBack } from '../../store/todoSlice';
import { URL_SERVER } from '../../urlServer';
import styles from './Search.module.css'
export const Search = () => {
	const state = useAppSelector(state => state.userData);
	const dispatch = useAppDispatch()

	const searchUser = () => {

		const data = {
			login: state.input
		}
		dispatch(setloadingState())
		fetch(`${URL_SERVER}/worker`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(res => {
			if (res.statusCode === 404) {
				dispatch(setfindUser('notFindUser'))
			} else {
				dispatch(setfindUser('FindUser'))
				dispatch(setuserDataOnBack(res))
			}
		}).catch((e: Error) => {
			dispatch(setError(e.message))
		})
		dispatch(setloadingState())


	}


	return (
		<div onClick={() => console.log(state)} className={styles.wrapper}>
			<div className={styles.text}>{`Welcome to my Git API site.
			Enter your account name to see brief information about your git`}</div>
			<Input
				onChange={(e) => dispatch(setInput(e.target.value))}
				value={state.input}
				size='large'
				placeholder="Enter your username"
				prefix={<UserOutlined />}
				suffix={
					<SearchOutlined />
				}
			/>
			<Button onClick={() => searchUser()} className={styles.button} type="primary" block>Search</Button>
		</div >
	)
}

