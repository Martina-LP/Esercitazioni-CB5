import './button.css';

const buttonVariantMap = {
  primary: 'bg-bronze',
  secondary: 'bg-gold',
  tertiary: 'bg-silver'
};

export function Button(props) {
  // console.log('props di Button:', props);

  const {
    className = '',
    children = 'Non ho {children}',
    variant = 'none',
    ...otherAttributes
  } = props;

  return (
    <button
      aria-label = 'Click to show console log message'
      className={`Btn ${buttonVariantMap[variant]}`}
      {...otherAttributes}
    >
      {children}
    </button>
  );
};
