const SocialIcons = ({ profiles }) => {
  return (
    <ul className="list-none md:text-right text-center mt-6 md:mt-0">
      {profiles.map(({ url, name, icon }) => (
        <li
          className="w-6 h-6 opacity-70 hover:opacity-100 transition inline"
          key={name}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
          >
            <img src={icon} alt={name} className="w-6 h-6" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export { SocialIcons };
