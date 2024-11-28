interface Detail1 {
    user1: string;
    user2: string;
    user3: string;
}

interface Detail2 extends Detail1 {
    destiantion1: string;
    destiantion2: string;
    destiantion3: string;
}

const detail1: Detail1 = {
    user1: "karthi",
    user2: "ashish",
    user3: "hasan",
};

const detail2: Detail2 = {
    user1: "john",
    user2: "mike",
    user3: "paul",
    destiantion1: "TAMILNADU",
    destiantion2: "NAGPUR",
    destiantion3: "JHARKAND",
};

function filtering<T extends Detail1, U extends Detail2>(a: T, b: U): [T, U] {
    return [a, b];
}

console.log(filtering(detail1, detail2));
