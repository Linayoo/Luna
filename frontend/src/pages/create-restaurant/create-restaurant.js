import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Create, Flex, InputFlex, SearchBtn, Background, Btn } from "./create-restaurant.styles"
import { useState } from "react"
import { useRef } from "react"


const CreateRestaurant = () => {
    const [formData, setFormData] = useState(
        {name: "", category: "", country: "", street: "", city: "", zip: "", website: "", phone: "", email: "", hours: "", price: "", file: null }
    )

    console.log(formData)
    
    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

   
    return (
        <div>
            <Header></Header>
            
            <Background>
           <Create>
            <p>CREATE NEW RESTAURANT</p>
            </Create>
            <Flex>
            <form>
                <label>
                <p>Basic</p>
                   Name *
                <input type="text" name="name" onChange = {handleChange} required></input>
                </label>
                <label>
                Category *
                <select value={formData.category} name="category" onChange={handleChange} required>
                    <option value="">Select a value ...</option>
                    <option value="italian">Italian</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="japanese">Japanese</option>
                    <option value="vietnamese">Vietnamese</option>
                </select>
                </label>
                <label>
                Country *
                <select value={formData.country} name="country" onChange={handleChange} required>
                    <option value="">Select a value ...</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Italy</option>
                    <option value="france">France</option>
                </select>
                </label>
                <label>
                <p>Address</p>
                   Street *
                <input type="text" name="street" onChange = {handleChange} required></input>
                </label>
                <label>
                   City *
                <input type="text" name="city" onChange = {handleChange} required></input>
                </label>
                <label>
                   Zip
                <input type="text" name="zip" onChange = {handleChange}></input>
                </label>
                <label>
                <p>Contact</p>
                   Website 
                <input type="url" name="website" onChange = {handleChange}></input>
                </label>
                <label>
                   Phone *
                <input type="number" name="phone" onChange = {handleChange} required></input>
                </label>
                <label>
                   Email
                <input type="email" name="email" onChange = {handleChange}></input>
                </label>
                <label>
                <p>Details</p>
                   Opening hours *
                <input type="text" name="hours" onChange = {handleChange} required ></input>
                </label>
                <label>
                Price level 
                <select value={formData.price} name="price" onChange={handleChange}>
                    <option value="">Select a value ...</option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
                </label>
                <input id="select" type="file" name="file"  onChange = {handleChange} style={{ display: 'none' }}></input>
                <label htmlFor="select">
                   Image
                    <Btn>
                     <button>CHOOSE A FILE...</button>
                     </Btn>
                </label>
                <SearchBtn>
                <button type="submit">Search</button>
                </SearchBtn>
            </form>
            </Flex>
            </Background>
            
            <Footer></Footer>
        </div>
    )
}

export default CreateRestaurant
