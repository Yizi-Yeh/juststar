export async function getStaticPaths() {
  const res = await fetch('http://220.133.51.96:1010/api/cooperations/all');
  const apiData = await res.data.json();

  const paths = apiData.map((d) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://220.133.51.96:1010/api/cooperations/all/`);
  const apiData = await res.data.json();
  console.log(params);
  return {
    props: {
      apiData,
    },
  };
}

export default function StudentProfile({ apiData }) {
  return <>{console.log('apiData', apiData)}</>;
}
