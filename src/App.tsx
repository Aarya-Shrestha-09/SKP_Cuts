
import React from 'react';
import { BackgroundGallery } from './components/BackgroundGallery';
import { Header } from './components/Header';
import { BookingForm } from './components/BookingForm';
import { RulesSection } from './components/RulesSection';
import { Footer } from './components/Footer';
import { INSTAGRAM_URL } from './constants';
import { Instagram, MapPin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans">
      
      {/* 1. The Background: Floating Side Images */}
      <BackgroundGallery />

      {/* 2. Main Content Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center">
          
          {/* Central content column */}
          <div className="w-full max-w-2xl bg-slate-50/95 backdrop-blur-sm shadow-2xl min-h-screen border-x border-slate-100">
            
            <Header />

            <div className="px-6 md:px-10 space-y-10 pb-12">
              
              {/* About Section */}
              <section className="text-center space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Welcome to <span className="font-bold text-brand-navy">SKP Cuts</span>. 
                  Delivering fresh fades, sharp lineups, and professional service since 2023. 
                  Book your appointment below and come get right.
                </p>
                
                {/* Shop Rules */}
                <RulesSection />

                {/* Social & Location Buttons */}
                <div className="flex justify-center gap-4 pt-2">
                  <a 
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    Follow on IG
                  </a>
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold shadow-sm">
                    <MapPin className="w-4 h-4" />
                    Keller, TX
                  </div>
                </div>
              </section>

              {/* The Booking Form */}
              <section id="book">
                <BookingForm />
              </section>

              <Footer />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

