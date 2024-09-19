import axios from "axios";

export const getClasses = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/live_classes`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            params:{
                'page': 1,
                'per_page':10
            }
            
        });

        const classes = response.data.data.data;
        return classes;
    }
    catch (error) {
        return error;
    }
};
