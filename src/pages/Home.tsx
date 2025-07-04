
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, Users, BookOpen, Home as HomeIcon, Bot, Search, Target, DollarSign, Globe, Zap } from 'lucide-react';
import { CMSService, Service, CaseStudy, Product } from '@/data/cmsData';
import TeamMembers from '@/components/TeamMembers';
import RunningText from '@/components/RunningText';
import Collaborators from '@/components/Collaborators';

import WelcomePopup from '@/components/WelcomePopup';

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [showPopup, setShowPopup] = useState(false);


  const [styleSettings, setStyleSettings] = useState({
    heroImage: '/lovable-uploads/1d16839f-1293-4868-96a6-d3a7e8489861.jpg',
    runningTextCompanies: [
      'TechStars', 'Y Combinator', 'Sequoia Capital', 'Andreessen Horowitz', 
      'Google Ventures', 'Microsoft Ventures', 'Amazon Web Services', 'Salesforce Ventures'
    ],
    collaborators: [
      'Microsoft', 'Google Cloud', 'AWS', 'Salesforce', 'Oracle', 'IBM'
    ]
  });

  useEffect(() => {
    // Load style settings from localStorage
    const savedSettings = localStorage.getItem('styleSettings');
    if (savedSettings) {
      setStyleSettings(JSON.parse(savedSettings));
    }

    const fetchData = async () => {
      try {
        const [servicesData, caseStudiesData, productsData,popupData] = await Promise.all([
          CMSService.getServices(),
          CMSService.getCaseStudies(),
          CMSService.getProducts(),
          CMSService.getPopup(),
        ]);
        setServices(servicesData.slice(0, 3)); // Featured services
        setCaseStudies(caseStudiesData.slice(0, 2)); // Featured case studies
        setProducts(productsData.slice(0, 3));

         if (popupData?.isActive) {
        setShowPopup(true); // ✅ show popup if active
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getIcon = (iconName: string) => {
    const icons = {
      'home': HomeIcon,
      'arrow-up': ArrowUp,
      'book': BookOpen,
      'users': Users
    };
    return icons[iconName as keyof typeof icons] || HomeIcon;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
    <WelcomePopup /> 
   
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-blue-50 to-primary/5 py-20">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 md:text-4xl">
                Empowering Tomorrow's
                <span className="gradient-text block">Tech in Emerging</span>
                Markets
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Betawaves empowers bold founders and institutions in emerging markets with the tools, knowledge, and capital to build impactful tech-driven ventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">250+</div>
                  <div className="text-sm text-gray-600">Startups Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Innovation Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-gray-600">Startups from scratch</div>
                </div>
              </div>
            </div>
            
           <div className="relative group">
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
    <img 
      src={styleSettings.heroImage}
      alt="Startup collaboration"
      className="w-full h-72 object-cover"
    />
    <div className="p-6 bg-white">
      <h3 className="font-semibold text-gray-900 text-lg">Innovation in Action</h3>
      <p className="text-sm text-gray-600 mt-2">Where ideas meet execution</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Running Text Section */}
      <RunningText companies={styleSettings.runningTextCompanies} />

    

      {/* Mission Highlights */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enabling organisations through skills and innovation programs, and investing in tech startups across frontier and emerging markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nurture Ideas</h3>
              <p className="text-gray-600">
                We provide the perfect environment for your ideas to grow, with expert guidance and resources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accelerate Growth</h3>
              <p className="text-gray-600">
                Fast-track your startup's development with our proven methodologies and industry connections.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Build Community</h3>
              <p className="text-gray-600">
                Connect with fellow entrepreneurs, mentors, and investors in our thriving startup ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Support You
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to address every aspect of startup development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => {
            const IconComponent = getIcon(service.icon);
            return <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>)}
                    </ul>
                    <div className="space-y-2 text-sm">
                      <div><strong>Duration:</strong> {service.duration}</div>
                      <div><strong>For:</strong> {service.eligibility}</div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-300">
              Innovative tools and platforms designed to empower your startup journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {products.map(product => (
  <Card key={product.id} className="h-full hover:shadow-lg transition-shadow bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Bot className="h-6 w-6 text-primary" /> {/* You can dynamically map icon if needed */}
      </div>
      <CardTitle className="text-xl text-white">{product.name}</CardTitle>
      <CardDescription className="text-base text-gray-300">{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="mb-6 text-sm text-gray-400">
        <strong>Price:</strong> {product.price}
      </div>
      <ul className="space-y-2 text-sm text-gray-300">
        {product.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
))}

          </div>

          <div className="text-center mt-12">
            <Button asChild variant="secondary">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Fund Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-primary to-cyan-500 text-white relative overflow-hidden">
        {/* Enhanced backdrop pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-40 translate-y-40"></div>
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 Q25,0 50,10 T100,10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
          </svg>
        </div>
        
        <div className="container-width section-padding relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                    <Zap className="h-4 w-4 mr-2" />
                    Impact Investment Fund
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Fueling Climate-Tech Innovation
                  <span className="block bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                    Across Africa
                  </span>
                </CardTitle>
                <CardDescription className="text-2xl text-white/95 mb-6 font-medium">
                  A $40M Impact-Driven Fund Backing the Next Generation of Climate-Tech Startups
                </CardDescription>
                <p className="text-lg text-white/85 max-w-4xl mx-auto leading-relaxed">
                  The Betawaves Fund supports bold founders tackling climate challenges in North and West Africa. 
                  We invest early and help startups scale through funding, mentorship, and global exposure.
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="text-center group">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">$40M Fund Size</h3>
                    <p className="text-white/80 text-sm leading-relaxed">Targeting seed and early-stage climate tech startups</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Regional Focus</h3>
                    <p className="text-white/80 text-sm leading-relaxed">North and West Africa markets with deep local expertise</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">Beyond Capital</h3>
                    <p className="text-white/80 text-sm leading-relaxed">Venture building, expert guidance, and global network access</p>
                  </div>
                </div>

               

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="text-center">
                    <p className="text-white/90 text-sm mb-3 font-medium">For Startups</p>
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-white/90 text-sm mb-3 font-medium">For Investors</p>
                    <Button size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-xl transition-all" asChild>
                      <Link to="/contact">Invest With Us</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Button asChild variant="secondary" size="lg" className="bg-white/20 backdrop-blur border-white/30 text-white hover:bg-white hover:text-primary font-semibold rounded-xl">
                <Link to="/fund">Learn More About Our Fund</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped startups achieve remarkable growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map(caseStudy => <Card key={caseStudy.id} className="overflow-hidden">
                <div className="aspect-video">
                  <img src={caseStudy.image} alt={caseStudy.companyName} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{caseStudy.companyName}</CardTitle>
                    <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                  </div>
                  <CardDescription>{caseStudy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-4">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <strong>{caseStudy.testimonial.author}</strong>
                    <div className="text-gray-500">{caseStudy.testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <TeamMembers />


  {/* Collaborators Section */}
      <Collaborators collaborators={styleSettings.collaborators} />


      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Startup?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful startups who have accelerated their growth with Betawaves. 
            Your journey to success starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/programs">Learn More</Link>
            </Button> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
