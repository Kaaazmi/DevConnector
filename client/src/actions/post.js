import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR } from './types';

// Get Posts
export const getPosts = () => async dispatch => {
	try {
		const res = await axios.get('/api/posts');
	} catch (err) {}
};