import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {

    const postsReponse = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: postsReponse.data });
};

export const fetchAuthor = userId => async dispatch => {

    const authorResponse = await jsonPlaceholder.get(`/users/${userId}`);
        
    dispatch({ type: 'FETCH_AUTHOR', payload: authorResponse.data })
};