export async function revalidate(
  hostname: string, // hostname to be revalidated
  email: string, // projectId
) {
  const urlPaths = ["/admin", `/me/${email}`];

  // refer to https://solutions-on-demand-isr.vercel.app/ for more info on bulk/batch revalidate
  try {
    await Promise.all(
      urlPaths.map((urlPath) =>
        fetch(`${hostname}/api/revalidate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            urlPath,
          }),
        })
      )
    );
  } catch (err) {
    console.error(err);
  }
}