export const fetchData = async (lang) => {
  const URL = `languages/${lang}.json`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error al cargar el JSON', error);
    return null;
  }
};
