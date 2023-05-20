const cardContainer = document.querySelector('.card-container');

const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
];

let contInner = ``;

dataAraay.forEach((object) =>{
    contInner +=
    `
    <div class="card">
                    <h1 id="prof-num">${object.userId}</h1>
                    <img src=${object.userImage} alt="profile image">
                    <h2 id="prof-name">სახელი ${object.userId}</h2>
                    <h3 id="prof-srname">გვარი ${object.userId}</h3>
                    <h4 id="prof-year"> ${object.userAge}:years old</h4>
                    <Address id="#prof-addr">Address : ${object.userAddresses[0]} ${object.userAddresses[1]} ${object.userAddresses[2]}</Address>
                </div>

    `;
})
cardContainer.innerHTML += contInner;
const completeCardList = document.querySelectorAll('.card');

completeCardList.forEach((card,index) =>{
    if(index == 5 || index == 6)
    {
        card.style.backgroundColor = 'rgb(155, 151, 142)';
        card.style.color = '#000';
        card.style["boxShadow"] = "rgba(54, 51, 51, 0.678) 0px 5px 15px";
    }
})