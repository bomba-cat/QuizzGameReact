import { Outlet } from 'react-router-dom'
import Category from './category'
export default function Layout() {
    const options = ["autos", "cpu", "gpu"]
    const option_buttons = options.map(a =>
      <Category key={a} s="m-8 p-4 font-mono text-6xl" name={a} />
    )
	return (<div>
              <div className="p-48 bg-gradient-to-tr from-zinc-100 via-gray-200 to-slate-300 dark:bg-gradient-to-tr dark:from-slate-900 dark:via-gray-800 dark:to-zinc-700 h-screen w-screen absolute top-0 left-0">
        <h1 className="absolute top-36 -translate-y-1/2 -translate-x-1/2 left-1/2">Waehlen sie ein Quiz</h1>
        <div className="answer-buttons m-1 absolute inset-y-2/4 -translate-y-1/2 -translate-x-1/2 left-1/2">
          {option_buttons}
        </div>
        </div>
			<Outlet />
		</div>)
}