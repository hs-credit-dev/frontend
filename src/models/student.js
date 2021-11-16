import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;
const endPoint = `${REACT_APP_SERVER_URL}/student`



class StudentModel {

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
    static create = (student) => {
        let request = axios.post(endPoint, { student })
        return request
    }
    static show = (student) => {
        let request = axios.show(`${endPoint}/${student._id}`)
        return request
    }
    static delete = (id) => {
        let request = axios.delete(`${endPoint}/${id}`)
        return request
    }
    static update = async (id, student) => {
        console.log('FIRE UPDATE ROUTE ', student)
        let response = await axios.put(`${endPoint}/${id}`, {
            body: {
                student
            }
        })
        console.log(response)
        return response
    }
}

export default StudentModel