//each bar details
const detail1 = document.getElementById("detail1");
const detail2 = document.getElementById("detail2");
const detail3 = document.getElementById("detail3");
const detail4 = document.getElementById("detail4");
const detail5 = document.getElementById("detail5");
const detail6 = document.getElementById("detail6");
const detail7 = document.getElementById("detail7");
//the 7 bars
const bar1 = document.getElementById("1st");
const bar2 = document.getElementById("2nd");
const bar3 = document.getElementById("3rd");
const bar4 = document.getElementById("4th");
const bar5 = document.getElementById("5th");
const bar6 = document.getElementById("6th");
const bar7 = document.getElementById("7th");
//funtion that displays the first bar detail
const showDetail1 = () => {
    detail1.classList.remove("hideDetail");
}
const hideDetail1 = () => {
    detail1.classList.add("hideDetail");
}
bar1.addEventListener("mouseover", showDetail1);
bar1.addEventListener("mouseout", hideDetail1);
//funtion that displays the second bar detail
const showDetail2 = () => {
    detail2.classList.remove("hideDetail");
}
const hideDetail2 = () => {
    detail2.classList.add("hideDetail");
}
bar2.addEventListener("mouseover", showDetail2);
bar2.addEventListener("mouseout", hideDetail2);
//funtion that displays the third bar detail
const showDetail3 = () => {
    detail3.classList.remove("hideDetail");
}
const hideDetail3 = () => {
    detail3.classList.add("hideDetail");
}
bar3.addEventListener("mouseover", showDetail3);
bar3.addEventListener("mouseout", hideDetail3);
//funtion that displays the fourth bar detail
const showDetail4 = () => {
    detail4.classList.remove("hideDetail");
}
const hideDetail4 = () => {
    detail4.classList.add("hideDetail");
}
bar4.addEventListener("mouseover", showDetail4);
bar4.addEventListener("mouseout", hideDetail4);
//funtion that displays the fifth bar detail
const showDetail5 = () => {
    detail5.classList.remove("hideDetail");
}
const hideDetail5 = () => {
    detail5.classList.add("hideDetail");
}
bar5.addEventListener("mouseover", showDetail5);
bar5.addEventListener("mouseout", hideDetail5);
//funtion that displays the sixth bar detail
const showDetail6 = () => {
    detail6.classList.remove("hideDetail");
}
const hideDetail6 = () => {
    detail6.classList.add("hideDetail");
}
bar6.addEventListener("mouseover", showDetail6);
bar6.addEventListener("mouseout", hideDetail6);
//funtion that displays the third bar detail
const showDetail7 = () => {
    detail7.classList.remove("hideDetail");
}
const hideDetail7 = () => {
    detail7.classList.add("hideDetail");
}
bar7.addEventListener("mouseover", showDetail7);
bar7.addEventListener("mouseout", hideDetail7);