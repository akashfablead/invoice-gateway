import React, { useState } from 'react';

const Invoice = () => {
    const [client, setClient] = useState('John Doe');
    const [details, setDetails] = useState('Web development services');
    const [amount, setAmount] = useState(500);

    const printInvoice = () => {
        console.log(`Invoice for: ${client}`);
        console.log(`Details: ${details}`);
        console.log(`Amount: $${amount}`);
    };

    return (
        <div>
            <h1>Invoice</h1>
            <p>Client: {client}</p>
            <p>Amount: ${amount}</p>
            <button onClick={printInvoice}>Print Invoice</button>
            <p>Details: {details}</p>
        </div>
    );
};

export default Invoice;