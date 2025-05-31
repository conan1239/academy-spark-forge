
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-academy-50 via-purple-50 to-indigo-50 py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-inter font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 animate-fade-in">
            Spark Your Learning
            <span className="block bg-gradient-to-r from-academy-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Discover a world of knowledge with our cutting-edge academy platform. 
            Learn, grow, and achieve your goals with interactive courses and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-400">
            <Button size="lg" className="bg-academy-600 hover:bg-academy-700 text-white px-8 py-3">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Browse Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in animation-delay-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-academy-100 mb-4">
                <BookOpen className="h-8 w-8 text-academy-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">500+ Courses</h3>
              <p className="text-gray-600">Comprehensive curriculum across multiple disciplines</p>
            </div>
            <div className="text-center animate-fade-in animation-delay-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals and academics</p>
            </div>
            <div className="text-center animate-fade-in animation-delay-800">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                <Trophy className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Certified Learning</h3>
              <p className="text-gray-600">Earn recognized certificates upon completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
