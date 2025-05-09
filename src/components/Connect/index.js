import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import AnimatedOnScroll from "../../components/AnimatedOnScroll";

const Connect = () => {
    return (
        <div id="contact" className="grid grid-cols-1 md:grid-cols-2 items-center bg-custom-black pt-10">
                <AnimatedOnScroll direction="left">
                    <div className="text-left w-full max-w-[600px] px-10 py-10">
                        <Typography className="font-bebas text-[56px] text-white">
                            Let’s connect
                        </Typography>
                        <Typography className="text-[#C7C7C7]">
                            Say hello to my email or social media
                        </Typography>
                    </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll direction="right">
                <div className="p-4 px-10">
                    <Input
                        type="text"
                        placeholder="Name"
                        className="!border !border-gray-300 bg-black text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 text-white"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                    /><br />
                    <Input
                        type="email"
                        placeholder="Email Address"
                        className="!border !border-gray-300 bg-black text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 text-white"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                    /><br />
                    <Input
                        type="text"
                        placeholder="Subject"
                        className="!border !border-gray-300 bg-black text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 text-white"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                    /><br />
                    

                    <Textarea color="white" label="Message" className="!border text-[#FFFFFF] !border-gray-300 bg-black text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 text-white"/><br></br>
                    <Button color="light-blue" className="rounded-full w-max">
                            Submit
                        </Button>
                
                </div>
                </AnimatedOnScroll>
            </div>
    )
}

export default Connect;