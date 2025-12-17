const Contact = () => {
  return (
    <nav className="bg-[#fec375] dark:bg-gray-800 py-2 shadow border-b border-orange-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-gray-700 text-sm gap-y-2 sm:gap-y-0">
        {/* Left Side: Admission Status */}
        <div className="flex items-center">
          <span className="dark:text-gray-300 font-semibold text-center sm:text-left animate-pulse">
            📢 Admission Open for 2025–26
          </span>
        </div>

        {/* Right Side: Contact Numbers */}
        <div className="flex items-center">
          <a
            href="tel:+919829748121"
            className="text-gray-800 dark:text-gray-300 hover:text-red-700 transition-colors font-medium text-center sm:text-right"
          >
            <span className="hidden xs:inline">For Admission Call us: </span>
            <span className="underline sm:no-underline">01571-223121</span>,
            <span className="underline sm:no-underline ml-1">
              +91-9829748121
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Contact;
