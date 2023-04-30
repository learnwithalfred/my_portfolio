const isLink = (button) => {
  return button.href !== undefined;
};

const Button = (props) => {
  const { children, id } = props;
  const href = isLink(props) ? props.href : undefined;
  const target = isLink(props) ? props.target : undefined;
  const download = isLink(props) ? props.download : false;
  const onClick = !isLink(props) ? props.onClick : undefined;
  const type = !isLink(props) ? props.type : undefined;
  const disabled = !isLink(props) ? props.disabled || false : undefined;

  if (isLink(props)) {
    return (
      <a href={href} target={target} className="" download={download}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className="btn bg-sky-600 hover:bg-sky-700 border-sky-600 hover:border-sky-700 text-white rounded-md justify-center flex items-center"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
