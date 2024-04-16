import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";

// Import Images
import errorImage from "../../assets/images/error-img.png";

const UserProfile = ({ transactions }) => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    const handleFilter = () => {
        let filtered = [];

        if (fromDate && toDate) {
            filtered = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.date);
                const fromDateObj = new Date(fromDate);
                const toDateObj = new Date(toDate);
                return transactionDate >= fromDateObj && transactionDate <= toDateObj;
            });
        }

        setFilteredTransactions(filtered);
    };

    useEffect(() => {
        // Add any side effects or additional initialization here if needed
    }, []); // Empty dependency array to run effect only once when component mounts

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center', // horizontally center
            alignItems: 'center', // vertically center
            minHeight: '100vh', // ensure full height
            flexDirection: 'column', // stack elements vertically
        },
        form: {
            marginTop: '20px', // Adjust marginTop to move the card downward
            marginBottom: '50px', // Adjust marginBottom to create space below the card
            width: '400px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
        },
        inputGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box',
        },
        button: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
        },
        transactions: {
            marginTop: '100px',
            textAlign: 'center', // Center the content within the transactions div
        },
        header: {
            fontSize: '20px',
            marginBottom: '15px',
            textAlign: 'center',
        },
        list: {
            listStyle: 'none',
            padding: '0',
        },
        listItem: {
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            {/* <h1>User Profile</h1> Example heading */}
            <Card style={styles.form}>
                <CardBody>
                    <h2 style={styles.header}>Transactions</h2>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>
                            From Date:
                            <input
                                type="date"
                                value={fromDate}
                                onChange={e => setFromDate(e.target.value)}
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>
                            To Date:
                            <input
                                type="date"
                                value={toDate}
                                onChange={e => setToDate(e.target.value)}
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <button onClick={handleFilter} style={styles.button}>Filter</button>

                    <div style={styles.transactions}>
                        <h3>Filtered Transactions</h3>
                        {filteredTransactions.length > 0 ? (
                            <ul style={styles.list}>
                                {filteredTransactions.map((transaction, index) => (
                                    <li key={index} style={styles.listItem}>
                                        <strong>Name:</strong> {transaction.name}, <strong>Price:</strong> {transaction.price}, <strong>Date:</strong> {transaction.date}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No transactions found.</p>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default UserProfile;
