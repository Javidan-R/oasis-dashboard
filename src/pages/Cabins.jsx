import { useEffect, useState } from 'react';
import Row from '@ui/Row';
import { getCabins } from '@services/apiCabins';

const Cabins = () => {
  const [cabins, setCabins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCabins()
      .then((response) => {
        setCabins(response);
      })
      .catch((err) => {
        setError('Failed to load cabins. Please try again later.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Row direction="vertical">
      {cabins.length > 0 && (
        <ul>
          {cabins.map((cabin) => (
            <li key={cabin.id}>
              <img
                src={
                  cabin.image ||
                  'https://urjmjzcclfxkjxruiylk.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg'
                }
                alt={cabin.description || 'Cabin'}
                style={{ width: 120, height: 80, objectFit: 'cover' }}
              />
              {cabin.description}
            </li>
          ))}
        </ul>
      )}
    </Row>
  );
};

export default Cabins;