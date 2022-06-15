const getAllNonRejectedNoms = ({ get }) => async () => {
    try {
        return (await get(`/nominations`)).data;
    } catch (error) {
        console.log("Cannot get products");
        return false;
    }
}

export { getAllNonRejectedNoms };