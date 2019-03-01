import React                       from 'react';
import { connect }                 from 'react-redux';
import { fetchPosts } from '../actions';
import Post                        from './Post';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div className="ui segment">
                <div className="ui relaxed divided list">
                    <Post posts={this.props.posts} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostList);