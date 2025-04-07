import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Collapsible } from '../ui/Collapsible';
import { calculateYearsOfExperience } from '@/lib/utils';

export interface ExperienceYear {
  technology: string;
  startDate: string;
}

export function ExperienceYearsSection() {
  const { control } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'experienceYears',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    if (!result.destination) { return; }
    move(result.source.index, result.destination.index);
  };

  const title = (
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience (in years)</h3>
      <Tooltip
        content="Your years of experience in different technologies or fields"
        importance="Shows your depth of expertise in specific areas"
        tips="Select when you started working with each technology"
      />
    </div>
  );

  return (
    <Collapsible title={title}>
      <div className="space-y-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => append({ technology: '', startDate: '' })}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          {t('common:experienceYears.addButton')}
        </Button>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="experience-years-list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {fields.map((field, index) => {
                  const startDate = control._formValues.experienceYears?.[index]?.startDate;
                  const yearsOfExperience = startDate ? calculateYearsOfExperience(startDate) : 0;

                  return (
                    <Draggable key={field.id} draggableId={field.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700 ${snapshot.isDragging ? 'opacity-50' : ''
                            }`}
                        >
                          <div
                            {...provided.dragHandleProps}
                            className="cursor-grab text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                          >
                            <GripVertical className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              {...control.register(`experienceYears.${index}.technology`)}
                              placeholder="Technology or Field"
                              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div className="w-40">
                            <input
                              type="month"
                              {...control.register(`experienceYears.${index}.startDate`)}
                              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>
                          {startDate && (
                            <div className="w-24 text-sm text-gray-600 dark:text-gray-300">
                              {yearsOfExperience}+ years
                            </div>
                          )}
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => remove(index)}
                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Collapsible>
  );
}