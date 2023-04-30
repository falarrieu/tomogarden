import { useState, useEffect } from "react";
import fakeData from '../fake_data.json'

export default function useDate() {

    const [data, setData] = useState(fakeData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(data);

    const context = {
        setSearchTerm,
        setSortType
    }

    useEffect(() => {
        const filteredProducts = data.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts([...filteredProducts])
    }, [searchTerm])

    useEffect(() => {
        const sortedProducts = filteredProducts;
        if (sortType === 'price') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortType === 'availability') {
            sortedProducts.sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1));
        }
        console.log(sortedProducts)
        setFilteredProducts([...sortedProducts])
    }, [sortType])    

    return {
        data,
        searchTerm,
        filteredProducts,
        handleSearchChange: (event) => handleSearchChange(event, context),
        handleSortChange: (sort) => handleSortChange(sort, context)
    };
}

function handleSearchChange(event, context) {
    const {setSearchTerm} = context
    setSearchTerm(event.target.value);
};

function handleSortChange(sort, context) {
    const {setSortType} = context
    setSortType(sort);
};