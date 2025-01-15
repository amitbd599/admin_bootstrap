import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <div className='pagetitle'>
      <h1>Dashboard</h1>
      <nav>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='index.html'>Home</a>
          </li>
          <li className='breadcrumb-item active'>{title}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
