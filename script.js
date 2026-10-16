// 1. Mobile Navigation Toggle Logic
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = '☰';
        });
    });
}

// 2. Automatic Footer Copyright Year Updating
document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// 3. Contact Form Submission Handling
// TODO: Replace this placeholder with the official Budokomi CYDC email address before launch
const ORGANIZATION_EMAIL = 'REPLACE-WITH-OFFICIAL-EMAIL@example.com'; 
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!form.reportValidity()) return;
        
        const status = document.getElementById('formStatus');
        if (!status) return;

        // Block form processing if the placeholder email hasn't been changed yet
        if (ORGANIZATION_EMAIL.includes('REPLACE-WITH-OFFICIAL-EMAIL')) {
            status.hidden = false;
            status.textContent = 'Please configure the official organization email address in assets/script.js before sending enquiries.';
            return;
        }

        const d = new FormData(form);
        const subject = encodeURIComponent('Budokomi CYDC enquiry: ' + (d.get('topic') || ''));
        
        // Formats lines clean using standard %0A return carriage line-breaks for mailto
        const messageBody = 'Name: ' + d.get('name') + '\n' +
                            'Email: ' + d.get('email') + '\n' +
                            'Topic: ' + d.get('topic') + '\n\n' +
                            'Message:\n' + d.get('message');
                            
        const body = encodeURIComponent(messageBody);

        status.hidden = false;
        status.textContent = 'Opening your email client app. Please review and click send on your message.';
        
        window.location.href = 'mailto:' + ORGANIZATION_EMAIL + '?subject=' + subject + '&body=' + body;
    });
}
