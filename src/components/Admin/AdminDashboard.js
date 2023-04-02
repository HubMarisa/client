import './Admin.css';

import { faBowlFood, faShop, faUsers } from '@fortawesome/free-solid-svg-icons';

import AllRestaurants from './AllRestaurants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import React from "react";

const AdminDashboard = () => {
  return (
		<div className="container-fluid">
			<div className="row">
				<nav className="col-sm-12 col-md-4 col-lg-3 d-md-block bg-light sidebar collapse">
					<div className="position-sticky pt-3 sidebar-sticky">
						<ul className="nav flex-column">
							<li className="nav-item">
								<Link to="/admin/add-restaurant" className="admin-nav-link nav-link fs-5 fw-bold" aria-current="page">
									<FontAwesomeIcon icon={faShop} className="feather feather-home align-text-center" />
									&nbsp;Add new restaurant
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="admin-nav-link nav-link fs-5 fw-bold" aria-current="page">
									<FontAwesomeIcon icon={faBowlFood} className="feather feather-home align-text-center" />
									&nbsp;Add new dish
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="admin-nav-link nav-link fs-5 fw-bold" aria-current="page">
									<FontAwesomeIcon icon={faUsers} className="feather feather-home align-text-center" />
									&nbsp;Users
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				<div className="col-sm-12 col-md-8 col-lg-9 ms-sm-auto px-md-4">
					<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 className="h2">Dashboard</h1>
					</div>

					<AllRestaurants />
				</div>
			</div>
		</div>
  );
};

export default AdminDashboard;
