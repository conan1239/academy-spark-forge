
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Trophy, Target } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Cursos Inscritos',
      value: '12',
      icon: BookOpen,
      color: 'from-academy-500 to-academy-600',
      bgColor: 'bg-academy-50'
    },
    {
      title: 'Horas de Estudo',
      value: '84',
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Certificados',
      value: '5',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Metas Alcançadas',
      value: '23',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
