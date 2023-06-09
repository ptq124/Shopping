# 쇼핑몰 웹 사이트 만들기
[링크](https://cosmic-kashata-cea160.netlify.app/)
## 기술 스택

React, React Router, React Query, tailwindcss, FireBase, Context

## 후기

- 단순 React Query를 컴포넌트안에 사용하는 것이아닌 커스텀훅을 만들어 컴포넌트간 의존도를 낮췄다. 코드를 더 클린하게 짤수 있었던 경험을 했다. 
- FireBase를 처음 사용했다. 무료버전이고 DB기능까지 있어 혼자 사이드 프로젝트할떄 유용하게 사용될거 같다.
- React Router를 만들때 사용자 등급에 따라 주소접근이 되는데 URL에서 직접적인 주소접근은 허용하지 못했지만, 이번 프로젝트에서 직접적인 경로를 차단하는 방법을 알게되었다. 컴포넌트의 부모컴포넌트를 만들고 Context를 활용하여 사용자 등급을 알아낸후 해당이 안되면 Redirect하는 방식, Token까지 사용하면 더 좋을거 같다.

