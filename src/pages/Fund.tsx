
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, MapPin, Users, Leaf, Zap, Droplets } from 'lucide-react';

const Fund = () => {
  const sectors = [
    { name: 'Renewable Energy', icon: Zap },
    { name: 'Water Technology', icon: Droplets },
    { name: 'Agri-Tech', icon: Leaf },
    { name: 'Green Infrastructure', icon: MapPin },
    { name: 'Circular Economy', icon: Users }
  ];

  const fundHighlights = [
    {
      title: '$40M Fund Size',
      description: 'Targeting seed and early-stage climate tech startups across North and West Africa',
      icon: DollarSign
    },
    {
      title: 'Regional Focus',
      description: 'Focused on North and West Africa markets with deep local expertise',
      icon: MapPin
    },
    {
      title: 'Beyond Capital',
      description: 'Venture building, expert guidance, and access to our global network',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 via-blue-50 to-primary/5 py-20">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Button variant="outline" size="sm" className="mb-6" asChild>
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fueling Climate-Tech Innovation
              <span className="block">Across Africa</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              A $40M Impact-Driven Fund Backing the Next Generation of Climate-Tech Startups
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The Betawaves Fund supports bold founders tackling climate challenges in North and West Africa. 
              We invest early and help startups scale through funding, mentorship, and global exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Fund Highlights */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fund Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Strategic investment focused on maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                    <CardDescription className="text-base">
                      {highlight.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investment Focus
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Investment Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>$40M fund targeting seed and early-stage climate tech startups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Focus on North and West Africa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Support beyond capital: venture building, expert guidance, and global network</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Target Sectors</h3>
                <div className="grid grid-cols-1 gap-3">
                  {sectors.map((sector, index) => {
                    const IconComponent = sector.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span>{sector.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-primary to-cyan-500 text-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Climate Tech?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join us in building the future of climate technology across Africa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-xl mb-2">For Startups</CardTitle>
                <CardDescription className="text-white/80">
                  Apply for funding and join our ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-xl mb-2">For Investors</CardTitle>
                <CardDescription className="text-white/80">
                  Partner with us to drive climate impact
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link to="/contact">Invest With Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fund;
