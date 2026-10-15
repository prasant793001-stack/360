import { brand } from '../config';

export default function Footer() {
  return (
    <footer className="bg-black text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold text-brand mb-4">
              {brand.name}
            </h3>
            <p className="text-cream/70 leading-relaxed max-w-md">
              {brand.bio}
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social placeholders */}
              <a href="#" className="glass p-3 rounded-full hover:bg-brand hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.555-2.005.958-3.127 1.183-.896-.959-2.173-1.555-3.591-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.149-1.29 2.211-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.487 4.445 3.549 4.871-.666.208-1.38.332-2.128.332-2.714 0-4.936-2.286-4.936-5.183 0-1.02.342-1.976.926-2.726-.917-.275-1.79-.788-2.512-1.454 0 0-.001-.001-.001-.001 0 0 0 0 0 0 .995 3.02 3.69 5.243 6.939 5.243 1.458 0 2.795-.523 3.836-1.397.949.857 2.19 1.397 3.55 1.397 3.179 0 5.515-2.966 4.797-6.045 1.017-.609 2.005-.873 2.828-.775z" />
                </svg>
              </a>
              <a href="#" className="glass p-3 rounded-full hover:bg-brand hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.296-7.383 3.114-7.78 7.787-.045 1.275-.063 1.675-.063 4.949 0 3.285.018 3.68.063 4.947.397 4.665 3.423 7.483 7.784 7.78 1.275.057 1.675.07 4.949.07 3.284 0 3.684-.018 4.949-.064 4.664-.396 7.483-3.418 7.78-7.78.057-1.275.07-1.675.07-4.949 0-3.284-.018-3.68-.064-4.947-.396-4.664-3.418-7.484-7.784-7.78-1.275-.057-1.675-.07-4.949-.07zm0 1.331c2.886 0 5.196.235 5.996.543.397.155.462.397.13.508-.687.217-2.617.316-4.935.316-2.319 0-4.244-.099-4.936-.313-.333-.111-.262-.353.136-.508.8.309 3.11.543 5.999.543z" />
                </svg>
              </a>
              <a href="#" className="glass p-3 rounded-full hover:bg-brand hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.756 1.918-4.756 4.912 0 2.193.817 4.045 2.948 4.933 1.34.598 2.809.966 4.394 1.185 1.584.219 3.114.22 4.699.003 1.584-.219 3.053-.587 4.394-1.185 2.131-.889 2.947-2.741 2.947-4.934 0-2.993-.859-4.645-4.756-4.912zm-1.766 13.216-.01.01-8.8.8-8.8-.8-.01-.01-1.18-1.18.01-.01 8.8-.8 8.8.8.01.01 1.18 1.18zm0-12.054c-.635 1.04-1.816 1.74-3.12 1.94-1.304.2-2.61-.1-3.65-.635-1.04-.535-1.74-1.716-1.94-3.02-.2-1.304.1-2.61.635-3.65.535-1.04 1.716-1.74 3.02-1.94 1.304-.2 2.61.1 3.65.635 1.04.535 1.74 1.716 1.94 3.02.2 1.304-.1 2.61-.635 3.65z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-cream/60 hover:text-brand transition-colors duration-300">About</a></li>
              <li><a href="#collection" className="text-cream/60 hover:text-brand transition-colors duration-300">Collection</a></li>
              <li><a href="#shop" className="text-cream/60 hover:text-brand transition-colors duration-300">Shop</a></li>
              <li><a href="#testimonials" className="text-cream/60 hover:text-brand transition-colors duration-300">Testimonials</a></li>
              <li><a href="#pricing" className="text-cream/60 hover:text-brand transition-colors duration-300">Scent Club</a></li>
              <li><a href="#faq" className="text-cream/60 hover:text-brand transition-colors duration-300">FAQ</a></li>
              <li><a href="#contact" className="text-cream/60 hover:text-brand transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-cream/60">
              <li>Al Wasl Plaza, Dubai</li>
              <li>UAE</li>
              <li>hello@maislumiere.ae</li>
              <li>+971 4 123 4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-darkGray/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cream/50 hover:text-brand transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-cream/50 hover:text-brand transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
