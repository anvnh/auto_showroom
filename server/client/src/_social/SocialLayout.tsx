import HomePage from "./pages/home/HomePage"
import Sidebar from "@/components/social/ui/common/Sidebar"
import RightPanel from "@/components/social/ui/common/RightPanel"

const SocialLayout = () => {
    return (
		<section className="w-full bg-primary flex">
			<div className="pl-20 w-[250px] bg-primary">
				<Sidebar />
			</div>
			<div className="w-full bg-primary">
				<HomePage />
			</div>
			<div className="pr-20 w-[450px] bg-primary">
				<RightPanel />
			</div>
		</section>
	);
}

export default SocialLayout