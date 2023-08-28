import { Gender } from "@/app/shared/types/gender";

export const roles = {
  editor: 'Editor',
  viewer: 'Viewer',
  publisher: 'Publisher',
  commentor: 'Commenter',
  tester: 'Tester',
};

export const genders: Gender[] = [
  { value: 'male', label: 'Male'},
  { value: 'female', label: 'Female'},
  { value: 'other', label: 'Other'},
]