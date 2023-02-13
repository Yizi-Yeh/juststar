import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react';

export default function CRS() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const myFunction = async () => {
      const res = await fetch('http://220.133.51.96:1010/api/cooperations/all');
      const apiDataa = await res.json();
      const { data } = apiDataa;
      setData(data);
      setLoading(false);
      console.log(data);
    };
    myFunction();
  }, []);

  return (
    <div>
      <h1>{isLoading && 'Loading'}</h1>
      <h1>CSR</h1>
      {data &&
        data.map(
          (d: {
            id: Key | null | undefined;
            link: ReactNode;
            name:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <>
                <h1 key={d.id}>{d.link + d.id}</h1>
              </>
            );
          }
        )}
    </div>
  );
}
