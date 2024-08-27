function Category(props) {
	return (<>
		<button className="m-8 p-4 font-mono text-6xl" onClick={ props.fun }>{ props.name }</button>
	</>)
}

export default Category
