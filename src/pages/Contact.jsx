import { arrow, linkedin } from '../assets/icons';

const email = 'mario.su282@gmail.com';
const linkedinProfile = 'linkedin.com/in/mario-su';

const contactLinks = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    icon: <span className='font-poppins text-2xl font-semibold text-blue-700'>@</span>,
  },
  {
    label: 'LinkedIn',
    value: linkedinProfile,
    href: `https://www.${linkedinProfile}`,
    icon: <img src={linkedin} alt='' className='h-6 w-6 object-contain' />,
    external: true,
  },
];

const Contact = () => {
  return (
    <section className='max-container !min-h-screen'>
      <header className='max-w-xl'>
        <h1 className='head-text'>
          Get <span className='blue-gradient_text font-semibold drop-shadow'>in touch</span>
        </h1>
        <p className='mt-3 max-w-md leading-relaxed text-slate-600 sm:text-lg'>
          Have a project in mind or an opportunity to discuss? I’d love to hear from you.
        </p>
      </header>

      <div className='mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6'>
        {contactLinks.map(({ label, value, href, icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className='group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 motion-reduce:transition-none sm:p-8'
          >
            <div className='flex items-start justify-between' aria-hidden='true'>
              <div className='block-container h-12 w-12'>
                <div className='btn-back btn-back-blue rounded-xl' />
                <div className='btn-front flex items-center justify-center rounded-xl'>
                  {icon}
                </div>
              </div>
              <img
                src={arrow}
                alt=''
                className='h-5 w-5 object-contain motion-safe:transition-transform motion-safe:group-hover:translate-x-1'
              />
            </div>
            <h2 className='mt-5 font-poppins text-xl font-semibold text-black-500'>{label}</h2>
            <p className='mt-1 break-words text-slate-600'>{value}</p>
            {external && <span className='sr-only'>(opens in a new tab)</span>}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
