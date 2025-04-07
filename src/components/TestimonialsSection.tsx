import React from 'react';
import { MessageSquare, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  name: string;
  company: string;
  text: string;
}

const Testimonial = ({ name, company, text }: TestimonialProps) => {
  return (
    <div className="mb-3 bg-[#0d0c0d] p-4 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-xs text-muted-foreground font-bold">{company}</p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-[#b2a7fb]" fill="#b2a7fb" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground font-bold">{text}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="card-gradient rounded-lg p-4 border border-[#1e1e1f] space-y-3">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-[#b2a7fb]">
          <MessageSquare className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold">Testimonials</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-3">
        What my clients say about me
      </p>
      
      <div>
        <Testimonial 
          name="Anom"
          company="Delvfox"
          text="Working with Çağan was a great experience. He is always on time and ready to help"
        />
        
        <Testimonial 
          name="Anom"
          company="NixServices"
          text="This dude is a beast. He is very good at what he is doing I would recommend him to anyone who needs a website."
        />
        
        <Testimonial 
          name="Emilio"
          company="Addimax"
          text="Great experience working with Çağan. Would hire again!"
        />
      </div>
      
      <div className="flex justify-center pt-1">
        <Button variant="outline" className="text-[#b2a7fb] border-gray-700 font-bold">
          <Eye className="w-4 h-4 mr-2 text-[#b2a7fb]" />
          View All Testimonials
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
