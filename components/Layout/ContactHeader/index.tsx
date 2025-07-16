const Contact = () => {
  return (
    <nav className="bg-[#fec375] dark:bg-gray-800 py-2 shadow">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm gap-2">
        <ul className="flex space-x-4">
          <li>
            <span className="dark:text-gray-300">
              Admission Open for 2025–26
            </span>
          </li>
        </ul>
        <ul className="flex space-x-4 text-sm">
          <li>
            <a
              href="tel:+911571223121"
              className="text-gray-700 dark:text-gray-300 hover:no-underline"
            >
              For Admission Call us: 01571-223121, +91-9829748121
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
