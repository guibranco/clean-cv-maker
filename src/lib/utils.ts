import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import i18next from 'i18next';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProficiencyLabel(level: number): string {
  return i18next.t(`common:cv.proficiencyLevels.${level}`);
}

export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return Math.floor(diffInMonths / 12);
}