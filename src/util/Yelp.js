import React from 'react';
import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = "QzKq3Wne0xKUz1AHPjk4hFda3hNeZ210GVfA07zOvnOkBNe6MIYrJqN51tK5Prn3e8w8EcgJurCkPGEDRIFELha91uUd55KY9fyWGbpTfYEKx3CxLj4OHEZH3pL2XXYx";

let Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers:{authorization:`Bearer ${apiKey}`}})
        .then(response => {
            return response.json()})
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                console.log(jsonResponse);
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
}
export default Yelp;