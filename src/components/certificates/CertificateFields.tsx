import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Trash2 } from 'lucide-react';
import { FormField } from '../form/FormField';
import { FormCheckbox } from '../form/FormCheckbox';
import { Tooltip } from '../ui/Tooltip';

interface CertificateFieldsProps {
  index: number;
  onRemove?: () => void;
}

export function CertificateFields({ index, onRemove }: CertificateFieldsProps) {
  const { register, watch } = useFormContext();
  const neverExpires = watch(`certificates.${index}.neverExpires`);
  const isPaid = watch(`certificates.${index}.isPaid`);

  return (
    <div className="border dark:border-gray-700 rounded-lg p-6 space-y-6 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certificate {index + 1}</h3>
        {onRemove && (
          <Button
            type="button"
            variant="outline"
            onClick={onRemove}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormField
            name={`certificates.${index}.name`}
            label="Certificate Name"
            required
            tooltip={{
              content: "The name of your certificate or certification.",
              importance: "This is what appears on your CV and helps recruiters understand your qualifications.",
              tips: "Use the official name of the certification as it appears on your credential."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`certificates.${index}.issuer`}
            label="Issuing Organization"
            required
            tooltip={{
              content: "The organization that issued the certificate.",
              importance: "The credibility of the issuer adds weight to your certification.",
              tips: "Use the official name of the issuing organization."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`certificates.${index}.issuerLogo`}
            label="Issuer Logo URL"
            type="url"
            tooltip={{
              content: "URL to the issuing organization's logo.",
              importance: "Visual representation helps with quick recognition.",
              tips: "Use a high-quality, official logo. Ensure the URL is permanent and accessible."
            }}
          />
        </div>

        <div>
          <FormField
            name={`certificates.${index}.issueDate`}
            label="Issue Date"
            type="month"
            required
            tooltip={{
              content: "When you received this certificate.",
              importance: "Shows the currency of your certifications.",
              tips: "Use the date shown on your certificate."
            }}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Expiry Date</label>
            <Tooltip
              content="When this certificate expires, if applicable."
              importance="Some certifications require renewal, showing you maintain current knowledge."
              tips="Check if your certification needs renewal and track the expiry date."
            />
          </div>
          <div className="flex items-center space-x-4">
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const CertificateFields = ({ index }) => {
  const { register, watch, setValue } = useFormContext();
  const neverExpires = watch(`certificates.${index}.neverExpires`);

+ useEffect(() => {
+   if (neverExpires) {
+     setValue(`certificates.${index}.expiryDate`, '');
+   }
+ }, [neverExpires, setValue, index]);

  return (
    <div>
      <input
        type="month"
        {...register(`certificates.${index}.expiryDate` as const)}
        disabled={neverExpires}
        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
      />
      <label className="flex items-center space-x-2">
  <div className="flex items-center space-x-4">
    <input
      type="month"
      {...register(`certificates.${index}.expiryDate` as const)}
      disabled={neverExpires}
      className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
    />
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        {...register(`certificates.${index}.neverExpires` as const)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
      />
      <span className="text-sm text-gray-700 dark:text-gray-200">
        Never expires
      </span>
    </label>
  </div>
    </div>
  );
};

export default CertificateFields;
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`certificates.${index}.credentialId`}
            label="Credential ID"
            tooltip={{
              content: "The unique identifier for your certificate.",
              importance: "Helps verify the authenticity of your certification.",
              tips: "Copy this exactly as it appears on your certificate or credential page."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`certificates.${index}.credentialUrl`}
            label="Credential URL"
            type="url"
            tooltip={{
              content: "Link to verify your certificate online.",
              importance: "Allows quick verification of your credentials.",
              tips: "Use the permanent verification URL if provided by the issuer."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`certificates.${index}.description`}
            label="Description"
            textarea
            tooltip={{
              content: "Brief description of what this certification represents.",
              importance: "Helps explain the value and scope of your certification.",
              tips: "Focus on the skills and knowledge validated by this certification."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormCheckbox
            name={`certificates.${index}.isPaid`}
            label="This is a paid certification"
            tooltip={{
              content: "Indicate if this was a paid certification.",
              importance: "Paid certifications often carry more weight with employers.",
              tips: "Free certifications can still be valuable, but be selective about which ones to include."
            }}
          />
          {!isPaid && (
            <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
              ⚠️ Free certifications may be viewed less favorably by some employers. Consider including only the most relevant ones.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}