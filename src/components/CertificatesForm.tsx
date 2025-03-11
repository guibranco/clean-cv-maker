import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';
import { CertificateFields } from './certificates/CertificateFields';

export interface Certificate {
  name: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expiryDate?: string;
  neverExpires: boolean;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  isPaid: boolean;
}

export interface CertificatesFormData {
  certificates: Certificate[];
}

export function CertificatesForm() {
  const { control } = useFormContext();

  const { fields: certificates, append: appendCertificate, remove: removeCertificate } = useFieldArray({
    control,
    name: 'certificates',
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certificates</h2>
        <Button
          type="button"
          onClick={() =>
            appendCertificate({
              name: '',
              issuer: '',
              issueDate: '',
              neverExpires: false,
              isPaid: true,
            })
          }
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Certificate
        </Button>
      </div>

      {certificates.map((field, index) => (
        <div key={field.id} className="space-y-6">
          <CertificateFields
            index={index}
            onRemove={index > 0 ? () => removeCertificate(index) : undefined}
          />
        </div>
      ))}
    </div>
  );
}