import data from '../../assets/language-schemas';
const schemas = data.schemas;
let currentLang = 'ukr';
function schema(state = schemas.find(schema => schema.lang === currentLang).schema, action){
    if(action.type === 'CHANGE_SCHEMA'){
        currentLang = currentLang === 'ukr' ? 'en' : 'ukr';
        return  schemas.find(schema => schema.lang === currentLang).schema;
    }
    return state;
}

export default schema;