# React Quickly

## Chapter 2: Baby steps with React

- **2.1 Nesting elements**
  - [hello-world-nested](./src/ch2/hello-world-nested): tạo nesting element sử dụng `React.createElement` function

- **2.2 Creating component classes**
  - [hello-world-class](./src/ch2/hello-world-class): tạo `HelloWorld` component, là một class extend từ `React.Component`

- **2.3 Working with properties**
  - [hello-js-world](./src/ch2/hello-js-world): sử dụng các property trong `HelloWorld` component

## Chapter 3: Introduction to JSX

- **3.1 What is JSX, and what are its benefits?**
  - giới thiệu JSX và các benefit của nó

- **3.2 Understanding JSX**

- **3.2.1 Creating elements with JSX**
  - [hello-world-jsx](./src/ch3/hello-world-jsx): sử dụng JSX để tạo ra các DOM element (thay vì sử dụng `React.createElement`)

- **3.2.2 Working with JSX in components**
  - [hello-world-class-jsx](./src/ch3/hello-world-class-jsx): sử dụng JSX để define một component

- **3.2.3 Outputting variables in JSX**
  - sử dụng curly brace trong JSX syntax để output variable

- **3.2.4 Working with properties in JSX**
  - [hello-js-world-jsx](./src/ch3/hello-js-world-jsx): cách sử dụng property được pass vào một element

- **3.2.5 Creating React component methods**
  - [method](./src/ch3/method): có thể thêm method vào component và gọi nó từ các method khác (kể cả `render`)

- **3.2.6 if/else in JSX**
  - sử dụng if/else trong JSX bằng 3 cách: variable, expression và ternary operator

- **3.2.7 Comments in JSX**
  - các kiểu comment trong JSX: một hoặc nhiều dòng

- **3.3 Setting up a JSX transpiler with Babel**
  - sử dụng babel CLI để transpile JSX thành ES6/ES2015

- **3.4 React and JSX gotchas**
  - React yêu cầu closing slash trong khi HTML thì không

- **3.4.1 Special characters**
  - cách sử dụng các special character trong JSX

- **3.4.2 data- attributes**
  - sử dụng `data-*` attribute nếu muốn React render ra các non-standard HTML attribute

- **3.4.3 style attribute**
  - cách để style một element trong JSX

- **3.4.4 class and for**
  - `class` và `for` là các reserved word của JavaScript, vì vậy chúng được thay thế bằng `ClassName` và `htmlFor`

- **3.4.5 Boolean attribute values**
  - cách pass giá trị boolean vào các attribute khi tạo element

## Chapter 4: Making React interactive with states

- **4.1 What are React component states?**
  - giới thiệu về state: được sử dụng để hiển thị dynamic information trong một view

- **4.2 Working with states**
  - [clock](./src/ch4/clock): sử dụng state để cập nhật giá trị đồng hồ mỗi giây

- **4.2.1 Accessing states**
  - cách truy cập giá trị của một state

- **4.2.2 Setting the initial state**
  - cách khởi tạo giá trị cho state: bên trong constructor của một component

- **4.2.3 Updating states**
  - cách cập nhật giá trị cho state: sử dụng `setState` method của `React.Component` class

- **4.3 States and properties**
  - so sánh sự giống và khác nhau giữa property và state trong React

- **4.4 Stateless components**
  - là các component chỉ sử dụng property để render view, nên sử dụng function style thay vì class style để define chúng

- **4.5 Stateful vs. stateless components**
  - [clock-analog-digital](./src/ch4/clock-analog-digital): lời khuyên khi design các component
    - nên viết stateless component nhiều nhất có thể
    - đặt stateful component lên trên cùng hierarchy để xử lý logic
