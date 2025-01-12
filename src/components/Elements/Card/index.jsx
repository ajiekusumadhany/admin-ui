const Card = (props) => {
  const { title =false, desc, variant } =props;
  return (
    <div className={ 'flex flex-col flex-1 mb-6 {${variant}'}>
    {title && (
        <>
        {title.length == 1 ? (
          <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">{title}</div>
        ) : (
          <div className="text-lg text-gray-02 mb-4">{title}</div>
        )}
        </>
      )}
      <div className="bg-secondary text-colorTeks rounded-lg px-6 py-5 shadow-xl flex-1">{desc}

      </div>

    </div>
  );

};
export default Card;
