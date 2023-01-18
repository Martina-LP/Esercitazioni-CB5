const BASE_URL = "https://dummyjson.com";

const GET = async (resource) => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}`);

    if (res.status >= 400) {
      throw new Error("Connection error!");
    };

    const data = await res.json();

    return data;
  } catch (err) {
    return { status: false };
  } finally {
    // console.log("Finally!");
  }; 
};

const POST = async (resource, body) => {
  const res = await fetch(`${BASE_URL}/${resource}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: `${ body }`,
      userId: 5,
     }),
  });
  const data = await res.json();

  return data;
};

export { GET, POST };
