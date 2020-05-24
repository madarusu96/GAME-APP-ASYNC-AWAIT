var apiURL = "https://games-world.herokuapp.com";


async function getGamesList(){
    const resp =await fetch(apiURL + "/games", {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
    });
    const arrayOfGame = resp.json();
    return arrayOfGame;
}



async function deleteGame(gameID){
   const delGame = await fetch(apiURL + "/games/" + gameID, {
            method: "DELETE",
        })
    return delGame;
}




async function createGameRequest(gameObject){
    const createGame= await fetch(apiURL + "/games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: gameObject
            });
        const resp = createGame.json();
      //  console.log("create new game");
        return resp;
        
}




// function updateGameRequest(gameID, updatedGameObj) {
//     return fetch(apiURL + "/games/" + gameID, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: updatedGameObj
//     }).then(response => response.json())
// }

async function updateGameRequest(gameID, updatedGameOb){
    const updateGame= await fetch(apiURL + "/games/" + gameID, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: updatedGameObj
            });
    const resp = updateGame.json();
    return resp;

}