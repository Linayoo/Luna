import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Create, Flex, InputFlex, SearchBtn, Background, Btn } from "./create-restaurant.styles"
import { useState } from "react"


const CreateRestaurant = () => {

    const [restaurantImage, setRestaurantImage] = useState(null)
    const [restaurantData, setRestaurantData] = useState(
        {name: "",
        category: "",
        country: "",
        street: "",
        city: "",
        zip: "",
        website: "",
        phone: "",
        email: "",
        opening_hours: "",
        price_level: ""
        }
    )

    const localToken = localStorage.getItem("token");
    const handleChange = (event) => {
        setRestaurantData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleUpload = e => {
        const imageUrl = e.target.files;
        console.log(e.target.files)
        setRestaurantImage(imageUrl[0]);
      }
      
      const createRestaurant = e => {
        e.preventDefault();
        const formData = new FormData();       
        formData.append("name", restaurantData.name);
        //formData.append("creator", user);
        formData.append("category", restaurantData.category);
        formData.append("country", restaurantData.country);
        formData.append("street", restaurantData.street);
        formData.append("city", restaurantData.city);
        formData.append("zip", restaurantData.zip);
        formData.append("website", restaurantData.website);
        formData.append("phone", restaurantData.phone);
        formData.append("email", restaurantData.email);
        formData.append("opening_hours", restaurantData.opening_hours);
        formData.append("price_level", restaurantData.price_level);
        formData.append("image", restaurantImage);
        const url = "https://luna-tuna.propulsion-learn.ch/backend/api/restaurants/new/"
        const config = {
            method: "POST",
            headers: {           
                "Authorization": `Bearer ${localToken}`
            },
            body: formData,
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                return data.response
            })
            .catch(error => console.log(error))
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
                <select value={restaurantData.category} name="category" onChange={handleChange} required>
                    <option value="">Select a value ...</option>
                    <option value="V">Vegetarian</option>
                    <option value="I">Italian</option>
                    <option value="B">Burger</option>
                    <option value="A">Asian</option>
                </select>
                </label>
                <label>
                Country *
                <select value={restaurantData.country} name="country" onChange={handleChange} required>
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
                <input type="text" name="opening_hours" onChange = {handleChange} required ></input>
                </label>
                <label>
                Price level 
                <select value={restaurantData.price_level} name="price_level" onChange={handleChange}>
                    <option value="">Select a value ...</option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
                </label>
                {/* <input id="select" type="file" name="file"  onChange = {handleChange} style={{ display: 'none' }}></input> */}
                {/* Image */}
                <input id="select" multiple type='file' name='image' accept='image/' onChange={e => handleUpload(e)}></input>
                <label htmlFor="select">
                    {/* <Btn>
                     <button>CHOOSE A FILE...</button>
                     </Btn> */}
                </label>
                <SearchBtn>
                <button type={"submit"} onClick={createRestaurant}>Create</button>
                </SearchBtn>
            </form>
            </Flex>
            </Background>
            
            <Footer></Footer>
        </div>
    )
}

export default CreateRestaurant
