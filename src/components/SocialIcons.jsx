const SocialIcons = ({ profiles }) => {
  return (
    <ul className="list-none text-center mt-8">
      {profiles.map(({ url, name, icon }) => (
        <li
          className="w-6 h-6 opacity-70 hover:opacity-100 transition inline px-2"
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
