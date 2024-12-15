import React from 'react';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  scrolled: boolean;
}

export function NavLink({ href, icon, text, scrolled }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
        ${
          scrolled
            ? 'text-gray-700 hover:text-purple-600'
            : 'text-gray-800 hover:text-purple-500'
        }
        hover:bg-purple-50 group relative`}
    >
      <span className="flex items-center">
        {icon}
        <span className="ml-2">{text}</span>
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
    </a>
  );
}