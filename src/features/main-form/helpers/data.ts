import { Option } from '@/app/shared/types/option';

export const roles: Option[] = [
  { value: 'editor', label: 'Editor'},
  { value: 'viewer', label: 'Viewer'},
  { value: 'publisher', label: 'Publisher'},
  { value: 'commentor', label: 'Commenter'},
  { value: 'tester', label: 'Tester'},
];

export const genders: Option[] = [
  { value: 'male', label: 'Male'}, 
  { value: 'female', label: 'Female'}, 
  { value: 'other', label: 'Other'}, 
]
