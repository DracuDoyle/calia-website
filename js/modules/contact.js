const user = 'bayronfregoso2003';
const server = 'gmail';
const domain = '.com';
const email  = user + '@' + server + domain;

const emailCard = document.getElementById( 'email-card' );
const emailText = document.getElementById( 'email-text' );

emailCard.href = 'mailto:' + email;
emailText.textContent = email;



const copyBtn = document.getElementById( 'copy-btn' );

copyBtn.addEventListener( 'click', ( event ) => {    

    event.preventDefault();
    event.stopPropagation();
    
    navigator.clipboard.writeText( email ).then( () => {

        copyBtn.textContent = '✓';
        copyBtn.classList.add( 'copied' );
    
        setTimeout( () => {
            copyBtn.textContent = '⧉';
            copyBtn.classList.remove( 'copied' );
        }, 2000 );
  
    } );

} );
