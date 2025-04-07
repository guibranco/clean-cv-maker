import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Collapsible } from '../ui/Collapsible';
import { useTranslation } from 'react-i18next';

const PROFICIENCY_LEVELS = [
  { value: 0, label: 'No Proficiency' },
  { value: 1, label: 'Elementary Proficiency' },
  { value: 2, label: 'Limited Working Proficiency' },
  { value: 3, label: 'Professional Working Proficiency' },
  { value: 4, label: 'Full Professional Proficiency' },
  { value: 5, label: 'Native / Bilingual Proficiency' },
];

export function LanguagesSection() {
  const { control } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'languages',
  });
  const { t } = useTranslation(['common']);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    move(result.source.index, result.destination.index);
  };

  const title = (
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Languages</h3>
      <Tooltip
        content="Languages you can communicate in"
        importance="Shows your ability to work in international environments and communicate with diverse teams"
        tips="Be honest about your proficiency levels and include all relevant languages"
      />
    </div>
  );

  return (
    <Collapsible title={title}>
      <div className="space-y-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => append({ language: '', proficiency: 0 })}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Language
        </Button>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="languages-list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {fields.map((field, index) => (
                  <Draggable key={field.id} draggableId={field.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700 ${
                          snapshot.isDragging ? 'opacity-50' : ''
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
                            {...control.register(`languages.${index}.language`)}
                            placeholder="Language name"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div className="flex-1">
                          <select
                            {...control.register(`languages.${index}.proficiency`, {
                              valueAsNumber: true
                            })}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            {PROFICIENCY_LEVELS.map((level) => (
                              <option key={level.value} value={level.value}>
                                {t(`common:cv.proficiencyLevels.${level.value}`)}
                              </option>
                            ))}
                          </select>
                        </div>
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
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Collapsible>
  );
}