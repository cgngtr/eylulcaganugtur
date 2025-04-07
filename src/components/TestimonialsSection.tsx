
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
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-muted-foreground">{company}</p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-purple-light" fill="#b2a7fb" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="card-gradient rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-purple-400/20 text-purple-400 text-xl p-1 rounded">
          <MessageSquare className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-medium">Testimonials</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        What my clients say about me
      </p>
      
      <div>
        <Testimonial 
          name="Anom"
          company="Delvfox"
          text="Working with Mihai was a great experience. He is always on time and ready to help"
        />
        
        <Testimonial 
          name="Anom"
          company="NixServices"
          text="This dude is a beast. He is very good at what he is doing I would recommend him to anyone who needs a website."
        />
        
        <Testimonial 
          name="Emilio"
          company="Addimax"
          text="Great experience working with Mihai. Would hire again!"
        />
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" className="text-purple-light border-gray-700">
          <Eye className="w-4 h-4 mr-2" />
          View All Testimonials
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
