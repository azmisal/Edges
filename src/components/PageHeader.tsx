import { Card } from "@/components/ui/card";
import SWCircles from "../../assets/SWCircles.png";
import NECircles from "../../assets/NECircles.png";

interface HeaderProps{
    title: string;
}

const PageHeader: React.FC<HeaderProps> = ({title}) => {
    return (
        <section className=" px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Card className=" border-[#A6A6A6] flex flex-col rounded-3xl overflow-hidden">
                    <div className="flex items-start justify-end">
                        <img src={NECircles} alt="" />

                    </div>
                    <div className=" flex items-center justify-center">
                        <h1
                            className="text-4xl lg:text-5xl font-semibold leading-tight lg:mb-4"
                            style={{
                                background: "linear-gradient(135deg, #3399FF, #0073E6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {title}
                        </h1>

                    </div>
                    <div className=" flex items-end justify-start">
                        <img src={SWCircles} alt="" />


                    </div>
                </Card>
            </div>
        </section>
    )
}
export default PageHeader;