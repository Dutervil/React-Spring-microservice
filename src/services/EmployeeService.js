import axios from "axios";

const EMPLOYEE_API_BASE_URL="http://localhost:1010/api/v1/employees";

class EmployeeService{

    getEmployee()
    {
     return axios.get(EMPLOYEE_API_BASE_URL)  ; 
    }

    createEmployee(empoyee){
        return axios.post(EMPLOYEE_API_BASE_URL,empoyee);
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+id);
    }

    UpdateEmployee(empoyee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+id,empoyee);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+id);
    }

     
}
export default new EmployeeService();