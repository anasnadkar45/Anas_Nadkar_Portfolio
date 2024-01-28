import React from 'react';
import 'alpinejs';
import facebookLogo from './path/to/facebook.svg';
// ... other imports ...

function Skills() {
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div
              data={() => {
                return {};
              }}
              x-init={() => {
                $nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
                });
              }}
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                  <img src={facebookLogo} alt="Facebook" />
                </li>
                {/* ... other images ... */}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Skills;
