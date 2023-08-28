// import { Outlet } from "react-router-dom";
import {Component} from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass"


// The Way it Executes in the Browser
// 1. Constructor
// 2. Render
// 3. ComponentDidMount
class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent ComponentDidMount")
    }

    render() {
        // console.log("Parent Render")
        return (
            <>
                <h1>About Us</h1>
                <p>consectetur adipisicing elit. Consequatur quo ex iste adipisci obcaecati maiores expedita sit laborum sunt tenetur esse molestias natus facilis ipsa voluptatum voluptatibus in quia fugiat, possimus repudiandae officia. Laudantium veniam cumque ipsa hic, porro est, pariatur, quaerat similique deserunt ipsam sequi iusto tempora fugit aut quae rem? Deserunt repudiandae tenetur incidunt, fugiat blanditiis assumenda, velit tempore asperiores rerum sapiente, odit est sit architecto earum sunt exercitationem ipsum et. Dolorem, officia eveniet fugiat est ex eius culpa, voluptates cupiditate inventore doloremque totam distinctio in quo sit commodi sapiente consectetur sed vitae. Libero architecto sapiente optio quae!</p>
                {/* <Outlet /> */}
                <Profile name="Satish Kumar" desig="Web Developer"/>
                {/* <ProfileClass name="Nagender Kumar" desig="Front-End Developer" /> */}
            </>
        )
    }
}

export default About;
