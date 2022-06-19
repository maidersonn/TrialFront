const getAllNonRejectedNoms = ({ get }) => async () => {
    try {
        return (await get(`/nominations`)).data;
    } catch (error) {
        console.log("Cannot get products");
        return error.response;
    }
}

const createNewNominations = ({ post }) => async (memberId, params) => {
    try {
        return (await post(`/members/${memberId}/nominations`, params));
    } catch (error) {
        console.log("Cannot create new nominatin");
        console.log(error);
        return error.response;
    }
};

export { getAllNonRejectedNoms, createNewNominations };
