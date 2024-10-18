const CheckBox = () => {
  return (
    <>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name="status"
        id="status"
      />
      <label htmlFor="status" className="text-sm text-gray-01 ms-6">
        Keep me signed in
      </label>
    </>
  );
};

export default CheckBox;
