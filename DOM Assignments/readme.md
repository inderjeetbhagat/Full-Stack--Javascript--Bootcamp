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


## Task 4 Solution

``` js
const img = document.querySelector("img");
img.setAttribute("src","https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg");
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%201%20-%20Task%204.png)

---
## Task 5 Solution

``` js
const btn = document.querySelector(".hero-right-section-btns");
const clone = btn.cloneNode(true);
document.querySelector(".hero-right-section-btns").append(clone);
const btns = document.querySelectorAll(".hero-right-section-btns");
btns[1].children[0].innerText = "Support Me";
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%201%20-%20Task%205.png)

---


# _DOM Assignment 2_


## Task 1 Solution

``` js

const accord = document.querySelectorAll(".accordian");
for(var i = 0; i<4; i++){
   accord[i].children[0].style.backgroundColor= "#e2d4ff";
}

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%202%20-%20Task%201.png)

---

## Task 2 Solution

``` js

const accord = document.querySelectorAll(".accordian");
accord[3].children[1].innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";
for(var i = 0; i<4; i++){
   accord[i].children[0].style.backgroundColor= "#e2d4ff";
}

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%202%20-%20Task%202.png)

---
