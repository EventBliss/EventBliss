import { Slide } from "../../components/Slide";

export function AboutUs(){
    return(
        <div className="bg-[#E6E5E4]">

            <div>
                <Slide/>
            </div>
            <div className="sm:flex items-center  bg-[#E6E5E4]">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
                    </div>
                </div>
                <div className="sm:w-1/2">
                    <div className="text px-2.5">
                        <span className="text-[#3B3B3B] border-b-2 border-[#FD8B11] uppercase font-bold">About us</span>
                        <h2 className="my-4 font-bold text-[#3B3B3B] text-3xl sm:text-4xl">About <span className="text-[#FD8B11]">Our Company</span></h2>
                        <p className="text-[#3B3B3B] text-xl sm: mb-6">
                        At EventBliss, we are committed to creating unique and memorable experiences in the world of events. With a passion for innovation and excellence, our team strives to deliver creative and effective solutions that exceed our clients expectations.
                        </p>
                    </div>
                </div>
            </div>
            

            <div className="relative w-full">
                <img className="h-[500px] w-full object-cover rounded-md" src="https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" alt="Random image"/>
                <div className="absolute inset-0 bg-gray-900 opacity-70 shadow-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8 lg:px-16 xl:px-20">
                    <h2 className="text-white text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold leading-[2.5rem] md:leading-[2.5rem] lg:leading-[2.5rem] xl:leading-[4rem] 2xl:leading-[3rem]">
                    Our mission is to transform the way events are planned, organized and enjoyed, offering a versatile and customizable platform that adapts to the individual needs and preferences of each user. We are proud to offer a user-centric approach, where customer satisfaction and convenience are our top priority.
                    </h2>
                </div>
            </div>

            <div className="h-full  w-full bg-gray-800 pt-12 p-4">
                <div className="grid gap-14 md:grid-cols-3 md:gap-5 pb-10">
                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#FD8B11] shadow-lg shadow-[#FD8B11]">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 4a7 7 0 0 1 12 5c0 2.4-1.2 3.9-2.2 5v.1c-1 1.3-1.8 2.2-1.8 3.9 0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1c0-1.6-.8-2.6-1.8-3.9C6.2 12.8 5 11.4 5 9a7 7 0 0 1 2-5Zm2 17c0-.6.4-1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.6-13.4A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0c0-.5.2-1 .6-1.4Z"/>
                        </svg>
  
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Innovation</h1>
                    <p className="px-4 text-gray-500">Committed to constant innovation, we seek to challenge limits and offer creative and cutting-edge solutions that meet the changing needs of our users and exceed their expectations.</p>
                    </div>
                    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-[#957B9B] shadow-[#957B9B]">
                        <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                        <path d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z" fill="white"></path>
                        </svg>
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">Collaboration</h1>
                    <p className="px-4 text-gray-500">We believe in the power of collaboration and teamwork. We foster an environment where all voices are valued and respected, and where collaboration is essential to achieving our common goals.</p>
                    </div>

                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#FD8B11] shadow-lg shadow-[#FD8B11]">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.4 3c.3 0 .6.1.7.3l2.6 2.6c.4.3.4 1 0 1.4l-2.5 2.5-4-4 2.5-2.5c.2-.2.5-.3.7-.3Zm-4.6 4.2-9.5 9.5a1 1 0 0 0 0 1.4l2.6 2.6c.3.4 1 .4 1.4 0l9.5-9.5-4-4ZM6 6c.6 0 1 .4 1 1v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1 0-2h1V7c0-.6.4-1 1-1Zm9 9c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z"/>
                    <path d="M19 13h-2v2h2v-2ZM13 3h-2v2h2V3Zm-2 2H9v2h2V5ZM9 3H7v2h2V3Zm12 8h-2v2h2v-2Zm0 4h-2v2h2v-2Z"/>
                    </svg>
  
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Excellence</h1>
                    <p className="px-4 text-gray-500">We strive for excellence in everything we do. From the design and development of our platform to customer service and technical support, we seek perfection in every detail to guarantee the satisfaction and success of our users.</p>
                    </div>
                </div>
            </div>

            
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl pb-11">
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover" src="https://purabrasaevents.com/wp-content/uploads/2022/07/28_pura_brasa_events_boda_2018_09_08.jpg" alt="Winding mountain road"/>
                </div>
                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-[#FD8B11] lg:text-4xl">Fostering Creativity and Excellence</h2>
                        <p className="mt-4">
                        At EventBliss, we value creativity, collaboration, and a commitment to excellence in everything we do. Our team is made up of passionate and dedicated professionals who work tirelessly to deliver innovative, high-quality solutions that make a difference in the events industry. 
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

