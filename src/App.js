import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '강재현',
    'birthday': '961009',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '961009',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '김민정',
    'birthday': '101009',
    'gender': '남자',
    'job': '대학생'
  }

]
class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}
export default App;
