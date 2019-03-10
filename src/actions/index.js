import _               from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchAuthor(id)))
        .value();

}

export const fetchPosts = () => async dispatch => {

    const postsReponse = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: postsReponse.data });
};

export const fetchAuthor = userId => async dispatch => {
    
    const authorResponse = await jsonPlaceholder.get(`/users/${userId}`);
        
    dispatch({ type: 'FETCH_AUTHOR', payload: authorResponse.data })
}

// LODASH MEMOIZING APPROACH
// export const fetchAuthor = userId => dispatch => _fetchAuthor(userId, dispatch);

// const _fetchAuthor = _.memoize(async (userId, dispatch) => {
//     const authorResponse = await jsonPlaceholder.get(`/users/${userId}`);
        
//     dispatch({ type: 'FETCH_AUTHOR', payload: authorResponse.data })
// });