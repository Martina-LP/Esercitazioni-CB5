export function Button() {
  const log = () => {
    console.log("You just clicked the button :)");
  };


  return (
    <button
      aria-label = "Click to show console log message"
      className = "btn"
      onClick = {log}
    >
      Ammacca!
    </button>
  );
};
