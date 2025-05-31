
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DashboardStats from '@/components/DashboardStats';
import CourseCard from '@/components/CourseCard';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredCourses = [
    {
      title: "Desenvolvimento React Avançado",
      instructor: "Sarah Johnson",
      duration: "8 semanas",
      students: 2340,
      rating: 4.8,
      progress: 65,
      image: "from-blue-400 to-blue-600",
      category: "Desenvolvimento Web"
    },
    {
      title: "Fundamentos de Ciência de Dados",
      instructor: "Dr. Michael Chen",
      duration: "12 semanas",
      students: 1890,
      rating: 4.9,
      progress: 30,
      image: "from-purple-400 to-purple-600",
      category: "Ciência de Dados"
    },
    {
      title: "Princípios de UI/UX Design",
      instructor: "Emma Rodriguez",
      duration: "6 semanas",
      students: 3200,
      rating: 4.7,
      image: "from-pink-400 to-pink-600",
      category: "Design"
    },
    {
      title: "Introdução ao Machine Learning",
      instructor: "Prof. James Wilson",
      duration: "10 semanas",
      students: 1560,
      rating: 4.6,
      image: "from-green-400 to-green-600",
      category: "IA & ML"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Seu Painel de Aprendizado</h2>
          <p className="text-gray-600 mb-8">Acompanhe seu progresso e continue sua jornada de aprendizado</p>
          <DashboardStats />
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Cursos em Destaque</h2>
              <p className="text-gray-600">Descubra cursos populares e continue os que você se inscreveu</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-academy-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Elevar Suas Habilidades?</h2>
            <p className="text-xl mb-8 opacity-90">Junte-se a milhares de alunos que estão avançando em suas carreiras com nossos cursos conduzidos por especialistas</p>
            <button className="bg-white text-academy-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explorar Todos os Cursos
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
