export async function getStaticProps() {
  try {
    const res = await fetch(
      `https://6593e1f91493b01160695e4b.mockapi.io/api/v1/locations/`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: [],
      },
    };
  }
}
