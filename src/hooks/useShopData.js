const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const useShopData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://doneza.herokuapp.com/products')
            .then(res => {
                setData(res.data);
                console.log(res.data);
                setLoading(false);
            })
    }, [])
    return (
        data,
        loading
    )
}

export default useShopData;