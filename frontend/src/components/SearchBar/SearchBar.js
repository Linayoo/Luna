import { SearchBarStyle } from "./SearchBar-style"
import { useState } from "react"

const SearchBar = () => {

    const [formData, SetFormData] = useState(
        {
            search: "",
            category: "",
        }
    )

    console.log(formData)

    const handleChange = (event) => {
        SetFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    return (
        <SearchBarStyle>
            <div>
            <form>
                <input
                type="text" 
                name="search" 
                placeholder="Search"
                onChange={handleChange}
                autoComplete="off"
                />
                <select value={formData.category} name="category" onChange={handleChange} required>
                    <option value="">Select a category ...</option>
                    <option value="italian">Italian</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="japanese">Japanese</option>
                    <option value="vietnamese">Vietnamese</option>
                </select>
            </form>
            </div>
        </SearchBarStyle>

    )
}


export default SearchBar