import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
          <Link className='nav-link ' to='/'>
            <i className='bi bi-grid' />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* End Dashboard Nav */}
        <li className='nav-item'>
          <Link
            className='nav-link collapsed'
            data-bs-target='#components-nav'
            data-bs-toggle='collapse'
            to='#'
          >
            <i className='bi bi-menu-button-wide' />
            <span>Components</span>
            <i className='bi bi-chevron-down ms-auto' />
          </Link>
          <ul
            id='components-nav'
            className='nav-content collapse '
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <NavLink to='/components-alerts'>
                <i className='bi bi-circle' />
                <span>Alerts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-accordion'>
                <i className='bi bi-circle' />
                <span>Accordion</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-badges'>
                <i className='bi bi-circle' />
                <span>Badges</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-breadcrumbs'>
                <i className='bi bi-circle' />
                <span>Breadcrumbs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-buttons'>
                <i className='bi bi-circle' />
                <span>Buttons</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-cards'>
                <i className='bi bi-circle' />
                <span>Cards</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-carousel'>
                <i className='bi bi-circle' />
                <span>Carousel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-list-group'>
                <i className='bi bi-circle' />
                <span>List group</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-modal'>
                <i className='bi bi-circle' />
                <span>Modal</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-tabs'>
                <i className='bi bi-circle' />
                <span>Tabs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-pagination'>
                <i className='bi bi-circle' />
                <span>Pagination</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-progress'>
                <i className='bi bi-circle' />
                <span>Progress</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-spinners'>
                <i className='bi bi-circle' />
                <span>Spinners</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/components-tooltips'>
                <i className='bi bi-circle' />
                <span>Tooltips</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* End Components Nav */}
        <li className='nav-item'>
          <Link
            className='nav-link collapsed'
            data-bs-target='#forms-nav'
            data-bs-toggle='collapse'
            to='#'
          >
            <i className='bi bi-journal-text' />
            <span>Forms</span>
            <i className='bi bi-chevron-down ms-auto' />
          </Link>
          <ul
            id='forms-nav'
            className='nav-content collapse '
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <NavLink to='/forms-elements'>
                <i className='bi bi-circle' />
                <span>Form Elements</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/forms-layouts'>
                <i className='bi bi-circle' />
                <span>Form Layouts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/forms-editors'>
                <i className='bi bi-circle' />
                <span>Form Editors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/forms-validation'>
                <i className='bi bi-circle' />
                <span>Form Validation</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* End Forms Nav */}
        <li className='nav-item'>
          <Link
            className='nav-link collapsed'
            data-bs-target='#tables-nav'
            data-bs-toggle='collapse'
            to='#'
          >
            <i className='bi bi-layout-text-window-reverse' />
            <span>Tables</span>
            <i className='bi bi-chevron-down ms-auto' />
          </Link>
          <ul
            id='tables-nav'
            className='nav-content collapse '
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <NavLink to='/tables-general'>
                <i className='bi bi-circle' />
                <span>General Tables</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/tables-data'>
                <i className='bi bi-circle' />
                <span>Data Tables</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* End Tables Nav */}
        <li className='nav-item'>
          <Link
            className='nav-link collapsed'
            data-bs-target='#charts-nav'
            data-bs-toggle='collapse'
            to='#'
          >
            <i className='bi bi-bar-chart' />
            <span>Charts</span>
            <i className='bi bi-chevron-down ms-auto' />
          </Link>
          <ul
            id='charts-nav'
            className='nav-content collapse '
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <NavLink to='/charts-chartjs'>
                <i className='bi bi-circle' />
                <span>Chart.js</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/charts-apexcharts'>
                <i className='bi bi-circle' />
                <span>ApexCharts</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* End Charts Nav */}
        <li className='nav-item'>
          <Link
            className='nav-link collapsed'
            data-bs-target='#icons-nav'
            data-bs-toggle='collapse'
            to='#'
          >
            <i className='bi bi-gem' />
            <span>Icons</span>
            <i className='bi bi-chevron-down ms-auto' />
          </Link>
          <ul
            id='icons-nav'
            className='nav-content collapse '
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <NavLink to='/icons-bootstrap'>
                <i className='bi bi-circle' />
                <span>Bootstrap Icons</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/icons-remix'>
                <i className='bi bi-circle' />
                <span>Remix Icons</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/icons-boxicons'>
                <i className='bi bi-circle' />
                <span>Boxicons</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* End Icons Nav */}
        <li className='nav-heading'>Pages</li>
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/users-profile'>
            <i className='bi bi-person' />
            <span>Profile</span>
          </Link>
        </li>
        {/* End Profile Page Nav */}
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/pages-faq'>
            <i className='bi bi-question-circle' />
            <span>F.A.Q</span>
          </Link>
        </li>
        {/* End F.A.Q Page Nav */}
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/pages-contact'>
            <i className='bi bi-envelope' />
            <span>Contact</span>
          </Link>
        </li>
        {/* End Contact Page Nav */}
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/pages-register'>
            <i className='bi bi-card-list' />
            <span>Register</span>
          </Link>
        </li>
        {/* End Register Page Nav */}
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/pages-login'>
            <i className='bi bi-box-arrow-in-right' />
            <span>Login</span>
          </Link>
        </li>
        {/* End Login Page Nav */}
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/pages-error-404'>
            <i className='bi bi-dash-circle' />
            <span>Error 404</span>
          </Link>
        </li>
        {/* End Error 404 Page Nav */}
        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/pages-blank'>
            <i className='bi bi-file-earmark' />
            <span>Blank</span>
          </Link>
        </li>
        {/* End Blank Page Nav */}
      </ul>
    </aside>
  );
};

export default Sidebar;
