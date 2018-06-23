// Alice and Bob each created one problem. A revewier rates the two challenges awarding points on a scale from 1 - 10 for thre ecategories
//Problem, originality and difficulty. 

// If a[i] > b[i], then alice is awarded one point
//if a[i] < b[i], then bob is awarded one point
// if a[i] = b[i], then neither person receives a point



function solve(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    for (let i = 0; i <a.length ; i++){
          if (a[i] > b[i] ) {
            alicePoints++ 
          } else if (b[i] > a[i]){
            bobPoints++
          }    
    }
    return [alicePoints, bobPoints]
}

function solve(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
      if (a[0] > b[0] ) {
        alicePoints++ 
      } else if (b[0] > a[0]){
        bobPoints++
      }    
    if (a[1] > b[1] ) {
        alicePoints++ 
      } else if (b[1] > a[1]){
        bobPoints++
      }    
    if (a[2] > b[2] ) {
        alicePoints++ 
      } else if (b[2] > a[2]){
        bobPoints++
      }    
    return [alicePoints, bobPoints]
}