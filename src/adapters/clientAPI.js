import axios from "axios";

export const fetchAPI = async () => {
  try {
    const data = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian,maincourse&number=16`
    );

    return data;
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
    } else if (e.request) {
      console.log(e.request);
    } else {
      console.log("Error", e.message);
    }
  }
};

export const searchAPI = async (query) => {
  try {
    const searchData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=16&query=${query}`
    );

    const tempData = searchData.data.results;
    const id = tempData.map((item) => (item.id.toString()))

    const data = await axios.get(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${id}`
    )

    return data;
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
    } else if (e.request) {
      console.log(e.request);
    } else {
      console.log("Error", e.message);
    }
  }
};

export const infoAPI = async (id) => {
  try {
    // FETCH MAIN DATA
    const infoData = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    // FETCH DATA FOR SIMILAR RECIPES
    const similarData = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
    );

    const data = infoData.data;
    const tempSimilarRecipes = similarData.data;

    // FETCH INFO FOR SIMILAR RECIPES
    const tempSimilarId = tempSimilarRecipes.map((item) => `${item.id}`)
    const similarId = await axios.get(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${tempSimilarId}`
      );
      
    const tempImageSimilar = similarId.data.map((item) => item.image)
    const similarRecipes = similarId.data.map((item) => {

      const imageSimilar = tempImageSimilar.map((item) => item)

      return ({...item, imageSimilar})
    })

    // FIX PRICE INFORMATIONS
    const price = (data.pricePerServing / 100).toFixed(2);

    return {data, similarRecipes, price};
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
    } else if (e.request) {
      console.log(e.request);
    } else {
      console.log("Error", e.message);
    }
  }
};
