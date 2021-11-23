import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;
const endPoint = `${REACT_APP_SERVER_URL}/user`




class UserModel {

    static all = () => {
        let request = axios.get(endPoint)
        return request
    }
    static query = (data) => {
        let request = axios.post(`${endPoint}/query`, data)
        console.log(data)
        console.log(request)
        return request
    }
    static create = (user) => {
        let request = axios.post(endPoint, { user })
        return request
    }
    static show = (user) => {
        let request = axios.show(`${endPoint}/${user._id}`)
        return request
    }
    static delete = (id) => {
        let request = axios.delete(`${endPoint}/${id}`)
        return request
    }
    static update = async (id, user) => {
        console.log('FIRE UPDATE ROUTE ', user)
        let response = await axios.put(`${endPoint}/${id}`, {
            body: {
                user
            }
        })
        console.log(response)
        return response
    }
}

export default UserModel