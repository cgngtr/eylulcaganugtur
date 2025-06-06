import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  name: string;
  company: string;
  text: string;
  blurred?: boolean;
}

const Testimonial = ({ name, company, text, blurred = false }: TestimonialProps) => {
  return (
    <div className={`relative ${blurred ? 'mb-0' : 'mb-3'} bg-[#0d0c0d] p-4 rounded-xl flex flex-col space-y-2`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-[#fafafa]">{name}</h3>
          <p className="text-xs text-muted-foreground font-bold">{company}</p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-[#b2a7fb]" fill="#b2a7fb" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground font-bold">{text}</p>
      
      {blurred && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0c0d]/60 to-[#0d0c0d] rounded-xl" />
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-6">
        <h2 className="text-2xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <MessageSquare className="size-7 text-primary" />
          Testimonials
        </h2>
        <p className="text-sm text-muted-foreground">What my clients say about me</p>
      </div>
      
      <div className="p-6 pt-0">
        <div className="relative overflow-hidden">
          <Testimonial 
            name="Anom"
            company="Delvfox"
            text="Working with Çağan was a great experience. He is always on time and ready to help"
          />
          
          <div className="relative max-h-24 overflow-hidden">
            <Testimonial 
              name="Anom"
              company="NixServices"
              text="This dude is a beast. He is very good at what he is doing I would recommend him to anyone who needs a website."
              blurred={true}
            />
            
            <Testimonial 
              name="Emilio"
              company="Addimax"
              text="Great experience working with Çağan. Would hire again!"
              blurred={true}
            />
          </div>
        </div>
        
        <div className="flex justify-center pt-1">
          <a href="/testimonials">
            <Button className="bg-[#b2a7fb]/10 border-none hover:bg-[#b2a7fb]/20 rounded-xl py-2 px-4">
              <span className="text-[#b2a7fb] font-bold flex items-center">
                <Star className="w-5 h-5 mr-2 text-[#b2a7fb]" fill="#b2a7fb" />
                View All Testimonials
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
