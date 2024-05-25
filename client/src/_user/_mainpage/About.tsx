import {about_1, about_2, about_3} from '@/assets/user_about'

const About = () => {
    return (
        <section className="py-12"> 
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center"> 
                <div className="md:pb-20 pb-15">
                    <h1 className="text-4xl font-bold mb-4">Welcome, Car Enthusiasts!</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Your journey to finding your perfect car starts here. Our platform is your one-stop shop for everything automotive. Explore a vast selection of cars from every major brand, compare features and prices, and find the vehicle that matches your lifestyle and budget. 
                    </p>
                    <p className="text-lg leading-relaxed">
                        Create an account to unlock exclusive benefits: track your favorite models, receive personalized recommendations, and schedule test drives at your convenience. 
                    </p>
                </div>
                <div> 
                    <img src={about_2} alt="Car showcase" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
            <div className="container mx-auto hidden md:grid-cols-2 gap-8 items-center pt-10"> 
                <div> 
                    <img src={about_3} alt="Car showcase" className="w-full rounded-lg shadow-md" />
                </div>
                <div className="pb-20 pl-20">
                    <h1 className="text-4xl font-bold mb-4">But we're more than just a marketplace.</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        We're a thriving community of car lovers. Connect with fellow enthusiasts, share your knowledge and experiences, and stay up-to-date on the latest industry trends.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Join our forums to discuss your favorite models, get advice from experts, and find your tribe within the automotive world.
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid-cols-2 md:hidden gap-8 items-center pt-10"> 
                <div className="pb-10">
                    <h1 className="text-4xl font-bold mb-4">But we're more than just a marketplace.</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        We're a thriving community of car lovers. Connect with fellow enthusiasts, share your knowledge and experiences, and stay up-to-date on the latest industry trends.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Join our forums to discuss your favorite models, get advice from experts, and find your tribe within the automotive world.
                    </p>
                </div>
                <div> 
                    <img src={about_3} alt="Car showcase" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        </section>
    )
}

export default About
