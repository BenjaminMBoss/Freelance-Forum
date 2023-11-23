const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
const forumList = [];
const randFreelancerOne = freelancers[Math.floor(Math.random()*freelancers.length)];
const randFreelancerTwo = freelancers[Math.floor(Math.random() * freelancers.length)];
forumList.push(randFreelancerOne, randFreelancerTwo);

const h4 = document.querySelector("h4");
const avgPriceHeader = document.querySelector("h3");

let sum = 0;
let listedFreelancers = 0;

function render() {
    const html = forumList.map((freelancer) => {
        return `<h4> Name: ${freelancer.name} &nbsp; &nbsp;&nbsp; &nbsp; Occupation: ${freelancer.occupation} &nbsp; &nbsp;&nbsp; &nbsp; Starting Cost: ${freelancer.price} </h4>`;
    })
    h4.innerHTML = html.join("")
}

function startingPriceRender () {
    const html = forumList.map((freelancer) => {
        listedFreelancers++;
        return `${freelancer.price}`
    })
    for (let prop in html) {
        sum += html[prop] * 1;
    }
    let avg = sum / listedFreelancers;
    let str = `The average starting price is: $${Math.round(avg)}`;
    avgPriceHeader.innerHTML = str;
}

function randomFreelancer () {
    const nameNum = Math.floor(Math.random() * names.length);
    const occupationNum = Math.floor(Math.random() * occupations.length);
    const priceNum = Math.round(Math.random()* 70) + 15;

    const freelancer = {
        name: names[nameNum],
        price: priceNum,
        occupation: occupations[occupationNum]
    }
    return freelancer;
}
render();
startingPriceRender();

setInterval(() => {
    const randFreelancer = randomFreelancer();
    forumList.push(randFreelancer);
    render();
    startingPriceRender();
},3000)
