import React, {Component} from 'react'
import CommentInput from './components/commentInput/CommentInput'
import CommentList from './components/commentInput/CommentList'
import './components/commentInput/input.scss'

class About extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            commentCreateTime:''
        }
        this.handleSubmitComment = this.handleSubmitComment.bind(this)
    }
    componentWillMount () {
        this._loadComments()
    }
    _loadComments () {
        let comments = JSON.parse(localStorage.getItem('comments'))
        if (comments) {
            this.setState({ comments })
        }
    }
    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))

    }
    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }
    handleSubmitComment(commentsInfo) {
        const Test = []
        Test.push(commentsInfo)
        this.setState({
            commentCreateTime:Test[0].createdTime,
            comments: this.state.comments.concat(Test)
        })
        console.log('传过来的数据是多少',this.state.comments.concat(Test))
        this._saveComments(this.state.comments.concat(Test))
    }

    render() {
        return <div className='wrapper'>
            <p>留言板</p>
            <CommentInput onSubmit={this.handleSubmitComment}/>
            <CommentList comments={this.state.comments} commentCreateTime={this.state.commentCreateTime}/>
        </div>
    }
}

export default About
