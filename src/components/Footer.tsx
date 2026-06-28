export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6 max-w-7xl mx-auto border-t border-stone-200 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="font-bold text-3xl tracking-tight text-stone-900 mb-6">Don's Chiropractic.</div>
          <p className="text-stone-500 max-w-xs font-medium leading-relaxed">
            Modern chiropractic care designed for active people. Get out of pain and stay there.
          </p>
        </div>
        
        <div>
          <div className="font-bold text-stone-900 mb-6">Clinic</div>
          <ul className="space-y-4 text-stone-500 font-medium">
            <li>450 West 14th St</li>
            <li>New York, NY 10014</li>
            <li>(212) 555-0192</li>
            <li className="pt-2">
              <a href="mailto:hello@donschiro.com" className="text-stone-900 hover:text-emerald-600 transition-colors font-bold border-b border-stone-900 hover:border-emerald-600 pb-0.5">hello@donschiro.com</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-stone-900 mb-6">Hours</div>
          <ul className="space-y-4 text-stone-500 font-medium">
            <li><span className="text-stone-900">Mon - Fri:</span> 7am - 7pm</li>
            <li><span className="text-stone-900">Saturday:</span> 8am - 2pm</li>
            <li><span className="text-stone-900">Sunday:</span> Closed</li>
          </ul>
        </div>
        
        <div>
          <div className="font-bold text-stone-900 mb-6">Company</div>
          <ul className="space-y-4 text-stone-500 font-medium">
            <li><a href="#" className="hover:text-stone-900 transition-colors">Our Approach</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Pricing & Insurance</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium text-stone-400 border-t border-stone-200/60 pt-8 mt-8">
        <div className="flex flex-col space-y-2">
          <div>&copy; {new Date().getFullYear()} Don's Chiropractic.</div>
          <p className="text-xs text-stone-400/80 max-w-xl">
            This website was created for portfolio demonstration purposes only and does not represent a real business or medical practice. Do not provide real personal or medical information.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 shrink-0">
          <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
