import { Navbar, Hero} from './_mainpage'

const OwnerLayout = () => {
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OwnerLayout
