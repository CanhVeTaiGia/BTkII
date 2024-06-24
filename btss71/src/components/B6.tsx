import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../store/reducers/languageReducer';
import { RootType } from '../interface/interface';

// Define the structure of the content object
interface Content {
  welcome: string;
  dashboard: string;
}

type Language = 'en' | 'vi';

interface ContentMapping {
  en: Content;
  vi: Content;
}

export const B6: React.FC = () => {
  const language = useSelector((state: RootType) => state.languageReducer.language) as Language;

  const content: ContentMapping = {
    en: {
      welcome: 'Welcome to our application!',
      dashboard: 'Dashboard',
    },
    vi: {
      welcome: 'Chào mừng đến với ứng dụng của chúng tôi!',
      dashboard: 'Bảng điều khiển',
    },
  };

  return (
    <div>
      <h1>{content[language].welcome}</h1>
      <nav>
        <ul>
          <li>{content[language].dashboard}</li>
        </ul>
      </nav>
    </div>
  );
};
