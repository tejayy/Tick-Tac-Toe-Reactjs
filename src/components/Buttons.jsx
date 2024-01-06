
const Buttons = ({onReset}) => {

  return (
    <div>
      <button
        className=" px-5 py-2 bg-button-color text-white font-bold rounded-md hover:bg-reset"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Buttons
