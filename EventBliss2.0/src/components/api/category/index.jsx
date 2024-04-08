import axios from 'axios'

//----------CATEGORIES----------//

export const categoryApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/categories/',
});

/**
 * this function get all the categories
 * @param events the list of events
 * @returns the different types of categories
 */
export function Categories(events){
    const event_categories = events.map((event) => event.category_names)
    return event_categories
}