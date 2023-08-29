import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          greeting: 'Hello, {{name}}!',
          roleInfo: 'You have selected the role: {{role}}',
          male: 'male',
          female: 'female',
          gender: 'Your gender - ',
          other: 'Other',
          sub: 'Thanks for your subscribe',
          longText: `
            In today's tech-driven world, innovations unfold rapidly, reshaping how we live, work, and connect. From AI's ascent to e-commerce's expansion, change is constant. Connectivity bridges cultures, yet concerns over privacy and ethics persist. Striking a balance between progress and responsibility is our compass as we navigate this dynamic landscape.
          `,
        },
      },
      uk: {
        translation: {
          greeting: 'Привіт, {{name}}!',
          roleInfo: 'Ви вибрали роль: {{role}}',
          male: 'чоловіча',
          female: 'жіноча',
          gender: 'Ваша стать - ',
          other: 'Інша',
          sub: 'Дякуємо за підписку',
          longText: `
            У сучасному світі технологій, інновації з'являються швидко, перетворюючи життя, роботу та спілкування. Від взлету ШШІ до зростання електронної комерції, зміни - це постійне. Зв'язок об'єднує культури, але стурбованість приватністю та етикою залишаються. Знаходження балансу між прогресом та відповідальністю - це наш компас, як ми навігуємо цим динамічним пейзажем.
          `,
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
