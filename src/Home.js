const Home = () => {
  let times = 0;
  const handleClick = (e) => {
    times += 1;
    console.log(`button clicked ${times} times.`, e);
  };

  const handleClickMeAgain = (name, e) => {
    console.log(`clicked ${name}`, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickMeAgain('pasha', e)}>
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
