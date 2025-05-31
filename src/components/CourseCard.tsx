
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, Star, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  progress?: number;
  image: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  duration,
  students,
  rating,
  progress,
  image,
  category
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className={`h-48 bg-gradient-to-br ${image} group-hover:scale-105 transition-transform duration-300`}></div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded-full text-academy-700">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-academy-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">por {instructor}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {students.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {rating}
          </div>
        </div>

        {progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progresso</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <Button className="w-full bg-academy-600 hover:bg-academy-700 text-white">
          {progress !== undefined ? 'Continuar Aprendendo' : 'Inscrever-se Agora'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
