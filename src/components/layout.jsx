import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (<div className="App">
			<h1 className="absolute top-36 -translate-y-1/2 -translate-x-1/2 left-1/2">Waehlen sie ein Quiz</h1>
      <div className="answer-buttons m-1 absolute inset-y-2/4 -translate-y-1/2 -translate-x-1/2 left-1/2">
      	{option_buttons}
      </div>
			<Outlet />
		</div>)
}
