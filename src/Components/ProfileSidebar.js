import styles from "../css/style.ProfileSidebar.css";
import MyImage from "../image/onep.jpg"






function ProfileSidebar() {
    return (
        <>
            <div className="Profile-body">
                <div className="pr-body">
                    <div className="profile-img">
                        <div className="img">
                            <img src={MyImage}></img>

                        </div>
                        <div className="profile-name-body">
                            <p><b>belu_</b></p>
                            <p>@belu_alchemy</p>
                        </div>
                        <div className="follows">
                            <div className="following">
                                <p><b> 1k:</b> Following</p>
                            </div>
                            <div className="followers">
                                <p> <b> 944: </b>Followers </p>
                            </div>

                        </div>
                    </div>
                    <div className="profile-list">
                        <a href="">  {/*the a tag wey i one enter when i click */}
                            <div className="Profile-list-page">
                                <p>  <span>Profile</span> </p>
                            </div>
                        </a>


                        <a href="">
                            <div className="Profile-list-page">
                                <p>  <span>BookMark</span> </p>
                            </div>
                        </a>
                        <a href="">
                            <div className="Profile-list-page">
                                <p> <span> List</span></p>
                            </div>
                        </a>
                        <a href="">
                            <div className="Profile-list-page">
                                <p>  <span>Topic</span>  </p>
                            </div>
                        </a>





                        <hr></hr>
                        <div className="clear"></div>
                       

                    </div>
                </div>

            </div>

        </>
    )
}
export default ProfileSidebar;