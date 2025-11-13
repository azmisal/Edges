import PageHeader from "@/components/PageHeader";
import {
    BarChart3,
    Users,
    UserCog,
    CheckCircle2,
    Code2,
    TrendingUp,
    Headphones,
    Sparkles,
    Shield,
    Zap
} from "lucide-react";

const ServicesPage = () => {
    const services = [
        {
            title: "ERP Solutions",
            subtitle: "Enterprise Resource Planning",
            description: "Streamline your business operations with our comprehensive ERP solutions. Integrate all your core business processes into a unified system.",
            features: [
                "Financial Management & Accounting",
                "Inventory & Supply Chain Management",
                "Production Planning & Manufacturing",
                "Sales & Distribution Management",
                "Real-time Business Intelligence & Analytics",
                "Multi-location & Multi-currency Support"
            ],
            icon: BarChart3,
            gradient: "from-blue-500/10 to-cyan-500/10",
            iconColor: "text-blue-600 dark:text-blue-400"
        },
        {
            title: "CRM Software",
            subtitle: "Customer Relationship Management",
            description: "Build stronger customer relationships and drive sales growth with our intelligent CRM platform designed for modern businesses.",
            features: [
                "Contact & Lead Management",
                "Sales Pipeline & Opportunity Tracking",
                "Marketing Automation & Campaigns",
                "Customer Service & Support Ticketing",
                "Analytics & Reporting Dashboard",
                "Mobile Access & Cloud Integration"
            ],
            icon: Users,
            gradient: "from-purple-500/10 to-pink-500/10",
            iconColor: "text-purple-600 dark:text-purple-400"
        },
        {
            title: "HRMS Platform",
            subtitle: "Human Resource Management System",
            description: "Empower your HR team with our comprehensive HRMS solution that automates and simplifies workforce management.",
            features: [
                "Employee Database & Self-Service Portal",
                "Attendance & Leave Management",
                "Payroll Processing & Tax Compliance",
                "Performance Management & Appraisals",
                "Recruitment & Onboarding",
                "Training & Development Tracking"
            ],
            icon: UserCog,
            gradient: "from-orange-500/10 to-red-500/10",
            iconColor: "text-orange-600 dark:text-orange-400"
        }
    ];

    const whyChooseUs = [
        {
            icon: Code2,
            title: "Custom Development",
            description: "Tailored solutions designed specifically for your business requirements",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            bgColor: "bg-emerald-500/10"
        },
        {
            icon: TrendingUp,
            title: "Scalable Architecture",
            description: "Built to grow with your business, from startups to enterprises",
            iconColor: "text-violet-600 dark:text-violet-400",
            bgColor: "bg-violet-500/10"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Dedicated support team to ensure smooth operations",
            iconColor: "text-rose-600 dark:text-rose-400",
            bgColor: "bg-rose-500/10"
        }
    ];

    return (
        <div className="min-h-screen p-4 pt-48 lg:pt-24">
            <PageHeader title="Our Services" />
            <div className="container mx-auto py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Enterprise Solutions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Transform Your Business
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We specialize in developing enterprise-grade software solutions tailored to your unique needs.
                            Our cutting-edge ERP, CRM, and HRMS solutions empower businesses to reach new heights.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid gap-8 lg:gap-10">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group relative p-8 lg:p-10 border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${service.gradient} backdrop-blur-sm overflow-hidden`}
                                >
                                    {/* Background Decoration */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />

                                    {/* Header */}
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className={`p-4 rounded-xl bg-card/50 backdrop-blur-sm border ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Shield className="w-5 h-5 text-primary" />
                                            <h4 className="font-semibold text-lg">Key Features</h4>
                                        </div>
                                        <ul className="grid gap-3 md:grid-cols-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 group/item">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="mt-16 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-medium">Our Advantages</span>
                            </div>
                            <h3 className="text-3xl font-bold">Why Choose Us?</h3>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            {whyChooseUs.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group text-center p-6 rounded-xl hover:bg-card/50 transition-all duration-300 hover:shadow-md"
                                    >
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className={`w-8 h-8 ${item.iconColor}`} strokeWidth={1.5} />
                                        </div>
                                        <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
