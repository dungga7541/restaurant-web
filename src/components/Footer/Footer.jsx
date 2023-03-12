import "./Footer.scss";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
const Footer=()=>{
    return(
        <div className="footer">
            <p className="our_branch">
                Our Branch
            </p>
            <div className='total_branch'>
                <div className='branchs'>
                    <p className='title_1'>Robert Food</p>
                    <p className='title_2'>1986 Hilltop DriveBorger, TX 79007</p>
                    <div className="info_contact">
                        <p>
                            <WatchLaterIcon/>7.30 AM - 9.30 PM
                        </p>
                        <p>
                            <LocalPhoneOutlinedIcon/>+880 1630-225015
                        </p>
                    </div>
                    <p className="title_4">Click to View Google Map</p>
                </div>
                <div className='branchs'>
                    <p className='title_1'>Mark A. Reed Food</p>
                    <p className='title_2'>4877 Rose AvenueNew Orleans, LA 70112</p>
                    <div className="info_contact">
                        <p>
                            <WatchLaterIcon/>7.30 AM - 9.30 PM
                        </p>
                        <p>
                            <LocalPhoneOutlinedIcon/>+880 1630-225015
                        </p>
                    </div>
                    <p className="title_4">Click to View Google Map</p>
                </div>
                <div className='branchs'>
                    <p className='title_1'>Karie K. Hill Food</p>
                    <p className='title_2'>1509 Peaceful LaneCleveland, OH 44115</p>
                    <div className="info_contact">
                        <p>
                            <WatchLaterIcon />7.30 AM - 9.30 PM
                        </p>
                        <p>
                            <LocalPhoneOutlinedIcon/>+880 1630-225015
                        </p>
                    </div>
                    <p className="title_4">Click to View Google Map</p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2022 | Shaheen Uddin Ahmad</p>
            </div>
        </div>
    )
}
export default Footer;