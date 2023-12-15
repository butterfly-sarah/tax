import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import admin_addnewblog_ar from './admin_addnewblog_ar.json'
import admin_addnewblog_en from './admin_addnewblog_en.json'

const resources={
    en:{
        translation:admin_addnewblog_en
    },
    ar:{
        translation:admin_addnewblog_ar
    }
}
i18n.use(initReactI18next)
.init({
    resources,
    lng:"en",
    keySeparator:false,
    interpolation:{
        escapeValue:false
    }
});
export default i18n;