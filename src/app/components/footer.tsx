export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid sm:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <h3 className='mb-4 text-white'>LERKASTELLET</h3>
            <p className='text-neutral-400'>Håndlavet keramik med passion og omhu.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='mb-4 text-white'>Links</h4>
            <ul className='space-y-2'>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("gallery");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className='text-neutral-400 hover:text-white transition-colors'
                >
                  Galleri
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("info");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className='text-neutral-400 hover:text-white transition-colors'
                >
                  Om
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className='text-neutral-400 hover:text-white transition-colors'
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className='mb-4 text-white'>Følg Mig</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-neutral-400 hover:text-white transition-colors'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#' className='text-neutral-400 hover:text-white transition-colors'>
                  Pinterest
                </a>
              </li>
              <li>
                <a href='#' className='text-neutral-400 hover:text-white transition-colors'>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='pt-8 border-t border-neutral-800 text-center text-neutral-400'>
          <p>© {currentYear} Lerkastellet. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
