import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Collapsible } from '../ui/Collapsible';

export function ProjectsWorkedSection() {
  const { control } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'projectsWorked',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    if (!result.destination) { return; }
    move(result.source.index, result.destination.index);
  };

  const title = (
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects I Worked On</h3>
      <Tooltip
        content="List of significant projects you've worked on"
        importance="Demonstrates your practical experience and project diversity"
        tips="Include project names and brief descriptions that showcase your skills"
      />
    </div>
  );

  return (
    <Collapsible title={title}>
      <div className="space-y-4">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="projects-worked-list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {fields.map((field, index) => (
                  <Draggable
                    key={field.id}
                    draggableId={field.id}
                    index={index}
                  >
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
                            {...control.register(`projectsWorked.${index}`)}
                            placeholder="Project description"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
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

        <Button
          type="button"
          variant="outline"
          onClick={() => append('')}
          className="w-full gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
    </Collapsible>
  );
}