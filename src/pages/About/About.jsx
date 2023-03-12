import React from 'react';
import "./About.scss";
import about from "../../assets/images/image_about-bg.png";
import leftAbout from "../../assets/images/image_about_1.png";
import rightAbout from "../../assets/images/image_ourStory_1.png";
import ourChef from "../../assets/images/image_ourChef.png";
import chef_1 from "../../assets/images/image_ourTeam_1.png";
import chef_2 from "../../assets/images/image_ourTeam_2.png";
import chef_3 from "../../assets/images/image_ourTeam_3.png";

const About = () => {
  return (
    <div className='aboutUs'>
        <div className='background'>
            <img src={about} alt="about"/>
            <h2 >About</h2>
        </div>
        <div className='ourStory'>
            <div className='story_1'>
                <div className='leftImg'>
                    <img src={leftAbout} alt="leftAbout"/>
                </div>
                <div className='rightContent'>
                    <p className='info_1'>
                        Opaleye yellowtail snapper, velvet catfish, graveldiver <br/>banded killifish, Old World rivuline catalufa eagle ray  <br/>Moorish idol. Herring smelt barbeled dragonfish, tommy  <br/>ruff.
                    </p>
                    <p className='info_2'>
                        Queen danio velvet catfish Sacramento blackfish, bullhead  <br/>shark, Colorado squawfish Russian sturgeon clown triggerfish  <br/>swamp-eel paradise fish. Hake cookie-cutter shark silver carp  <br/>hawkfish snipe eel armorhead catfish, moray eel silverside!  <br/>Bluegill toadfish, orangespine unicorn fish. Manta Ray Moorish  <br/>idol
                    </p>
                </div>
            </div>
            <div className='story_2'>
                <div className='leftContent'>
                    <p className='info_1'>
                        Opaleye yellowtail snapper, velvet catfish, graveldiver <br/>banded killifish, Old World rivuline catalufa eagle ray  <br/>Moorish idol. Herring smelt barbeled dragonfish, tommy  <br/>ruff.
                    </p>
                    <p className='info_2'>
                        Queen danio velvet catfish Sacramento blackfish, bullhead  <br/>shark, Colorado squawfish Russian sturgeon clown triggerfish  <br/>swamp-eel paradise fish. Hake cookie-cutter shark silver carp  <br/>hawkfish snipe eel armorhead catfish, moray eel silverside!  <br/>Bluegill toadfish, orangespine unicorn fish. Manta Ray Moorish  <br/>idol
                    </p>
                </div>
                <div className='rightImg'>
                    <img src={rightAbout} alt="leftAbout"/>
                </div>
            </div>
        </div>
        <div className='ourChef'>
            <div className='leftColumn'>
                <p className='info_1'>TASTY AND CRUNCHY</p>
                <p className='info_2'>Our Chef</p>
                <p className='info_3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor <br/>consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
                <p className='btn_read'>VIEW OUR ALL MANU</p>
            </div>
            <div className='rightColumn'>
                <img src={ourChef} alt="ourChef"/>
            </div>
        </div>
        <div className='special_service'>
            <div className='title'>
                <p className='main_title'>
                    SPECIAL SERVICE
                </p>
                <p className='sub_title'>
                    What Special services we are offering now
                </p>
            </div>
            <div className='info_services'>
                <div className='left_column'>
                    <p className='main_title'>Birthday Party</p>
                    <p className='sub_title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='right_column'>
                    <p className='main_title'>Wedding Party</p>
                    <p className='sub_title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
        <div className='ourTeam'>
            <div className='title'>
                <p className='main_title'>
                    OUR TEAM
                </p>
                <p className='sub_title'>
                    The Hardworking Team behind the restaurant
                </p>
            </div>
            <div className='chef'>
                <div className='info_chef'>
                    <img src={chef_1} alt="chef_1"/>
                    <p className='chef_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sit amet</p>
                </div>
                <div className='info_chef'>
                    <img src={chef_2} alt="chef_2"/>
                    <p className='chef_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sit amet</p>
                </div>
                <div className='info_chef'>
                    <img src={chef_3} alt="chef_3"/>
                    <p className='chef_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sit amet</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
