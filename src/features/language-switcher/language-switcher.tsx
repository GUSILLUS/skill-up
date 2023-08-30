import { Languages } from '@/shared/types/language';
import { Button, Typography } from '@material-ui/core';
import { useSearchParams } from 'next/navigation';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import React from 'react';
import { useTranslation } from 'react-i18next';

const lngs: Languages = {
  en: { nativeName: 'English' },
  uk: { nativeName: 'Ukranian'}
}

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const userName = useSearchParams().get('username') || '';
  const role = useSearchParams().get('role') || '';
  const gender = useSearchParams().get('gender') || '';
  const subs = useSearchParams().get('subs') || '';

  return (
    <div className="flex flex-col gap-2 p-4 bg-slate-100 rounded-md w-1/2">
      <div className="flex gap-2 mb-2">
        {Object.keys(lngs).map(lng => (
          <Button
            color='primary'
            variant='contained'
            size='small' 
            key={lng} 
            fullWidth={false} 
            onClick={() => changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-3 items-center">
        {userName && (
          <Typography 
            className='bg-slate-200 rounded-md w-max p-2 shadow-md hover:shadow-lg hover:translate-y-[-5px] duration-300'
          >
            {t('greeting', { name: userName })}
            <EmojiPeopleSharpIcon color='primary' />
          </Typography>
        )}

        {role && (
          <Typography
            className='bg-slate-200 rounded-md w-max p-2 shadow-md hover:shadow-lg hover:translate-y-[-5px] duration-300'
          >
            {t('roleInfo', { role: role})} <PeopleAltSharpIcon color='primary' />
          </Typography>
        )}

        {gender && (
          <Typography
            className='bg-slate-200 rounded-md w-max p-2 shadow-md hover:shadow-lg hover:translate-y-[-5px] duration-300'
          >
            {t('gender')}
            {t(gender)} 
            <WcSharpIcon color='primary' />
          </Typography>
        )}

        {subs && (
          <Typography
          className='bg-slate-200 rounded-md w-max p-2 shadow-md hover:shadow-lg hover:translate-y-[-5px] duration-300'
          >
            {t('sub')} <Diversity1SharpIcon color='primary' />
          </Typography>
        )}

        <Typography 
          className='bg-slate-200 rounded-md w-10/12 p-2 shadow-md hover:shadow-lg hover:translate-y-[-5px] duration-300 text-center'
        >
          {t('longText')}
        </Typography>
      </div>

      
    </div>
  );
};