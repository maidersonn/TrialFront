import { useState, useEffect } from "react";
import { getAllNonRejectedNominations } from "../../services"
import "./nominations.css";

const Nominations = () => {
    const [nonRejectedNomination, setNonRejectedNominations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const results = await getAllNonRejectedNominations();
            setNonRejectedNominations(results.data);
        };
        fetchData();
    }, []);

    return (

        <section className="nominations_page">
            <h1 className="nominations_page_title">This is the list of non rejected nominations.</h1>
            <table className="table">
                <colgroup>
                    <col className="email_column"></col>
                    <col className="description_column"></col>
                    <col className="talent_column"></col>
                    <col className="involvement_column"></col>
                    <col className="status_column"></col>
                    <col className="date_column"></col>


                </colgroup>
                <thead className="table_headings">
                    <tr className="table_headings_row">
                        <th>Email</th>
                        <th>Description</th>
                        <th>Talent</th>
                        <th>Involvement</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody >
                    {nonRejectedNomination.map(({ email, description, score, status, dateReferred }, index) => {
                        return (

                            <tr className="table_body_row" key={index}>
                                <td>{email}</td>
                                <td>{description}</td>
                                <td>{score.talent}</td>
                                <td>{score.involvement}</td>
                                <td>{status}</td>
                                <td>{formatDate(dateReferred)}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

        </section>
    )
};

const formatDate = (string) => string.slice(0, 10);

export default Nominations;
