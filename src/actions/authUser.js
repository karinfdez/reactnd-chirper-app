export const SEND_AUTH_USER = 'SEND_AUTH_USER';

export default function setAuthUser(authUser) {
    type: SEND_AUTH_USER,
    authUser
}