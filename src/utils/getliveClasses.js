import axios from "axios";

export const getClasses = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/live_classes`, {
            Headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const classes = response.data;
        return classes;
    }
    catch (error) {
        return error;
    }
}