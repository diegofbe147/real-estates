const BASE_URL ='https://lh-real-estates-challenge-api.herokuapp.com';

class FavoritesService {
  listMapper(response) {
    const { data, included } = response;
    const mappedList = data.map((item) => {
      const { id, attributes } = item;
      const { name, real_estate_ids: realEstateIds } = attributes;
      const realStatesById = included.filter(({ id }) => realEstateIds.includes(+id))
      const galleryUrls = realStatesById.map(({ attributes: { gallery_urls: galleryUrls } }) => galleryUrls[0])

      return {
        id,
        name,
        galleryUrls
      }
    });

    return mappedList;
  }

  async getFavoritesList() {
    const response = await fetch(`${BASE_URL}/real-estates`);
    const formattedResponse = await response.json();
    return this.listMapper(formattedResponse);
  }
}

export default new FavoritesService();
