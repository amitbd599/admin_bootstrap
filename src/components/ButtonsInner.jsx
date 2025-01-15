import React from "react";

const ButtonsInner = () => {
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Default Buttons</h5>
              <button type='button' className='btn mx-1 btn-primary'>
                Primary
              </button>
              <button type='button' className='btn mx-1 btn-secondary'>
                Secondary
              </button>
              <button type='button' className='btn mx-1 btn-success'>
                Success
              </button>
              <button type='button' className='btn mx-1 btn-danger'>
                Danger
              </button>
              <button type='button' className='btn mx-1 btn-warning'>
                Warning
              </button>
              <button type='button' className='btn mx-1 btn-info'>
                Info
              </button>
              <button type='button' className='btn mx-1 btn-light'>
                Light
              </button>
              <button type='button' className='btn mx-1 btn-dark'>
                Dark
              </button>
              <button type='button' className='btn mx-1 btn-link'>
                Link
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Rounded Buttons</h5>
              <button
                type='button'
                className='btn mx-1 btn-primary rounded-pill'
              >
                Primary
              </button>
              <button
                type='button'
                className='btn mx-1 btn-secondary rounded-pill'
              >
                Secondary
              </button>
              <button
                type='button'
                className='btn mx-1 btn-success rounded-pill'
              >
                Success
              </button>
              <button
                type='button'
                className='btn mx-1 btn-danger rounded-pill'
              >
                Danger
              </button>
              <button
                type='button'
                className='btn mx-1 btn-warning rounded-pill'
              >
                Warning
              </button>
              <button type='button' className='btn mx-1 btn-info rounded-pill'>
                Info
              </button>
              <button type='button' className='btn mx-1 btn-light rounded-pill'>
                Light
              </button>
              <button type='button' className='btn mx-1 btn-dark rounded-pill'>
                Dark
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Icon Buttons</h5>
              <button type='button' className='btn mx-1 btn-primary'>
                <i className='bi bi-star me-1' /> With Text
              </button>
              <button type='button' className='btn mx-1 btn-secondary'>
                <i className='bi bi-collection' />
              </button>
              <button type='button' className='btn mx-1 btn-success'>
                <i className='bi bi-check-circle' />
              </button>
              <button type='button' className='btn mx-1 btn-danger'>
                <i className='bi bi-exclamation-octagon' />
              </button>
              <button type='button' className='btn mx-1 btn-warning'>
                <i className='bi bi-exclamation-triangle' />
              </button>
              <button type='button' className='btn mx-1 btn-info'>
                <i className='bi bi-info-circle' />
              </button>
              <button type='button' className='btn mx-1 btn-dark'>
                <i className='bi bi-folder' />
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Button Groups</h5>
              <div
                className='btn mx-1-group'
                role='group'
                aria-label='Basic example'
              >
                <button type='button' className='btn mx-1 btn-primary'>
                  Left
                </button>
                <button type='button' className='btn mx-1 btn-primary'>
                  Middle
                </button>
                <button type='button' className='btn mx-1 btn-primary'>
                  Right
                </button>
              </div>
              <div
                className='btn mx-1-group'
                role='group'
                aria-label='Basic mixed styles example'
              >
                <button type='button' className='btn mx-1 btn-danger'>
                  Left
                </button>
                <button type='button' className='btn mx-1 btn-warning'>
                  Middle
                </button>
                <button type='button' className='btn mx-1 btn-success'>
                  Right
                </button>
              </div>
              <div
                className='btn mx-1-group'
                role='group'
                aria-label='Basic outlined example'
              >
                <button type='button' className='btn mx-1 btn-outline-primary'>
                  Left
                </button>
                <button type='button' className='btn mx-1 btn-outline-primary'>
                  Middle
                </button>
                <button type='button' className='btn mx-1 btn-outline-primary'>
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Outline Buttons</h5>
              <button type='button' className='btn mx-1 btn-outline-primary'>
                Primary
              </button>
              <button type='button' className='btn mx-1 btn-outline-secondary'>
                Secondary
              </button>
              <button type='button' className='btn mx-1 btn-outline-success'>
                Success
              </button>
              <button type='button' className='btn mx-1 btn-outline-danger'>
                Danger
              </button>
              <button type='button' className='btn mx-1 btn-outline-warning'>
                Warning
              </button>
              <button type='button' className='btn mx-1 btn-outline-info'>
                Info
              </button>
              <button type='button' className='btn mx-1 btn-outline-light'>
                Light
              </button>
              <button type='button' className='btn mx-1 btn-outline-dark'>
                Dark
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Button Sizes</h5>
              <button type='button' className='btn mx-1 btn-primary btn-sm'>
                Small
              </button>
              <button type='button' className='btn mx-1 btn-secondary'>
                Normal
              </button>
              <button type='button' className='btn mx-1 btn-success btn-lg'>
                Large
              </button>
              <button
                type='button'
                className='btn mx-1 btn-outline-danger btn-sm'
              >
                Small
              </button>
              <button type='button' className='btn mx-1 btn-outline-warning'>
                Normal
              </button>
              <button
                type='button'
                className='btn mx-1 btn-outline-info btn-lg'
              >
                Large
              </button>
              <div className='d-grid gap-2 mt-3'>
                <button className='btn mx-1 btn-primary' type='button'>
                  Block Button
                </button>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Button States</h5>
              <button type='button' className='btn mx-1 btn-primary'>
                Normal
              </button>
              <button
                type='button'
                className='btn mx-1 btn-primary'
                disabled=''
              >
                Disabled
              </button>
              <button type='button' className='btn mx-1 btn-outline-primary'>
                Normal
              </button>
              <button
                type='button'
                className='btn mx-1 btn-outline-primary'
                disabled=''
              >
                Disabled
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonsInner;
