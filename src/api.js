import axios from "axios";

function findSecurityBy({isin}) {
    return axios(
        {url:"http://159.65.175.171:1300/api/find_security_by_isin/",
        method: "post",
        data:{isin},        
        }
    )
}

export {findSecurityBy}
