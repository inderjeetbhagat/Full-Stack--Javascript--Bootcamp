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

# _DOM Assignment 3_


## Task 1 Solution

``` js
document.querySelectorAll(".enterName").setAttribute("placeholder","FSJS 2.0");
document.querySelector(".enterMail").setAttribute("placeholder","fsjs@ineuron.ai");
document.querySelector(".enterMessage").setAttribute("placeholder","Hello World");
document.querySelector(".userName").setAttribute("placeholder","FSJS 2.0");
document.querySelector(".userMessage").setAttribute("placeholder","Hello World");

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%203%20-%20Task%201.png)

---

# _DOM Assignment 4_


##  Solution

``` js
const div = document.querySelectorAll(".clash-card__unit-stats");
const stats = document.querySelectorAll(".stat");
const statvalue = document.querySelectorAll(".stat-value");
var colors = ["yellow", "pink", "yellow","green","blue"];
for(var y =0; y<5; y++)
    {
        div[y].style.backgroundColor = colors[y];
        div[y].style.color = "#fff";
      
    }
for(var y =0; y<15; y++)
    {
        
        stats[y].style.color = "#fff";
        statvalue[y].style.color = "#fff";
    }

const archer = document.querySelector(".clash-card__level--archer");
archer.nextElementSibling.innerText = "The Archer";
const goblin = document.querySelector(".clash-card__level--goblin");
goblin.nextElementSibling.innerText = "The Goblin";

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%204.png)

---

# _DOM Assignment 5_


##  Solution

``` js
const btn = document.querySelector(".btn");
const div = btn.closest("div");
const clone = btn.cloneNode(true);
div.append(clone);
clone.innerText = "Pro Subscription";
const text = document.querySelector(".text-r");
const listDiv =text.nextElementSibling;
const seventh = document.createElement("a");
seventh.innerText= "Chinese (7)";
listDiv.append(seventh);

const gallery = document.querySelector(".recipe-gallery");
const card = document.querySelector(".card");
const clonee = card.cloneNode(true);
clonee.innerText="Add Sixth Card";
gallery.append(clonee);
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%205.png)

---
# _DOM Assignment 6_


## Task 1  Solution

``` js
const logo = document.querySelector(".logo");
logo.setAttribute("src","https://ineuron.ai/images/ineuron-logo.png");


```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%206%20-%20Task%201.png)

---
## Task 1  Solution

``` js

price.children[0].innerText ="$10";
const facebook = document.querySelector(".fa-square-facebook");
const clone = facebook.cloneNode(true);
clone.setAttribute("class","fa-brands fa-linkedin");
const footer = document.querySelector(".footer_social");
footer.append(clone);

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%206%20-%20Task%202.png)

---

# _DOM Assignment 7_


## Task 1  Solution

``` js
const box = document.querySelector(".main__languages");
for(var i = 2; i<12; i++){
    if(i%2 == 1){
        box.children[i].style.display = "none";
    }
}

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%207%20-%20Task%201.png)

---
## Task 2  Solution

``` js
const box = document.querySelector(".main__languages");
for(var i = 2; i<12; i++){
    if(i%2 == 1){
        box.children[i].style.display = "none";
    }
}

document.querySelector(".main__form-btn").removeAttribute("disabled");

document.querySelector(".main__form-input").removeAttribute("disabled");
```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%207%20-%20Task%202.png)

---

# _DOM Assignment 8_


## Task 1  Solution

``` js
document.querySelector(".new").style.overflow = "scroll";

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%208%20-%20Task%201.png)

---
## Task 2  Solution

``` js
document.querySelector("body").style.backgroundImage = "none";

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%208%20-%20Task%202.png)

---
## Task 3  Solution

``` js
document.querySelector(".navbar-collapse").setAttribute("class", "navbar-collapse");

```
### _After Update Fianl Output_
![Output Image](./Output%20Images/Assignment%208%20-%20Task%203.png)

---
