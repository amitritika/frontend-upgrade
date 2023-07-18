import Layout1 from "../components/Layout1"
import ProfileCard from "@/components/common/ProfileCard/ProfileCard";
const Aboutus = ()=> {
    return (
        <Layout1>
            <div className="container1">
                <img src="images/Aboutus.png" className = "about-image w-full"></img>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="u-margin-auto">
                        <ProfileCard 
                        imgLink="/images/team/Slide1.PNG"
                        name="Ritika Dubey"
                        title="CEO"
                        description="A business Enthusiastic very Realistic Person. Know how to deal with people. A standing pillar for Government jobs Section. A beacon of our Vision."
                    />
                    </div>
                    <div className="u-margin-auto">
                        <ProfileCard 
                            imgLink="/images/team/Slide2.PNG"
                            name="Amit Parsai"
                            title="CTO"
                            description="Technical Expert and a Problem Solver. Know how to get things done. An idea Executioner. A pillar for Engineering Section."
                        />
                    </div>
                    <div className="u-margin-auto">
                        <ProfileCard 
                        imgLink="/images/team/Slide3.PNG"
                        name="Monika Dubey"
                        title="COO"
                        description="Voice of our idea. A quick learner and Early Adapter. Operational Expert and know how to run a system. A pillar for Creative Section."
                    />
                    </div>
                    <div className="u-margin-auto">
                        <ProfileCard 
                            imgLink="/images/team/Slide4.PNG"
                            name="Pooja Harne"
                            title="CAO"
                            description="Computer Geek. Fast Learner, very optimistic Person. Creative Idea generator, and know how to guide young students. A pillar for latest Job section."
                        />
                    </div>

                </div>
            </div>
            
        </Layout1>
    )
}

export default Aboutus;