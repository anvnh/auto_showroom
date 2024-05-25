import {about_1, about_2} from '@/assets/user_about'

const About = () => {
    return (
        <section className="py-12"> 
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center"> 
                <div className="pb-20">
                    <h1 className="text-4xl font-bold mb-4">Welcome, Car Enthusiasts!</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Your journey to finding your perfect car starts here. Our platform is your one-stop shop for everything automotive. Explore a vast selection of cars from every major brand, compare features and prices, and find the vehicle that matches your lifestyle and budget. 
                    </p>
                    <p className="text-lg leading-relaxed">
                        Create an account to unlock exclusive benefits: track your favorite models, receive personalized recommendations, and schedule test drives at your convenience. 
                    </p>
                </div>
                <div> 
                    <img src={about_2} alt="Car showcase" className="w-full rounded-lg shadow-md h-[400px]" />
                </div>
            </div>
        </section>
    )
}

export default About
