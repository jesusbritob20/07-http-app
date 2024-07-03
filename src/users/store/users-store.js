import {loadUsersByPage} from "../use-cases/load-users-by-page.js";

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);

    if (users.length === 0) return;

    state.users = users;
    state.currentPage += 1;

};
const loadPreviousPage = async () => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.users = users;
};
const onUserChanged =  () => {
    throw new Error('Not implemented');
};
const reloadPage = async () => {
    throw new Error('Not implemented');
};

export default{
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}