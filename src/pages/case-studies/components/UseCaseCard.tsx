import { ArrowRight, type LucideIcon } from "lucide-react";

interface UseCaseBenefit {
  metric: string;
  label: string;
}

interface UseCaseCardProps {
  category: string;
  icon: LucideIcon;
  color: string;
  description: string;
  useCases: string[];
  benefits: UseCaseBenefit[];
  image: string;
  onClick: () => void;
}

export default function UseCaseCard({
  category,
  icon: Icon,
  color,
  description,
  useCases,
  benefits,
  image,
  onClick
}: UseCaseCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      {/* Image Header */}
      <div className="relative h-44 overflow-hidden">
        <img 
          src={image} 
          alt={category}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Icon Badge */}
        <div className={`absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Category Name */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{category}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Use Cases Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {useCases.slice(0, 3).map((useCase, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {useCase}
              </span>
            ))}
            {useCases.length > 3 && (
              <span className="px-2.5 py-1 bg-teal-50 text-teal-600 text-xs rounded-full">
                +{useCases.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-teal-600">{benefit.metric}</div>
              <div className="text-xs text-gray-500 truncate">{benefit.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
            View Details
          </span>
          <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
