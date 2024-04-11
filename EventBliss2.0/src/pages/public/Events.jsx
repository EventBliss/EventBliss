import { useListEvents } from "../../components/api/event/get";
import { useListCategory } from '../../components/api/category/get';

export function Events() {
    const { data: categoryData } = useListCategory();
    const { data } = useListEvents();

    const filterEventsByCategory = (category, events) => {
        if (events) {
            return events.filter(event => event.category_names && event.category_names.includes(category) && event.package === false);
        } else {
            return [];
        }
    };

    const categoriesWithEvents = categoryData ? categoryData.filter(category => filterEventsByCategory(category.name, data).length > 0) : [];

    return (
        <div className="bg-[#E6E5E4]">
            <div className="w-full md:w-auto p-16 bg-gray-800 ">
                <h2 className="text-5xl md:text-center w-full mt-6 font-bold text-white">Get to know our <span className="text-[#FD8B11]">events</span></h2>
            </div>
            {categoriesWithEvents.map(category => (
                <div key={category.id} className="container mx-auto max-w-2xl pt-8 lg:max-w-7xl">
                    <h2 className="text-5xl w-full m-6 font-bold text-black">{category.name}</h2>
                    <div className="container mx-auto py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filterEventsByCategory(category.name, data).map(event => (
                                <div key={event.id} className="bg-white rounded-lg overflow-hidden group relative shadow-md">
                                    <img src={event.image} alt={event.name} className="w-full h-60 object-cover object-center" />
                                    <div className="absolute h-full w-full bg-black/50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                                        <h3 className="text-xl text-[#FD8B11] font-semibold mb-2">{event.name}</h3>
                                        <p className="text-[#E6E5E4] text-sm">{event.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
