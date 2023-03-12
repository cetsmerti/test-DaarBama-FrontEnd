import { BugFilled } from '@ant-design/icons'
import { Alert } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout'
import { ReactNode } from 'react'
import { useAppSelector } from '../store/Hooks/hooks'
import styles from './LayoutComponent.module.css'

interface iLayoutComponent {
	children: ReactNode
}

export const LayoutComponent = ({ children }: iLayoutComponent) => {
	const state = useAppSelector(state => state.userData);

	const errrorText = state.findUser === 'notFindUser' ? 'This user not found' : state.error
	const description = state.findUser === 'notFindUser' ? 'For example : cetsmerti' : 'Please check server status'
	return (
		<Layout className={styles.layout}>
			<Header className={styles.header}>
				<BugFilled className={styles.logo} />
				{state.findUser === "notFindUser" || state.error ?
					<Alert className={styles.alert}
						message={errrorText}
						showIcon
						description={description}
						type="error"
					/>
					: null}
			</Header>
			<Content className={styles.content}>
				<div className={styles.contentWrapper} >
					{children}
				</div>
			</Content>
			<Footer className={styles.footer} ><a href='https://github.com/cetsmerti'>My Git</a></Footer>
		</Layout>
	)
}