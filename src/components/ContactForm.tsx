import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import LogoDark from '../../assets/LogoDark.png';
import Logo from "../../assets/Logo.png"
import Circles from "../../assets/PMImage.png"
const ContactForm = () => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(
            theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }, [theme]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "US",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border border-[#A6A6A6] rounded-3xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Contact Form */}
                        <div className="p-8 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="John"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        className="rounded-2xl border border-[#A6A6A6] bg-background/50 h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Sample@mail.com"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className="rounded-2xl border border-[#A6A6A6] bg-background/50 h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                                        Phone Number
                                    </Label>
                                    <div className="flex gap-2">
                                        <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                                            <SelectTrigger className="w-20 rounded-2xl border border-[#A6A6A6] bg-background/50 h-12">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="US">US</SelectItem>
                                                <SelectItem value="IN">IN</SelectItem>
                                                <SelectItem value="AE">AE</SelectItem>
                                                <SelectItem value="UK">UK</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            id="phone"
                                            placeholder="123456789"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            className="flex-1 rounded-2xl border border-[#A6A6A6] bg-background/50 h-12"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell......."
                                        value={formData.message}
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        className="rounded-2xl border border-[#A6A6A6] bg-background/50 min-h-32 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                                >
                                    Send
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="p-8 lg:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="mb-8 flex items-center justify-center">
                                    <img src={isDark ? LogoDark : Logo} alt="Logo" />
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <p className="text-foreground">info@edgesplus.com</p>
                                    </div>

                                    {/*<div className="flex items-start gap-3">
                                        <div className="w-full flex gap-x-10">
                                            <div className="flex gap-x-2">
                                                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                <p className="text-foreground">+971 567339900</p>
                                            </div>
                                            <div className="flex gap-x-2">
                                                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                <p className="text-foreground">+91 90611 78416</p>
                                            </div>

                                        </div>

                                    </div>*/}

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <p className="text-foreground text-sm">
                                                LPOne, Level 2, Venture Arcade,
                                                <br />
                                                Mavoor Rd, Kozhikode, Kerala - India
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                            <p className="text-foreground text-sm">
                                                Shams Business Center,
                                                <br />
                                                Media City, Sharjah - UAE
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Circles (bottom-right corner) */}
                            <img
                                src={Circles}
                                alt="Decorative Circles"
                                className="absolute hidden lg:block w-128 bottom-0 right-0  pointer-events-none"
                            />
                        </div>

                    </div>
                </Card>
            </div>
        </section>
    );
};

export default ContactForm;