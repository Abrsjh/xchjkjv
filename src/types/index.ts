export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  education: string[];
  experience: string;
  bio: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  content: string;
  rating: number;
  date: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  services: string[];
  head: string;
  beds: number;
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: 'award' | 'certification' | 'milestone';
}

export interface IconComponentProps {
  size?: number;
  className?: string;
}