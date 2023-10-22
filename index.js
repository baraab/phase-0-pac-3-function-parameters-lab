function introduction(name) {
    return (`Hi, my name is ${name}.`);
}
const result = introduction('Aki');
console.log(result)

function  introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
   
}
const language= introductionWithLanguage('Aki','Ember.js')
console.log(language);

function introductionWithLanguageOptional(name,language=`JavaScript`){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
const Olanguage= introductionWithLanguageOptional("Gracie")
console.log(Olanguage);

const result3= introductionWithLanguageOptional('Gracie', 'Python')
console.log(result3)