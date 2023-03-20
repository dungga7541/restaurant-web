import React from 'react';
import "./NotFound.scss";
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>:(</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<Link to="/"><a >home page</a></Link>
		</div>
	    </div>
    </div>
  )
}

export default NotFound
