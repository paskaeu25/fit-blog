import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('pasha');
  const [age, setAge] = useState(29);

  const handleClick = () => {
    setName('indre');
    setAge(26);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>
        {name} is {age} years old.
      </p>
    </div>
  );
};

export default Home;
