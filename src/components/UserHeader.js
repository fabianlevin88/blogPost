import React           from 'react';
import { connect }     from 'react-redux';


class UserHeader extends React.Component {

    render() {

        const { author } = this.props;
        
        if (!author) {
            return null;
        }

        return <div><strong>{author.name}</strong></div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { author: state.author.find(author => author.id === ownProps.userId) };
}

export default connect(mapStateToProps)(UserHeader);