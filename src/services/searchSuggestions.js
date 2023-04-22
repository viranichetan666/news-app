export const getSearchSuggestions = async (params) => {
  const { search } = params;

  let response = await fetch(
    `${process.env.REACT_APP_API_URL}/tags?show-references=all&api-key=test&type=keyword&q=${search}`,
    {
      method: "GET",
    }
  );
  response = await response.json();

  return response;
};
