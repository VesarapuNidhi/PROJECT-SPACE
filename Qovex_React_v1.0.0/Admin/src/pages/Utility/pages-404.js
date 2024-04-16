import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";

// Import Images
import errorImage from "../../assets/images/error-img.png";

const Pages404 = ({ transactions }) => {
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

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h1 style={styles.header}>Transactions</h1>
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
                    <h2 style={styles.header}>Filtered Transactions</h2>
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
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        width: '400px',
        padding: '20px',
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
        marginTop: '20px',
    },
    header: {
        fontSize: '20px',
        marginBottom: '15px',
    },
    list: {
        listStyle: 'none',
        padding: '0',
    },
    listItem: {
        marginBottom: '10px',
    },
};

export default Pages404;
