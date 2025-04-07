import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import i18next from 'i18next';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProficiencyLabel(level: number): string {
  return i18next.t(`common:cv.proficiencyLevels.${level}`);
}