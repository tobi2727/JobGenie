import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://hiredrive.de/" className="hover:underline">Hiredrive</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li style={{ marginRight: '15px' }}>
            <a href="www.hiredrive.de/impressum" className="hover:underline me-4 md:me-6">Impressum</a>
        </li>
        <li style={{ marginRight: '15px' }}>
            <a href="#" className="hover:underline me-4 md:me-6">Datenschutzerklärung</a>
        </li>
        <li style={{ marginRight: '15px' }}>
            <a href="#" className="hover:underline me-4 md:me-6">Cookie-Richtlinie</a>
        </li>
        <li>
            <a href="mailto:hallo@hiredrive.de" className="hover:underline">Kontakt</a>
        </li>
    </ul>
    </div>
    </footer>
  );
}
