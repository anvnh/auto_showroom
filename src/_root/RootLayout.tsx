import {Navbar, Hero, Product, Footer} from './_homepage'

const RootLayout = () => {
    return (
        <section className="w-full">
            <div className="bg-primary w-full overflow-hidden">
                <div className="flex justify-center items-start">
                    <div className="w-full">
                        <Navbar />
                    </div>
                </div>
                <div className="bg-primary flex justify-center items-start">
                    <div className="w-full">
                        <Hero />
                    </div>
                </div>
                <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
                    <div className="w-full">
                        <Product />
                    </div>
                </div>
                <div className="bg-primary flex justify-center items-start">
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RootLayout
