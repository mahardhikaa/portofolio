import { Typography, Button } from "@material-tailwind/react";
import Navigation from "../../components/Navigation";
import sectionThreeTitle from "../../data/section-three/title.json";
import sectionFourTitle from "../../data/section-four/title.json";
import sectionFourData from "../../data/section-four/data.json";
import sectionFiveTitle from "../../data/section-five/title.json";
import sectionFiveData from "../../data/section-five/data.json";
import Footer from "../../components/Footer";
import sectionThreeData from "../../data/section-three/data.json";
import Connect from "../../components/Connect";
import AnimatedOnScroll from "../../components/AnimatedOnScroll";

const About = () => {
    return(
        <>
            <Navigation className="mb-0 shadow-none border-none"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0 pt-10 !bg-[#0A0A0A] border-b-2 border-[#484848]">
            <AnimatedOnScroll direction="left">
            <div className="flex justify-center">
                <div className="text-left w-full max-w-[600px] px-10 py-10 ">
                    <Typography className="font-bebas text-[56px] leading-[56px] text-[#FFFFFF]">
                        {sectionThreeTitle.title}
                    </Typography>
                </div>
            </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll direction="right">
            <div className="p-4 py-10 px-10">
                <Typography 
                            className="text-[#FFFFFF] text-[20px] font-bold"
                        >
                            {sectionThreeData.about}
                        </Typography>
                        <Typography 
                            className="text-[#C7C7C7] text-[18px]"
                        >
                            {sectionThreeData.description}
                        </Typography><br></br>
                        <a
                        href={sectionThreeData.linkcv}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button color="light-blue" className="rounded-full w-max"
                            onClick={() => window.open(sectionThreeData.linkcv, "_blank")}
                        >
                            Download CV
                        </Button>
                    </a>
                </div>
            
            </AnimatedOnScroll>
            </div>
                

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0 pt-10 !bg-[#0A0A0A] border-b-2 border-[#484848] pb-10">
                <AnimatedOnScroll direction="left">
                <div className="flex justify-center">
                    <div className="text-left w-full max-w-[600px] px-10 ">
                    <Typography className="font-bebas text-[56px] leading-[56px] text-[#FFFFFF]">
                        {sectionFourTitle.title}
                    </Typography>
                    </div>
                </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll direction="right">
                <div className="px-10">
                        <Typography 
                            className="text-[#C7C7C7] text-[18px]"
                        >
                            {sectionFourData.description}
                        </Typography><br></br>
                        
                        
                        <div className="flex flex-wrap gap-3 mt-4">
                            {sectionFourData.skills.map((skill, index) => (
                                <Button
                                    key={index}
                                    variant="outlined"
                                    color="blue"
                                    className="rounded-full text-sm px-4 py-2"
                                >
                                    {skill}
                                </Button>
                            ))}
                        </div>
                </div>
                </AnimatedOnScroll>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0 pt-10 !bg-[#0A0A0A] border-b-2 border-[#484848] pb-10">
                <AnimatedOnScroll direction="left">
                <div className="flex justify-center">
                    <div className="text-left w-full max-w-[600px] px-10 ">
                    <Typography className="font-bebas text-[56px] leading-[56px] text-[#FFFFFF]">
                        {sectionFiveTitle.title}
                    </Typography>
                    </div>
                </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll direction="right">
                    <div className="px-10">
                {sectionFiveData.map((item, index) => {
                    return (
                        <div className={index !== 0 ? "mt-10" : ""} key={index}>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[#C7C7C7] text-[16px]">
                                <Typography className="text-white text-[18px] font-bold">
                                    {item.experience}
                                </Typography>   
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <Typography className="text-[#03a9f4] text-[16px] font-bold">
                                    {item.company}
                            </Typography> 
                            <Typography className="text-[#C7C7C7] text-[12px] font-bold">
                                    {item.description}
                            </Typography> 
                        </div>
                        
                    )
                })}
                    </div>
                </AnimatedOnScroll>    
            </div>
            
            <Connect />
            <Footer />
                
        </>
    )
}

export default About;