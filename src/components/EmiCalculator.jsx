import React, { useState, useEffect } from "react";
import loanIcon from "../assets/loan-amount.png"; // Example path
import interestIcon from "../assets/interest-rate.png"; // Replace with your image
import totalAmountIcon from "../assets/total-amount.png"; // Replace with your image

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [term, setTerm] = useState("");
    const [emi, setEmi] = useState("");
    const [hovered, setHovered] = useState(null); // To track hover state
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Handle screen resize to toggle layout
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const calculateEMI = (e) => {
        e.preventDefault();
        if (!loanAmount || !interestRate || !term) {
            alert("Please fill in all fields");
            return;
        }

        const r = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
        const n = parseInt(term); // Term in months
        const p = parseFloat(loanAmount); // Principal loan amount

        const emiValue = p * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
        setEmi(emiValue.toFixed(2));
    };

    const resetForm = () => {
        setLoanAmount("");
        setInterestRate("");
        setTerm("");
        setEmi("");
    };

    // Style definitions
    const styles = {
        main: {
            margin: "0 auto",
            width: "90%",
            boxSizing: "border-box",
        },
        mainContainer: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            padding: "20px",
            gap: "20px",
            boxSizing: "border-box",
            width: "100%",
        },
        formContainer: {
            backgroundColor: "#e9f0f6",
            padding: "20px",
            borderRadius: "10px",
            width: isMobile ? "100%" : "50%",
            boxSizing: "border-box",
        },
        resultContainer: {
            width: isMobile ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
        },
        resultBox: (isHovered) => ({
            backgroundColor: isHovered ? "#f0f8ff" : "#ffffff",
            border: isHovered ? "2px solid #4a90e2" : "2px solid #d0e8ff",
            borderRadius: "10px",
            gap: "40px",
            marginBottom: "10px",
            height: "75px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px",
            transition: "background-color 0.3s, border 0.3s",
        }),
        imageIcon: {
            marginRight: "10px",
            marginLeft: "20px",
            width: "40px",
            height: "40px",
        },
        textContainer: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            width: "100%",
        },
        header: {
            fontSize: "15px",
            color: "#333",
            margin: "0px",
        },
        input: {
            width: "100%",
            padding: "10px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor: "#fff",
            color: "#000",
            fontSize: "15px",
        },
        button: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#027D33",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
        },
        resultText: {
            fontSize: "24px",
            color: "#027D33",
            fontWeight: "800",
            margin: "0px",
        },
        label: {
            marginBottom: "0px",
            fontWeight: "800",
            fontSize: "15px",
            display: "block",
        },
        emiHeader: {
            borderBottom: "3px solid green",
            display: "inline",
        },
    };

    return (
        <div style={styles.main}>
            <h2 style={styles.emiHeader}>EMI Calculator</h2>
            <div style={styles.mainContainer}>
                {/* Form Section */}
                <form style={styles.formContainer} onSubmit={calculateEMI}>
                    <label style={styles.label}>Loan Amount</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        placeholder="Enter loan amount"
                        style={styles.input}
                    />

                    <label style={styles.label}>Interest Rate %</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        placeholder="Enter interest rate"
                        style={styles.input}
                    />

                    <label style={styles.label}>Terms (Months)</label>
                    <input
                        type="number"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Enter term in months"
                        style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                        CALCULATE
                    </button>
                </form>

                {/* Result Section */}
                <div style={styles.resultContainer}>
                    <div
                        style={styles.resultBox(hovered === 1)}
                        onMouseEnter={() => setHovered(1)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img src={loanIcon} alt="Loan Icon" style={styles.imageIcon} />
                        <div style={styles.textContainer}>
                            <h3 style={styles.header}>Loan Amount</h3>
                            <p style={styles.resultText}>
                                {loanAmount ? `NPR. ${loanAmount}` : "NPR. 0"}
                            </p>
                        </div>
                    </div>
                    <div
                        style={styles.resultBox(hovered === 2)}
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img src={interestIcon} alt="Interest Icon" style={styles.imageIcon} />
                        <div style={styles.textContainer}>
                            <h3 style={styles.header}>Interest Rate</h3>
                            <p style={styles.resultText}>
                                {interestRate ? `${interestRate}%` : "0%"}
                            </p>
                        </div>
                    </div>
                    <div
                        style={styles.resultBox(hovered === 3)}
                        onMouseEnter={() => setHovered(3)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img
                            src={totalAmountIcon}
                            alt="Total Amount Icon"
                            style={styles.imageIcon}
                        />
                        <div style={styles.textContainer}>
                            <h3 style={styles.header}>Total EMI</h3>
                            <p style={styles.resultText}>
                                {emi ? `NPR. ${emi}` : "NPR. 0"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EMICalculator;
