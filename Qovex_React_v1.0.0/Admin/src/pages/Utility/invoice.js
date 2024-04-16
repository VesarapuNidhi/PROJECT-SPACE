// import React, { useState, useEffect } from 'react';
// import { CardBody, Row, Col, Card, Table } from 'reactstrap';
// import { Link } from "react-router-dom"
// import Breadcrumbs from "../../components/Common/Breadcrumb"
// import logo from "../../assets/images/logo-dark.png"
// import logoLight from "../../assets/images/logo-light.png";

// const Invoice = () => {
//     const [formData, setFormData] = useState({
//         invoiceNumber: '',
//         customerName: '',
//         address: '',
//         paymentMethod: '',
//         orderDate: '',
//         items: [],
//         shipping: '',
//         totalPrice: 0,
//     });

//     const [invoiceCounter, setInvoiceCounter] = useState(1);

//     // Calculate the total price whenever items change
//     useEffect(() => {
//         const totalPrice = formData.items.reduce((acc, item) => acc + item.price, 0);
//         setFormData(prevState => ({ ...prevState, totalPrice: totalPrice }));
//     }, [formData.items]);

//     useEffect(() => {
//         const currentDate = new Date().toISOString().slice(0, 10);
//         setFormData(prevState => ({ ...prevState, orderDate: currentDate }));
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleAddItem = () => {
//         const newItem = {
//             name: 'New Item', // Change this to the actual item name from your form
//             price: 10, // Change this to the actual price from your form
//         };
//         setFormData({
//             ...formData,
//             items: [...formData.items, newItem],
//         });
//     };

//     const generateInvoice = () => {
//         const newInvoiceNumber = `INV-${invoiceCounter}`;
//         setFormData(prevState => ({ ...prevState, invoiceNumber: newInvoiceNumber }));
//         setInvoiceCounter(prevCounter => prevCounter + 1);
//         console.log('Generated Invoice:', formData);
//     };

//     return (
//         <React.Fragment>
//             <div className="page-content">
//                 <Breadcrumbs title="Pages" breadcrumbItem="Invoice" />
//                 <Row>
//                     <Col lg={12}>
//                         <Card>
//                             <CardBody>
//                                 <div className="invoice-title">
//                                     <h4 className="float-end font-size-16">Order # {formData.invoiceNumber}</h4>
//                                     <div className="mb-4">
//                                         <img src={logo} className="logo-dark" alt="logo dark" height="20" />
//                                         <img src={logoLight} className="logo-light" alt="logo light" height="20" />
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <Row>
//                                     <div className="col-6">
//                                         <address>
//                                             <strong>Billed To:</strong><br />
//                                             Aditya Institutions,
//                                             Surampalem
//                                             {formData.customerName}<br />
//                                             {formData.address}
//                                         </address>
//                                     </div>
//                                     <div className="col-6 text-end">
//                                         <address>
//                                             <strong>Shipped To:</strong><br />
//                                             THub,
//                                             Surampalem
//                                             {/* Shipping details */}
//                                         </address>
//                                     </div>
//                                 </Row>
//                                 <Row>
//                                     <div className="col-6 mt-3">
//                                         <address>
//                                             <strong>Payment Method:</strong><br />
//                                             {formData.paymentMethod}
//                                         </address>
//                                     </div>
//                                     <div className="col-6 mt-3 text-end">
//                                         <address>
//                                             <strong>Order Date:</strong><br />
//                                             {formData.orderDate}
//                                         </address>
//                                     </div>
//                                 </Row>
//                                 <div className="py-2 mt-3">
//                                     <h3 className="font-size-15 fw-bold">Order summary</h3>
//                                 </div>
//                                 <div className="table-responsive">
//                                     <Table className="table-nowrap">
//                                         <thead>
//                                             <tr>
//                                                 <th style={{ width: "70px" }}>No.</th>
//                                                 <th>Item name</th>
//                                                 <th className="text-end">Price</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {/* Render items dynamically */}
//                                             {formData.items.map((item, index) => (
//                                                 <tr key={index}>
//                                                     <td>{index + 1}</td>
//                                                     <td>{item.name}</td>
//                                                     <td className="text-end">{item.price}</td>
//                                                 </tr>
//                                             ))}
//                                             <tr>
//                                                 <td colSpan="2" className="text-end">Sub Total</td>
//                                                 <td className="text-end">{formData.totalPrice}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td colSpan="2" className="border-0 text-end">
//                                                     <strong>Shipping</strong>
//                                                 </td>
//                                                 <td className="border-0 text-end">{formData.shipping}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td colSpan="2" className="border-0 text-end">
//                                                     <strong>Total</strong>
//                                                 </td>
//                                                 <td className="border-0 text-end">
//                                                     <h4 className="m-0">{formData.totalPrice}</h4>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </Table>
//                                 </div>
//                                 <div className="d-print-none">
//                                     <div className="float-end">
//                                         <button onClick={handleAddItem} className="btn btn-primary waves-effect waves-light">Add Item</button>{" "}
//                                         <button onClick={generateInvoice} className="btn btn-success waves-effect waves-light"><i className="fa fa-print"></i> Generate Invoice</button>{" "}
//                                     </div>
//                                 </div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//         </React.Fragment>
//     );
// }

// export default Invoice;
import React, { useState, useEffect } from 'react';
import { CardBody, Row, Col, Card, Table } from 'reactstrap';
import Breadcrumbs from "../../components/Common/Breadcrumb"
import logo from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png";

const Invoice = () => {
    const [formData, setFormData] = useState({
        invoiceNumber: '',
        customerName: '',
        address: '',
        paymentMethod: '',
        orderDate: '',
        items: [],
        shipping: '',
        totalPrice: 0,
    });

    const [invoiceCounter, setInvoiceCounter] = useState(1);

    // Calculate the total price whenever items change
    useEffect(() => {
        const totalPrice = formData.items.reduce((acc, item) => acc + item.price, 0);
        setFormData(prevState => ({ ...prevState, totalPrice: totalPrice }));
    }, [formData.items]);

    useEffect(() => {
        const currentDate = new Date().toISOString().slice(0, 10);
        setFormData(prevState => ({ ...prevState, orderDate: currentDate }));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddItem = () => {
        const newItem = {
            name: 'New Item', // Change this to the actual item name from your form
            price: 10, // Change this to the actual price from your form
        };
        setFormData({
            ...formData,
            items: [...formData.items, newItem],
        });
    };

    const generateInvoice = () => {
        const newInvoiceNumber = `INV-${invoiceCounter}`;
        setFormData(prevState => ({ ...prevState, invoiceNumber: newInvoiceNumber }));
        setInvoiceCounter(prevCounter => prevCounter + 1);
        console.log('Generated Invoice:', formData);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Pages" breadcrumbItem="Invoice" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <CardBody>
                                <div className="invoice-title">
                                    <h4 className="float-end font-size-16">Order # {formData.invoiceNumber}</h4>
                                    <div className="mb-4">
                                        <img src={logo} className="logo-dark" alt="logo dark" height="20" />
                                        <img src={logoLight} className="logo-light" alt="logo light" height="20" />
                                    </div>
                                </div>
                                <hr />
                                <Row>
                                    <div className="col-6">
                                        <address>
                                            <strong>Billed To:</strong><br />
                                            Aditya Institutions,
                                            Surampalem
                                            {formData.customerName}<br />
                                            {formData.address}
                                        </address>
                                    </div>
                                    <div className="col-6 text-end">
                                        <address>
                                            <strong>Shipped To:</strong><br />
                                            THub,
                                            Surampalem
                                            {/* Shipping details */}
                                        </address>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-6 mt-3">
                                        <address>
                                            <strong>Payment Method:</strong><br />
                                            {formData.paymentMethod}
                                        </address>
                                    </div>
                                    <div className="col-6 mt-3 text-end">
                                        <address>
                                            <strong>Order Date:</strong><br />
                                            {formData.orderDate}
                                        </address>
                                    </div>
                                </Row>
                                <div className="py-2 mt-3">
                                    <h3 className="font-size-15 fw-bold">Order summary</h3>
                                </div>
                                <div className="table-responsive">
                                    <Table className="table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "70px" }}>No.</th>
                                                <th>Item name</th>
                                                <th className="text-end">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Render items dynamically */}
                                            {formData.items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td className="text-end">{item.price}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan="2" className="text-end">Sub Total</td>
                                                <td className="text-end">{formData.totalPrice}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" className="border-0 text-end">
                                                    <strong>Shipping</strong>
                                                </td>
                                                <td className="border-0 text-end">{formData.shipping}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" className="border-0 text-end">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="border-0 text-end">
                                                    <h4 className="m-0">{formData.totalPrice}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="d-print-none">
                                    <div className="float-end">
                                        <button onClick={handleAddItem} className="btn btn-primary waves-effect waves-light">Add Item</button>{" "}
                                        <button onClick={generateInvoice} className="btn btn-success waves-effect waves-light"><i className="fa fa-print"></i> Generate Invoice</button>{" "}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Invoice;
