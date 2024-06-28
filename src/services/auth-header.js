export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.success) {
        return { Authorization: 'Bearer ' + user.success };
    } else {
        return {};
    }
}