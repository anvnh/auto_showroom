
import {Navbar, Hero, Product, Product2 ,Banner, Footer} from './_homepage'
const RootLayout = () => {
    return (
        <section className="w-full">
            <div className="w-full overflow-hidden bg-primary">
                <div className="flex items-start justify-center">
                    <div className="w-full">
                        <Navbar />
                    </div>
                </div>
                <div className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Hero />
                    </div>
                </div>
                <div className="flex items-start justify-center px-6 bg-primary sm:px-16">
                    <div className="w-full">
                        <Product />
                    </div>
                </div>
                <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
                    <div className="w-full">
                        <Product2 />
                    </div>
                </div>         
                <div className="flex items-start justify-center bg-primary ">
                    <div className="w-full">
                        <Banner />
                    </div>
                </div>   
                <div className="flex items-start justify-center bg-primary">
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default RootLayout
