export const getToken = ()=>{
    return localStorage.getItem('token')
}
export const saveToken = (token)=>{
    localStorage.setItem('token',token)
}
export const destroyToken = ()=>{
    localStorage.removeItem('token')
}

export default { getToken,saveToken,destroyToken }