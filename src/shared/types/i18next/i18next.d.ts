import Resources from "./resources";


declare module '18next' {
  interface CustomTypeOptions {
    defaultNS: 'translate';
    resources: Resources;
  }
}