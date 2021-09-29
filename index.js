const friends=["Wes","Clayton","Katerina","Tenzin"]

function writeCards(names,event){
    let thankYouList=[]
    for (let counter=0;counter<(names.length);counter++){
        thankYouList.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`)
    }
    return thankYouList
}

console.log(writeCards(friends,"birthday"))

function countDown(x){
    let counter=x
    while(counter>=0){
        console.log(counter)
        counter--
    }
}