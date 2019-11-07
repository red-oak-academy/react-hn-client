import Axios from "axios"

//currently, the page response is always 30 entries long.
const pageLength = 30;

const HnApi = {
    getNewsFeed: async (feedType = 'news', requestedPage = 1) => {

        if ((requestedPage < 1) || (requestedPage > 12))
            throw new Error(`the request page ${requestedPage} is not in the expected range.`);

        let response =  await Axios.get(`https://api.hnpwa.com/v0/${feedType}/${requestedPage}.json`);
        return response.data.map((data, idx) => ({...data, number: idx + 1 + ((requestedPage -1) * pageLength)}));
    },

    getPostDetails: async (postId) => {
        let response =  await Axios.get(`https://api.hnpwa.com/v0/item/${postId}.json`);
        return response.data;
    }
}

export default HnApi;