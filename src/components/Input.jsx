function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        autoComplete="no"
      />
    </>
  );
}

export default Input;
