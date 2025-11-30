import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  
  const navigate = useNavigate();
 
   const handleGoBack = ()=>{
    // navigate(-1);
    navigate("/");
   }

  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink to="/" className="btn">
          Go back To home Page
        </NavLink>
        <br /><br />
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  }
}

export default ErrorPage;
