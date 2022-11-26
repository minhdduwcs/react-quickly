# React Quickly

## Chapter 2: Baby steps with React

- **2.1 Nesting elements**
  - [example](./src/ch2/nesting-element-example): tạo nesting element sử dụng `React.createElement` function

- **2.2 Creating component classes**
  - [example](./src/ch2/creating-component-example): tạo `HelloWorld` component, là một class extend từ `React.Component`

- **2.3 Working with properties**
  - [example](./src/ch2/using-properties-example): sử dụng các property trong `HelloWorld` component

## Chapter 3: Introduction to JSX

- **3.1 What is JSX, and what are its benefits?**
  - giới thiệu JSX và các benefit của nó

- **3.2 Understanding JSX**

- **3.2.1 Creating elements with JSX**
  - [example](./src/ch3/create-element-example): sử dụng JSX để tạo ra các DOM element (thay vì sử dụng `React.createElement`)

- **3.2.2 Working with JSX in components**
  - [example](./src/ch3/define-component-example): sử dụng JSX để define một component

- **3.2.3 Outputting variables in JSX**
  - [example](./src/ch3/outputting-variable-example): sử dụng curly brace trong JSX syntax để output variable

- **3.2.4 Working with properties in JSX**
  - [example](./src/ch3/using-props-example): cách sử dụng property được pass vào một element

- **3.2.5 Creating React component methods**
  - [example](./src/ch3/using-method-example): có thể thêm method vào component và gọi nó từ các method khác (kể cả `render`)

- **3.2.6 if/else in JSX**
  - sử dụng if/else trong JSX bằng 3 cách: variable, expression và ternary operator

- **3.2.7 Comments in JSX**
  - các kiểu comment trong JSX: một hoặc nhiều dòng

- **3.3 Setting up a JSX transpiler with Babel**
  - [example](./src/ch3/transpile-with-babel-example): sử dụng babel CLI để transpile JSX thành ES6/ES2015

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
