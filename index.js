// console.log('person 1: shows ticket')
// console.log('person 2: shows ticket')

// const premovie = async () => {

// const wifegetsticks = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       resolve('tickets')
//     },3000)
// })
// const getPopcorn = new Promise ((resolve, reject) => resolve('popcorn'))

// const getButteronPopcorn = new Promise ((resolve, reject) => resolve('butter'))

// const getColddrinks = new Promise ((resolve, reject) => resolve('colddrinks'))

// let tickets = await wifegetsticks;
// console.log(`wife: I got ${tickets}`)
// console.log('husband: lets go inside');
// console.log('wife: Im hungry');

// let popcorn = await getPopcorn;
// console.log(`husband: I got ${popcorn}`);
// console.log('wife: i need butter on that');

// let butter = await getButteronPopcorn;
// console.log(`husband: here is your ${butter} popcorn`);
// console.log('husband: can we go now?');
// console.log('wife: i need colddrinks too');

// let colddrinks = await getColddrinks;
// console.log(`husband: i got the ${colddrinks}`);
// console.log('husband: we are getting late');
// console.log('wife: sure, lets go');

// return tickets;
// }
// premovie().then((m) => {console.log(`person 3: shows ${m}`)})

// console.log('person 4: shows ticket')
// console.log('person 5: shows ticket')

async function posttobecreated() {
  const posts = [{ title: 'POST1' }];


  const post2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'POST2' });
      if (posts.length > 0) {
        resolve('POST2')
      }
      else {
        reject('ERROR')
      }
    }, 3000)
  })



  const deletePost = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY")
      }
    }, 1000)
  })

  console.log(post2)
  console.log(deletePost.title)

}

posttobecreated();