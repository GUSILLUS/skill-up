import Resources from './resources';

declare module '18next' {
  type CustomTypeOptions = {
    defaultNS: 'translate';
    resources: Resources;
  };
}
