// import React from "react";
// import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import { Link } from "react-router-dom";

// const LatestTransaction = () => {
//     return (
//         <Col lg={{ size: 6, offset: 3 }} style={{ marginTop: "40px" }}> {/* Added margin top */}
//             <Card>
//                 <CardBody>
//                     <CardTitle className="h4 mb-4">Recent Orders</CardTitle>
//                     <div className="table-responsive">
//                         <Table className="table-centered">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">Date</th>
//                                     <th scope="col">Id no.</th>
//                                     <th scope="col">Billing Name</th>
//                                     <th scope="col">Quantity Requested</th>
//                                     <th scope="col" colSpan="2">Quantity Issued</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>15/01/2020</td>
//                                     <td>
//                                         <Link to="#" className="text-body fw-medium">#SK1235</Link>
//                                     </td>
//                                     <td>Werner Berlin</td>
//                                     <td>$ 125</td>
//                                     <td><span className="badge badge-soft-success font-size-12">Paid</span>
//                                     </td>
//                                     <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
//                                 </tr>
//                                 <tr>
//                                     <td>16/01/2020</td>
//                                     <td>
//                                         <Link to="#" className="text-body fw-medium">#SK1236</Link>
//                                     </td>
//                                     <td>Robert Jordan</td>
//                                     <td>$ 118</td>
//                                     <td><span className="badge badge-soft-danger font-size-12">Chargeback</span>
//                                     </td>
//                                     <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
//                                 </tr>
//                                 <tr>
//                                     <td>17/01/2020</td>
//                                     <td>
//                                         <Link to="#" className="text-body fw-medium">#SK1237</Link>
//                                     </td>
//                                     <td>Daniel Finch</td>
//                                     <td>$ 115</td>
//                                     <td><span className="badge badge-soft-success font-size-12">Paid</span>
//                                     </td>
//                                     <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
//                                 </tr>
//                                 <tr>
//                                     <td>18/01/2020</td>
//                                     <td>
//                                         <Link to="#" className="text-body fw-medium">#SK1238</Link>
//                                     </td>
//                                     <td>James Hawkins</td>
//                                     <td>$ 121</td>
//                                     <td><span className="badge badge-soft-warning font-size-12">Refund</span>
//                                     </td>
//                                     <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
//                                 </tr>
//                             </tbody>
//                         </Table>
//                     </div>
//                     <div className="mt-3">
//                         <Pagination className="pagination pagination-rounded justify-content-center mb-0">
//                             <PaginationItem>
//                                 <PaginationLink to="#">Previous</PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem><PaginationLink to="#">1</PaginationLink></PaginationItem>
//                             <PaginationItem className="active"><PaginationLink to="#">2</PaginationLink></PaginationItem>
//                             <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
//                             <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
//                         </Pagination>
//                     </div>
//                 </CardBody>
//             </Card>
//         </Col>
//     );
// };

// export default LatestTransaction;


import React from "react";
import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./latest-transaction.css"; // Importing the CSS file

const LatestTransaction = () => {
    return (
        <Col lg={{ size: 8, offset: 2 }} style={{ marginTop: "40px" }}>
            <Card>
                <CardBody>
                   <h3> <CardTitle className="h3 mb-4" >Recent Orders</CardTitle></h3>
                    <div className="table-responsive">
                        <Table className="table-centered custom-table" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice no.</th>
                                    <th scope="col">Billing Name</th>
                                    <th scope="col">Quantity Requested</th>
                                    <th scope="col" colSpan="2">Quantity Issued</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">#SK1235</Link>
                                    </td>
                                    <td>Aditya University</td>
                                    <td>30</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>16/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">#SK1236</Link>
                                    </td>
                                    <td>Aditya University</td>
                                    <td>78</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>17/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">#SK1237</Link>
                                    </td>
                                    <td>Aditya University</td>
                                    <td>64</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>18/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">#SK1238</Link>
                                    </td>
                                    <td>Aditya University</td>
                                    <td>51</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <td>19/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">#SK1239</Link>
                                    </td>
                                    <td>Aditya University</td>
                                    <td>100</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>20/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">#SK1240</Link>
                                    </td>
                                    <td>Aditya University</td>
                                    <td>46</td>
                                    <td>35</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="mt-3">
                        <Pagination className="pagination pagination-rounded justify-content-center mb-0">
                            <PaginationItem>
                                <PaginationLink to="#">Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink to="#">1</PaginationLink></PaginationItem>
                            <PaginationItem className="active"><PaginationLink to="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default LatestTransaction;


