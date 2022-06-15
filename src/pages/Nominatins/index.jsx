import { useState, useEffect } from "react";
import { getAllNonRejectedNominations } from "../../services"

const Nominations = () => {
    const [nonRejectedNomination, setNonRejectedNominations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log("hola")
            const results = await getAllNonRejectedNominations();
            setNonRejectedNominations(results.data);
        };
        fetchData();
    }, []);


    return (
        <section>
            {nonRejectedNomination.map((nomination, index) => {
                return (
                    <p key={index}>{nomination.email}</p>
                )
            })}
        </section>
    )
};

export default Nominations;
