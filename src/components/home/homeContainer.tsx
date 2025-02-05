import Clients from "../clients/clients";
import Landing from "../landing/landing";
import Services from "../services/services";
import Testimonials from "../testimonials/testimonials";
import OurTeam from "../ourTeam/ourTeam";
import Advantage from "../advantage/advantage";
import AsSeenOn from "../asSeenOn/asSeenOn";
import Meeting from "../meeting/meeting";

const HomeContainer = () => {
    return(
        <div className="w-full h-full flex flex-col min-h-screen ">
            <Landing/> 
            <Services/>
            <Clients/>
            <Testimonials/>
            <OurTeam/>
            <Advantage/>
            <Meeting/>
            <AsSeenOn/>
        </div>
    )
};

export default HomeContainer