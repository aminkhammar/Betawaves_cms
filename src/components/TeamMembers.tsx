
import { Card, CardContent } from '@/components/ui/card';
import { CMSService,TeamMember } from '@/data/cmsData';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    bio: 'Former VP at Google Ventures with 15+ years in startup ecosystem. Led 50+ successful exits.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    linkedIn: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CTO & Co-founder',
    bio: 'Tech veteran from Meta and Uber. Expert in scaling tech teams and building innovative products.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedIn: 'https://linkedin.com/in/michaelchen'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Head of Programs',
    bio: 'MBA from Stanford. Previously at Y Combinator, managed over 200 startup accelerations.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedIn: 'https://linkedin.com/in/emilyrodriguez'
  },
  {
    id: '4',
    name: 'David Park',
    position: 'Investment Director',
    bio: 'Former Goldman Sachs analyst. Specialized in early-stage funding and venture capital.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedIn: 'https://linkedin.com/in/davidpark'
  }
];

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null); // 👈 Define ref here
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await CMSService.getTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeam();
  }, []);
 // 👇 Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        if (el.scrollLeft >= maxScrollLeft) {
          el.scrollTo({ left: 0, behavior: 'smooth' }); // loop back to start
        } else {
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 5000);
     return () => clearInterval(interval);
  }, []);


  return (
    <section className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of entrepreneurs, investors, and industry experts are dedicated to your startup's success
          </p>
        </div>

       <div
  className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth  items-stretch"
  ref={scrollRef}
>

          {teamMembers.map((member) => (
           <Card
  key={member.id}
  className="w-72 flex-shrink-0 text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {member.position}
                </p>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
                
                {member.linkedIn && (
                  <div className="mt-4">
                    <a 
                      href={member.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Connect on LinkedIn →
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
