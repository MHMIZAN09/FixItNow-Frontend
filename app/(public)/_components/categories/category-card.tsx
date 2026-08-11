
import Link from 'next/link';
import {
  ArrowRight,
  Brush,
  Droplets,
  Hammer,
  Home,
  Paintbrush,
  Sparkles,
  Zap,
} from 'lucide-react';

import type { Category } from '@/types/category';

interface CategoryCardProps {
  category: Category;
}

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  plumbing: Droplets,
  electrical: Zap,
  cleaning: Sparkles,
  painting: Paintbrush,
  carpentry: Hammer,
  gardening: Brush,
  'home repair': Home,
  'ac repair': Home,
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = categoryIcons[category.name.toLowerCase()] ?? Home;

  return (
    <Link
      href={`/categories/${category.id}`}
      className="group block"
    >
      <div className="h-full overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-40 overflow-hidden bg-muted">
          {category.image ? (
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-primary/5 text-primary">
              <Icon className="h-12 w-12" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold tracking-tight">
            {category.name}
          </h3>

          {category.description && (
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {category.description}
            </p>
          )}

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              {category.services.length}{' '}
              {category.services.length === 1 ? 'Service' : 'Services'}
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
