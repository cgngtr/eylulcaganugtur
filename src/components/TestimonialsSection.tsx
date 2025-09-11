import React from 'react';
import { useTranslation } from 'react-i18next';
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
    <div className={`relative ${blurred ? 'mb-0' : 'mb-2'} bg-[#0d0c0d] rounded-xl flex flex-col h-full`}>
      <div className="p-3 py-4 flex flex-col gap-2 flex-grow">
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm font-semibold text-gray-400">{company}</p>
        </div>
        <p className="text-sm font-semibold text-gray-400 flex-grow">{text}</p>
      </div>
      
      <div className="absolute right-2 top-4 flex flex-row">
        {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-[#b2a7fb]" fill="#b2a7fb" />
        ))}
      </div>
      
      {blurred && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0c0d]/60 to-[#0d0c0d] rounded-xl" />
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h2 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <MessageSquare className="size-6 text-primary" />
          {t('testimonials.title')}
        </h2>
        <p className="text-sm text-muted-foreground">{t('testimonials.description')}</p>
      </div>
      
      <div className="p-4 pt-4 -m-4">
        <div className="relative max-h-64 overflow-hidden grid grid-cols-1 gap-3 p-4 pt-0">
          <div className="absolute inset-x-0 bottom-0 z-50 h-52 w-full bg-gradient-to-b from-transparent to-[#151515]"></div>
          <div className="absolute inset-x-0 bottom-5 z-50 flex items-center justify-center">
            <a href="/testimonials">
              <Button className="bg-[#b2a7fb]/10 border-none hover:bg-[#b2a7fb]/20 rounded-xl py-2 px-4">
                <span className="text-[#b2a7fb] font-bold flex items-center">
                  <Star className="w-5 h-5 mr-2 text-[#b2a7fb]" fill="#b2a7fb" />
                  {t('testimonials.view_all')}
                </span>
              </Button>
            </a>
          </div>
          <Testimonial 
            name="Anom"
            company="Delvfox"
            text="Working with Çağan was a great experience. He is always on time and ready to help"
          />
          
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
    </div>
  );
};

export default TestimonialsSection;
