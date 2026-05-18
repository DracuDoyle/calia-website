import { translations } from './i18n.js';

const langToggle = document.getElementById( 'lang-toggle' );
const langIcon = document.getElementById( 'lang-icon' );



function applyTranslations( lang ) {

    const elements = document.querySelectorAll( '[data-i18n]' );

    elements.forEach( el => {
        
        const key = el.getAttribute( 'data-i18n' );
        
        if( translations[ lang ][ key ] ) {
            
            if( el.getAttribute( 'data-i18n' ) === 'about_title' ) {
                el.innerHTML = translations[ lang ][ key ] + ' <span class="highlight">Bayron Fregoso</span>';
            } else {
                el.textContent = translations[ lang ][ key ];
            }
        
        }
    } );
  
    document.documentElement.setAttribute( 'lang', lang );
    langIcon.textContent = lang === 'en' ? 'ES' : 'EN';

}



langToggle.addEventListener( 'click', () => {
    const currentLang = localStorage.getItem( 'lang' ) || 'en';
    const newLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem( 'lang', newLang );
    applyTranslations( newLang );
} );



const savedLang = localStorage.getItem( 'lang' ) || 'en';
applyTranslations( savedLang );
