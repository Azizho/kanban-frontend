import "./loading.scss"

export const Loading = () => {
	return (
		<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
			<div className="lds-ring inline-block relative w-20 h-20"><div></div><div></div><div></div><div></div></div>
		</div>
	)
}
