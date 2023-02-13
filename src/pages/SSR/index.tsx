export async function getServerSideProps() {
  const response = await fetch(
    'http://220.133.51.96:1010/api/cooperations/all/'
  );
  const res = await response.json();
  return {
    props: {
      res,
    },
  };
}

export default function SSR({ res }) {
  const data = res.data;
  console.log(data);
  return (
    <div>
      {data.map((p) => {
        return (
          <>
            <h1>{p.id}</h1>
          </>
        );
      })}
    </div>
  );
}
