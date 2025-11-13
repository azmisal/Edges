import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code, Database, Globe, Layers, Users, Zap } from "lucide-react";

const CareersPage = () => {
    const techStack = [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Layers },
        { name: "TypeScript", icon: Code },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "REST APIs", icon: Globe },
    ];

    const responsibilities = [
        "Design, develop, and maintain full-stack web applications",
        "Collaborate with cross-functional teams to define and implement new features",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and provide constructive feedback",
        "Optimize applications for maximum speed and scalability",
        "Troubleshoot and debug applications across the stack",
        "Stay up-to-date with emerging technologies and industry trends",
        "Contribute to technical architecture decisions",
    ];

    const requirements = [
        "3+ years of professional full-stack development experience",
        "Strong proficiency in JavaScript/TypeScript and modern frameworks (React, Vue, or Angular)",
        "Experience with Node.js and backend development",
        "Solid understanding of RESTful APIs and microservices architecture",
        "Proficiency with SQL and NoSQL databases",
        "Experience with version control systems (Git)",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication and teamwork abilities",
    ];

    const niceToHave = [
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Familiarity with CI/CD pipelines",
        "Experience with testing frameworks (Jest, Cypress, etc.)",
        "Understanding of Agile/Scrum methodologies",
        "Open source contributions",
    ];

    const benefits = [
        "Competitive salary and equity package",
        "Flexible working hours and remote work options",
        "Health insurance and wellness benefits",
        "Professional development opportunities",
        "Modern tech stack and tools",
        "Collaborative and inclusive work environment",
        "Team building activities and company events",
        "Opportunity to work on challenging projects",
    ];

    return (
        <div className="min-h-screen p-4 pt-48 lg:pt-24">
            <PageHeader title="Join Our Team" />

            <div className="container mx-auto py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">We're Hiring!</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We're looking for talented individuals who are passionate about creating
                            exceptional digital experiences. Join us in building the future.
                        </p>
                    </div>

                    {/* Main Job Posting */}
                    <Card className="mb-8">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <div>
                                    <CardTitle className="text-3xl mb-2">Full Stack Developer</CardTitle>
                                    <CardDescription className="text-base flex flex-wrap gap-2 items-center">
                                        <Badge variant="secondary">Full-time</Badge>
                                        <Badge variant="secondary">Remote/Hybrid</Badge>
                                        <Badge variant="secondary">Mid to Senior Level</Badge>
                                    </CardDescription>
                                </div>
                                <a href="#apply">
                                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold">
                                        Apply Now
                                    </button>
                                </a>
                            </div>
                            <p className="text-muted-foreground">
                                We're seeking a talented Full Stack Developer to join our growing team.
                                You'll work on exciting projects, collaborate with talented professionals,
                                and have the opportunity to make a significant impact on our products and services.
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-primary" />
                                    Tech Stack You'll Work With
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {techStack.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary/50 transition-colors"
                                        >
                                            <tech.icon className="w-5 h-5 text-primary" />
                                            <span className="font-medium">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Key Responsibilities
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {responsibilities.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Required Qualifications</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {requirements.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Nice to Have */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Nice to Have</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {niceToHave.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {benefits.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Application Section */}
                            <div id="apply" className="pt-6 border-t">
                                <h3 className="text-2xl font-semibold mb-4">Ready to Apply?</h3>
                                <p className="text-muted-foreground mb-6">
                                    If you're excited about this opportunity and meet the qualifications,
                                    we'd love to hear from you! Send your resume and portfolio to:
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                    <a
                                        href="mailto:careers@edges.com"
                                        className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
                                    >
                                        Email Your Application
                                    </a>
                                    <span className="text-muted-foreground">
                                        or send to: <span className="font-semibold text-foreground">careers@edges.com</span>
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* About Working With Us */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Why Join Edges?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                At Edges, we believe in creating a workplace where innovation thrives and
                                talented individuals can grow. We're committed to building cutting-edge solutions
                                while maintaining a healthy work-life balance.
                            </p>
                            <p className="text-muted-foreground">
                                Our team is collaborative, diverse, and passionate about technology. We value
                                continuous learning, open communication, and making a positive impact through
                                our work.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
