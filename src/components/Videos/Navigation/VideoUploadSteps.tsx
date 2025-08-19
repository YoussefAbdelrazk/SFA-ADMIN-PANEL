import { Calendar, Flame, Music, Play } from 'lucide-react';

interface Step {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

interface VideoUploadStepsProps {
  currentStep: number;
  steps: readonly Step[];
}

const STEP_ICONS = {
  basic: Calendar,
  details: Play,
  calories: Flame,
  music: Music,
} as const;

export default function VideoUploadSteps({ currentStep, steps }: VideoUploadStepsProps) {
  return (
    <div className='bg-white rounded-lg shadow-sm p-6 mb-6'>
      <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[step.id as keyof typeof STEP_ICONS];
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={step.id}
              className={`flex flex-col items-center gap-2 ${
                isActive ? 'text-purple-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  isActive
                    ? 'border-purple-600 bg-purple-50'
                    : isCompleted
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-300 bg-gray-50'
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? 'text-purple-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}
                />
              </div>
              <div className='text-center'>
                <div
                  className={`text-sm font-medium ${
                    isActive ? 'text-purple-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </div>
                <div className='text-xs text-gray-400'>{step.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
