import React, { useEffect, useState } from 'react'
import { Header } from '../header/header'
import { SideBar } from './../side-bar/side-bar'
import { request } from '@/config/request'
import { Loading } from '@/components/loading'
import { Board } from '../board/board'

type DataT = {
	_id: string
	title: string
	todos: [],
	doing: [],
	done: [],
	createdAt: number
	lastUpdate: number
}

export const HomeBody = () => {
	const [loading, isLoading] = useState(true)
	const [data, setData] = useState<[] | DataT[]>([])
	const [isSide, setIsSide] = useState(true)
	const [tabI, setTabI] = useState<boolean | string>
		("loading")
	const [todo, setTodo] = useState({
		todos: [],
		doing: [],
		done: []
	})
	useEffect(() => {
		request.get("/boards").then(res => {
			if (res.status === 200) {
				if (res.data.length !== 0) {
					setTabI(res.data[0]._id)
				}
				else {
					setTabI(false)
				}
				setData(res.data)
			}
		}).catch(err => {
			console.log("Error")
		})
		request.get(`/boards/todos`, {
			headers: {
				boardId: tabI
			}
		}).then(res => {
			setTodo(r => {
				return { ...r, todos: res.data }
			})
			console.log(res.data)
		}).catch(err => { console.log("Ошибка") }).finally(() => {
			isLoading(false)
		})
	}, [tabI])
	console.log(data, todo)
	const dataItem = data.find((item) => item?._id === tabI)
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='text-kanban_black_500'>
					<Header title={dataItem && dataItem.title} isSide={isSide} />
					<main className='flex'>
						<section>
							<SideBar setTabI={setTabI} tabI={tabI} data={data} />
						</section>
						<section>
							{tabI === "loading" && <p>Загрузка....</p>}
							{tabI !== "loading" && <Board />}
						</section>
					</main>
				</div>
			)}
		</>
	)
}
