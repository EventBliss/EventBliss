import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ListEvents } from "../components/Api";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Products() {
    const events = ListEvents();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        } else {
            return description;
        }
    };

    const filterEvents = (type) => {
        if (events) {
            if (type === 'All') {
            return events;
            } else {
                return events.filter((event) => event.category_names.includes(type));
            }
        } else {
            return []
        }
        
    };

    return (
        <div className="bg-[#E6E5E4]">
            <div className="w-full md:w-auto p-16 bg-gray-800 ">
                <h2 className="text-5xl md:text-center w-full mt-6  font-bold text-white">Get to know our <span className="text-[#FD8B11]">products</span></h2>
                <p className="text-white md:text-center text-2xl mt-5">
                Explore our variety of packages to find the one that best suits your tastes and requirements, whether for an elegant intimate celebration or a grand, glamorous event. We are here 
                to work with you and make your dreams come true flawlessly.
                </p>
            </div>
            <div className="container mx-auto max-w-2xl pt-8 lg:max-w-7xl">
                <Menu as="div" className="flex justify-end text-left sm:m-0 mr-3">
                    <div>
                        <Menu.Button className="inline-flex items-end w-full justify-center gap-x-1.5 rounded-md bg-white px-8 py-2 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Filter
                            <svg className="-mr-1 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute rigth-auto z-10 mt-12 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() => setSelectedCategory("All")}
                                        >
                                            All
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() => setSelectedCategory("Weddings")}
                                        >
                                            Weddings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() => setSelectedCategory("Graduation")}
                                        >
                                            Birthdays
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() => setSelectedCategory("Seminars")}
                                        >
                                            Seminars
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className="container mx-auto py-8">
                <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {filterEvents(selectedCategory).map((event, index) => (
                        <a href="" key={event.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure ><img className='h-52 w-full' src={event.photos} alt={event.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{event.name}</h2>
                                    <p>{truncateDescription(event.description, 200)}</p>
                                    {event.description.length > 200 && (
                                        <Link to={`/event/${event.id}`} className="text-blue-500 hover:underline focus:outline-none">
                                            See more
                                        </Link>
                                    )}
                                    <p>Guest Rank: {event.amount_of_people} guests</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
