import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Plus as PlusIcon } from 'lucide-react';
import { RoleFields } from './RoleFields';

interface RolesSectionProps {
  experienceIndex: number;
}

export function RolesSection({ experienceIndex }: RolesSectionProps) {
  const { control } = useFormContext();

  const {
    fields: roles,
    append: appendRole,
    remove: removeRole,
  } = useFieldArray({
    control,
    name: `experiences.${experienceIndex}.roles` as const,
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-semibold text-gray-900">Roles</h4>
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            appendRole({
              title: '',
              startDate: '',
              endDate: '',
              current: false,
              description: '',
              achievements: [''],
            })
          }
          className="gap-2"
        >
          <PlusIcon className="h-4 w-4" />
          Add Role
        </Button>
      </div>

      {roles.map((field, roleIndex) => (
        <RoleFields
          key={field.id}
          experienceIndex={experienceIndex}
          roleIndex={roleIndex}
          onRemove={roleIndex > 0 ? () => removeRole(roleIndex) : undefined}
        />
      ))}
    </div>
  );
}
