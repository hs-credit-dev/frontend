import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;
const endPoint = `${REACT_APP_SERVER_URL}/address`



class AddressModel {

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
    static create = (address) => {
        let request = axios.post(endPoint, { address })
        return request
    }
    static show = (address) => {
        let request = axios.show(`${endPoint}/${address._id}`)
        return request
    }
    static delete = (id) => {
        let request = axios.delete(`${endPoint}/${id}`)
        return request
    }
    static update = async (id, address) => {
        console.log('FIRE UPDATE ROUTE ', address)
        let response = await axios.put(`${endPoint}/${id}`, {
            body: {
                address
            }
        })
        console.log(response)
        return response
    }
}

export default AddressModel