import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function renderContent(header, content, footer) {
  class Header extends Component {
    alertHeader() {
      console.log('This is header')
    }
    handleClickOnTitle() {
      console.log('e.target.innerHTML')
    }
    render() {
      return (
        <header>
          <h1 onClick={() => { this.alertHeader(); this.handleClickOnTitle(); }}>{header}</h1>
        </header>
      )
    }
  }

  class Content extends Component {
    handleClickOnContent(e) {
      alert(e.target.innerHTML)
    }
    render() {
      return (
        <main>
          <p onClick={this.handleClickOnContent}>{content}</p>
        </main>
      )
    }
  }

  class Footer extends Component {
    handleClickOnFooter() {
      console.log(this)
    }
    render() {
      return (
        <footer>
          <h2 onClick={this.handleClickOnFooter.bind(this)}>{footer}</h2>
        </footer>
      )
    }
  }

  class Index extends Component {
    render() {
      return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      )
    }
  }
  ReactDOM.render(
    <Index />,
    document.querySelector('#root')
  )
}

renderContent('I can do React!', 'This is content', 'This is footer')

function getNotificationsCount(N) {
  class Notification extends Component {
    render() {
      const hasNotif = `有${N}条未读消息`
      const hasNoNotif = `没有未读消息`
      return (
        <span>
          {
            N > 0 ? hasNotif : hasNoNotif
          }
        </span>
      )
    }
  }

  ReactDOM.render(
    <Notification />,
    document.getElementById('notif')
  )
}

getNotificationsCount(2)

function renderLikeButton1() {
  class LikeButton extends Component {
    constructor() {
      super()
      this.state = {
        isLiked: false
      }
    }

    handleClickOnButton() {
      this.setState({
        isLiked: !this.state.isLiked
      })
      if (this.props.onClick) {
        this.props.onClick()
      }
    }

    render() {
      const wordings = this.props.wordings || {
        likeText: 'Like',
        unlikeText: 'Cancel'
      }
      return (
        <div>
          <button onClick={this.handleClickOnButton.bind(this)}>
            {this.state.isLiked ? wordings.likeText : wordings.unlikeText}👍
          </button>
        </div>
      )
    }
  }

  class Index extends Component {
    render() {
      return (
        <LikeButton
          wordings={{ likeText: '点赞', unlikeText: '取消' }}
          onClick={() => { console.log('This is onclick') }}
        />
      )
    }
  }

  ReactDOM.render(
    <Index />,
    document.querySelector('#likeButton1')
  )
}

renderLikeButton1()

function renderLikeButton2() {
  class LikeButton extends Component {
    static defaultProps = {
      likeText: 'Like',
      unlikeText: 'Cancel'
    }
    constructor() {
      super()
      this.state = {
        isLiked: false
      }
    }

    handleClickOnButton() {
      this.setState({
        isLiked: !this.state.isLiked
      })
      if (this.props.onClick) {
        this.props.onClick()
      }
    }

    render() {
      return (
        <div>
          <button onClick={this.handleClickOnButton.bind(this)}>
            {this.state.isLiked ? this.props.likeText : this.props.unlikeText}👍
          </button>
        </div>
      )
    }
  }

  class Index extends Component {
    render() {
      return (
        <LikeButton
          likeText='点赞'
          unlikeText='取消'
          onClick={() => { console.log('This is onclick') }}
        />
      )
    }
  }

  ReactDOM.render(
    <Index />,
    document.querySelector('#likeButton2')
  )
}

renderLikeButton2()

function bindThisTest() {
  class BindThis extends Component {
    constructor() {
      super()
      this.x = 10
      this.y = 10
    }

    f1 = {
      x: 3,
      y: 4
    }

    f2 = {
      x: 5,
      y: 6
    }

    log() {
      return this.x + ', ' + this.y
    }
    render() {
      return (
        <div>{this.log()}</div>
      )
    }
  }

  ReactDOM.render(
    <BindThis />,
    document.querySelector('#bindThis')
  )
}

bindThisTest()

function switchOnComputer() {
  class Screen extends Component {
    static defaultProps = { showContent: '无内容' }
    render() {
      return (
        <div className='screen'>{this.props.showContent}</div>
      )
    }
  }

  class Computer extends Component {
    static defaultProps = {
      on: '显示器亮了',
      off: '显示器关了'
    }

    constructor() {
      super()
      this.state = { status: false }
    }

    handleClickOnButton() {
      this.setState({
        status: !this.state.status
      })
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClickOnButton.bind(this)}>开关</button>
          <Screen
            showContent={this.state.status ? this.props.on : this.props.off}
          />
        </div>
      )
    }
  }

  ReactDOM.render(
    <Computer />,
    document.querySelector('#computer')
  )
}

switchOnComputer()

function renderList() {
  const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

  class User extends Component {
    render() {
      const { user } = this.props
      return (
        <div>
          <div>Name: {user.username}</div>
          <div>Age: {user.age}</div>
          <div>Gender: {user.gender}</div>
          <hr />
        </div>
      )
    }
  }

  class Index extends Component {
    render() {
      return (
        <div>
          {users.map((user, i) => <User key={i} user={user} />)}
        </div>
      )
    }
  }

  ReactDOM.render(
    <Index />,
    document.querySelector('#list')
  )
}

renderList()

function printBook() {
  const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
  ]
  class Lesson extends Component {
    printTitle(i, title) {
      console.log(`${i} - ${title}`)
    }
    render() {
      const { lesson, index } = this.props
      return (
        <div onClick={this.printTitle.bind(this, index, lesson.title)}>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
          <hr />
        </div>
      )
    }
  }

  class LessonsList extends Component {
    render() {
      return (
        <div>
          {lessons.map((lesson, i) => <Lesson index={i} key={i} lesson={lesson} />)}
        </div>
      )
    }
  }

  ReactDOM.render(
    <LessonsList />,
    document.querySelector('#print')
  )
}

printBook()