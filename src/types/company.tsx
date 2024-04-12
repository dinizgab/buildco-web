import Rating from "./rating"

type Company = {
    id: string,
    name: string,
    email: string,
    phone: string,
    ratings: Rating[], 
    createdAt: string
}

export default Company
