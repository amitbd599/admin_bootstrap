import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";

const TooltipsInner = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl); // Use direct import reference
    });
  }, []);
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Tooltips Examples</h5>
              <p>
                Hover over the buttons below to see the four tooltips
                directions: top, right, bottom, and left.{" "}
              </p>
              {/* Tooltips Examples */}
              <button
                type='button'
                className='btn mx-1 btn-secondary'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                title='Tooltip on top'
              >
                Tooltip on top
              </button>
              <button
                type='button'
                className='btn mx-1 btn-secondary'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
                title='Tooltip on right'
              >
                Tooltip on right
              </button>
              <button
                type='button'
                className='btn mx-1 btn-secondary'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                title='Tooltip on bottom'
              >
                Tooltip on bottom
              </button>
              <button
                type='button'
                className='btn mx-1 btn-secondary'
                data-bs-toggle='tooltip'
                data-bs-placement='left'
                title='Tooltip on left'
              >
                Tooltip on left
              </button>
              {/* End Tooltips Examples */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TooltipsInner;
