console.log("person1 shows ticket");
console.log("person2 shows ticket");
const premovie = async () => {
  const promiseWifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 2000);
  });
  let getpopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  let getCoolDrinks = new Promise((resolve, reject) => {
    resolve(` cooldrinks`);
  });
  let getbutter = new Promise((resolve, reject) => {
    resolve(` butter`);
  });

  let [ticket, popcorn, butter, cooldrinks] = await Promise.all([
    promiseWifeBringTicket,
    getpopcorn,
    getbutter,
    getCoolDrinks,
  ]);
  console.log(`${ticket},${popcorn},${butter},${cooldrinks}`);
  /*let wait = await promiseWifeBringTicket;

  console.log("husband:we should get in");
  console.log("wife:i want popcorn");
  let popcorn = await getpopcorn;
  console.log(`husband: here is the ${popcorn}`);
  console.log("husband:we should get in");
  console.log("wife:i want butter");
  let butter = await getbutter;
  console.log(`husband: here is the ${butter}`);

  console.log("husband:we should get in");
  console.log("wife:i want cooldrinks");
  let cooldrinks = await getCoolDrinks;
  console.log(`husband: here is the ${cooldrinks}`);
  console.log("husband:we should get in");
  console.log("wife:ok");*/

  return ticket;
};
/*const promiseWifeBringTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 2000);
});
const getpopcorn = promiseWifeBringTicket.then((ticket) => {
  console.log("husband:we should get in");
  console.log("wife:i want popcorn");
  return new Promise((resolve, reject) => {
    resolve(`${ticket} popcorn`);
  });
});
const getbutter = getpopcorn.then((msg) => {
  console.log("husband:we should get in");
  console.log("wife:i want butter");
  return new Promise((resolve, reject) => {
    resolve(`${msg} butter`);
  });
});
const getCoolDrinks = getbutter.then((msg) => {
  console.log("husband:we should get in");
  console.log("wife:i want cooldrinks");
  return new Promise((resolve, reject) => {
    resolve(`${msg} cooldrinks`);
  });
});
getCoolDrinks.then((msg) => console.log(`${msg}`));*/
premovie().then((m) => console.log(`person3 shows ${m}`));
console.log("person4 shows ticket");
console.log("person5 shows ticket");
