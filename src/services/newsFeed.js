export const getNewsFeed = async (params) => {
  const { search = "", page = 1, pageSize = 10 } = params;

  let response = await fetch(
    `${process.env.REACT_APP_API_URL}/search?api-key=test&show-tags=keyword&q=${search}&show-fields=thumbnail,headline&page=${page}&page-size=${pageSize}`,
    {
      method: "GET",
    }
  );
  response = await response.json();

  return response;
};
