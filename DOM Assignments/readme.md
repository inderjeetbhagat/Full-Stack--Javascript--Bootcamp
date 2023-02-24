# _DOM Assignment 1_


## Task 1 Solution

``` js
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "Hire Me";
ul.append(li);
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%201%20-%20Task%201.png)

---


## Task 2 Solution

``` js
const input = document.querySelector("input");
input.setAttribute("placeholder", "Search My Project");
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%201%20-%20Task%202.png)

---

## Task 3 Solution

``` js
const ul = document.querySelector("ul");
const li = Array.from(ul.children);
const liThree = li[2];
liThree.innerHTML = "Projects";
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%201%20-%20Task%203.png)

---