import './text.css';

const variantMap = {
  body: `main-text`,
  title: `title`
};

export const Text = (props) => {
  const {
    as = 'div', 
    children,
    variant = 'body',
    ...attributes
  } = props;

  const Element = as;

  return (
    <Element 
      className = {`Text ${variantMap[variant] ?? ''}`}
      {...attributes}
    >
    {children}
    </Element>
  );
};
