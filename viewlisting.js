function signOutWithGoogle() {
    auth.signOut()
        .then(function() {
            console.log('sign out')
            // updateUIforSignOut()
        })
}

// function findListings(uid) {
//     const query = database.collection('listings')
//     .get()
//     .then(snapshot => {
//         if (snapshot.size) {
//             console.log('listingtest')
//             snapshot.forEach(doc => {
//                 let listingInfo = doc.data()
//                 console.log('listingtest2')
//                 presentListingsOnPage(listingInfo)
//             })
//         }
//     })
// }

// let viewListingBox = document.querySelector('#viewListingBox')

// function presentListingsOnPage(listingInfo) {
//     console.log(listingInfo)
//     console.log('Listings Go Here')
// //     viewListingBox.innerHTML = `
// //     <p>Name:${name}<p>
// //     <p>Dorm: ${dorm}<p>
// //     <p>Date & Time: ${dateTime}<p>
// //     <p>Description: ${descrip}<p>
// //     <p>Email: ${email}<p>
// // `
// }


// `
//     <p>Name: ${name}<p>
//     <p>Dorm: ${dorm}<p>
//     <p>Date & Time: ${dateTime}<p>
//     <p>Description: ${descrip}<p>
//     <p>Email: ${email}<p>
// `
