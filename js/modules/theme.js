const toggle = document.getElementById( 'theme-toggle' );
const icon = document.getElementById( 'theme-icon' );


toggle.addEventListener( 'click', () => {
	const isLight = document.documentElement.classList.toggle( 'light' );
    icon.textContent = isLight ? '☽' : '☀';
	localStorage.setItem( 'theme', isLight ? 'light' : 'dark' );
} );


if( localStorage.getItem( 'theme' ) === 'light' ) {
  	document.documentElement.classList.add( 'light' );
  	icon.textContent = '☽';
}
