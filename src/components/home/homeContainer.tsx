import Clients from "../clients/clients";
import Landing from "../landing/landing";
import Services from "../services/services";
import Testimonials from "../testimonials/testimonials";
import OurTeam from "../ourTeam/ourTeam";
import Advantage from "../advantage/advantage";
import AsSeenOn from "../asSeenOn/asSeenOn";
import Meeting from "../meeting/meeting";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Affiliates - Top Affiliate Marketing Platform",
  description: "Link Affiliates helps businesses create and manage high-converting affiliate marketing campaigns. Schedule a meeting today!",
};

const HomeContainer = () => {
    return(
        <main className="w-full h-full flex flex-col min-h-screen ">
            <Landing/> 
            <Services/>
            <Clients/>
            <Testimonials/>
            <OurTeam/>
            <Advantage/>
            <Meeting/>
            <AsSeenOn/>
        </main>
    )
};

export default HomeContainer