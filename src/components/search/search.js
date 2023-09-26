import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, Geo_Options } from "../../api";
import "../search/search.css"
export const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOption = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            Geo_Options
        )
            .then((res) => res.json())
            .then((res) => {
                return {
                    options: res.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch((err) => console.log(err));

    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={800}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOption}
            className="city-search-bar"
        />
    )
}

