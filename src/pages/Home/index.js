import { Typography, Button, IconButton} from "@material-tailwind/react";
import Navigation from "../../components/Navigation";
import AnimatedOnScroll from "../../components/AnimatedOnScroll";
import biodata from "../../data/biodata.json";
import sectionTwoTitle from "../../data/section-two/title.json";
import sectionTwoData from "../../data/section-two/data.json";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "../../components/Footer";
import Connect from "../../components/Connect";

const Home = () => {
    const selfPhoto = require(`../../img/${biodata.selfPhoto}`);
    return (
        <>
            <Navigation className="mb-0 shadow-none border-none" />

            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-custom-black border-b-2 border-[#484848]">
                <AnimatedOnScroll direction="left">
                    <div className="text-left w-full max-w-[600px] px-10 py-10">
                        <Typography className="font-bebas text-[56px] leading-[56px] text-white">
                            HI, I AM<br />
                            {biodata.name}
                        </Typography>
                        <Typography className="text-[#C7C7C7]">
                            {biodata.description}
                        </Typography>
                        <div className="flex items-center gap-4 mt-5">
                            <a href={biodata.linkWhatsapp} target="_blank" rel="noopener noreferrer">
                                <Button color="light-blue" className="rounded-full w-max">
                                    Contact Me
                                </Button>
                            </a>
                            <a href={`mailto:${biodata.email}`} target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full w-10 h-10 bg-[#222222]">
                                <FaEnvelope className="text-white text-lg" />
                            </IconButton>
                            </a>
                            <a href={biodata.linkLinkedIn} target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full w-10 h-10 bg-[#222222]">
                                <FaLinkedin className="text-white text-lg" />
                            </IconButton>  
                            </a>
                        </div>
                    </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll direction="right">
                    <div className="p-4">
                        <img className="h-full w-80 rounded-lg object-cover mx-auto" src={selfPhoto} alt=""/>
                    </div>
                </AnimatedOnScroll>
            </div>

            {/* Section Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-custom-black pt-10">
                <AnimatedOnScroll direction="left">
                    <div className="text-left w-full max-w-[600px] px-10 ">
                        <Typography className="font-bebas text-[56px] text-white">
                            {sectionTwoTitle.title}
                        </Typography>
                        <Typography className="text-[#C7C7C7]">
                            {sectionTwoTitle.subtitle}
                        </Typography>
                    </div>
                </AnimatedOnScroll>
            </div>

            {/* Section Two Data */}
            {sectionTwoData.map((item, index) => {
                const imgSrc = require(`../../img/section_two/${item.image}`);
                return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center bg-custom-black border-b-2 border-[#484848]">
                        <AnimatedOnScroll direction="left">
                            <div className="px-10 py-5">
                                <div className="bg-[#1A1A1A] p-20 rounded-lg">
                                    <img className="h-full w-80 rounded-lg object-cover mx-auto" src={imgSrc} alt="" />
                                </div>
                            </div>
                        </AnimatedOnScroll>

                        <AnimatedOnScroll direction="right">
                            <div className="px-10 py-5">
                                <Typography className="text-white text-[32px] font-bold">
                                    {item.title}
                                </Typography>
                                <Typography className="text-[#C7C7C7] text-[18px]">
                                    {item.description}
                                </Typography>
                                <Typography className="text-[#FFFFFF] text-[18px] mt-[30px] font-bold">
                                    Project Info
                                </Typography>

                                <div className="mt-4 space-y-2">
                                    <div className="flex justify-between text-[#C7C7C7] text-[16px] border-b border-[#484848] pb-1">
                                    <span className="font-medium">Year</span>
                                    <span>{item.year}</span>
                                </div>
                                <div className="flex justify-between text-[#C7C7C7] text-[16px]">
                                    <span className="font-medium">Role</span>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                            {item.link !== "" && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-5 text-[#03a9f4] text-[16px] font-medium hover:underline"
                                >
                                    VIEW PROJECT
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7m0 0v7m0-7L10 14" />
                                </svg>
                            </a>
                        )}
                            </div>
                        </AnimatedOnScroll>
                    </div>
                );
            })}

            {/* Contact Section */}
            <Connect />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
