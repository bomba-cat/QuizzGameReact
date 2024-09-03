import { Link } from "react-router-dom";

function Category(props) {
	return (<>
		<Link to={`/${ props.name.toLowerCase()} `}>
      { props.name }
    </Link>
	</>)
}

export default Category
