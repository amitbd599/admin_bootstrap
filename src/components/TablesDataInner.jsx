import React from "react";

const TablesDataInner = () => {
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Datatables</h5>
              <p>
                Add lightweight datatables to your project with using the{" "}
                <a
                  href='https://github.com/fiduswriter/Simple-DataTables'
                  target='_blank'
                >
                  Simple DataTables
                </a>{" "}
                library. Just add <code>.datatable</code> class name to any
                table you wish to conver to a datatable. Check for{" "}
                <a
                  href='https://fiduswriter.github.io/simple-datatables/demos/'
                  target='_blank'
                >
                  more examples
                </a>
                .
              </p>
              {/* Table with stripped rows */}
              <table className='table datatable'>
                <thead>
                  <tr>
                    <th>
                      <b>N</b>ame
                    </th>
                    <th>Ext.</th>
                    <th>City</th>
                    <th data-type='date' data-format='YYYY/DD/MM'>
                      Start Date
                    </th>
                    <th>Completion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Unity Pugh</td>
                    <td>9958</td>
                    <td>Curicó</td>
                    <td>2005/02/11</td>
                    <td>37%</td>
                  </tr>
                  <tr>
                    <td>Theodore Duran</td>
                    <td>8971</td>
                    <td>Dhanbad</td>
                    <td>1999/04/07</td>
                    <td>97%</td>
                  </tr>
                  <tr>
                    <td>Kylie Bishop</td>
                    <td>3147</td>
                    <td>Norman</td>
                    <td>2005/09/08</td>
                    <td>63%</td>
                  </tr>
                  <tr>
                    <td>Willow Gilliam</td>
                    <td>3497</td>
                    <td>Amqui</td>
                    <td>2009/29/11</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>Blossom Dickerson</td>
                    <td>5018</td>
                    <td>Kempten</td>
                    <td>2006/11/09</td>
                    <td>17%</td>
                  </tr>
                  <tr>
                    <td>Elliott Snyder</td>
                    <td>3925</td>
                    <td>Enines</td>
                    <td>2006/03/08</td>
                    <td>57%</td>
                  </tr>
                  <tr>
                    <td>Castor Pugh</td>
                    <td>9488</td>
                    <td>Neath</td>
                    <td>2014/23/12</td>
                    <td>93%</td>
                  </tr>
                  <tr>
                    <td>Pearl Carlson</td>
                    <td>6231</td>
                    <td>Cobourg</td>
                    <td>2014/31/08</td>
                    <td>100%</td>
                  </tr>

                  <tr>
                    <td>Alisa Horn</td>
                    <td>9853</td>
                    <td>Ucluelet</td>
                    <td>2007/01/11</td>
                    <td>39%</td>
                  </tr>
                  <tr>
                    <td>Zelenia Roman</td>
                    <td>7516</td>
                    <td>Redwater</td>
                    <td>2012/03/03</td>
                    <td>31%</td>
                  </tr>
                </tbody>
              </table>
              {/* End Table with stripped rows */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TablesDataInner;
