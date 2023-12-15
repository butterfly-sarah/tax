import  i18next  from "i18next";
import { initReactI18next } from "react-i18next";
import admin_addnewblog_ar from './admin_addnewblog_ar.json'
import admin_addnewblog_en from './admin_addnewblog_en.json'

const languageResources={
    en:{
        translation:admin_addnewblog_en
    },
    ar:{
        translation:admin_addnewblog_ar
    }
}
i18next.use(initReactI18next)
.init({
    resources:languageResources,
    lng:"en",
});
export default i18next;