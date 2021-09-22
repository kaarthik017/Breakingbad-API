function randomFacts(data){

    
    var container = document.createElement('div');
    container.setAttribute('class','container');
    
    var row = document.createElement('div');
    row.setAttribute('class','row');
    for(var i=0;i<data.length;i++){
    
    var col1 = document.createElement('div');
    col1.setAttribute('class','col-lg-4');
    
    var col2 = document.createElement('div');
    col2.setAttribute('class','col-sm-12');
    
    var card = document.createElement('div');
    card.setAttribute('class','card');
    
    var cardHeader = document.createElement('div');
    cardHeader.setAttribute('class','cardheader card-header');
    cardHeader.innerHTML = data[i].char_id;
    
    var cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body');
    
    var image = document.createElement('img');
    image.src = data[i].img;
    
    var p = document.createElement('p')
    p.setAttribute('class','para');
    p.innerHTML = "Name: "+data[i].name;
    
    var p1 = document.createElement('p')
    p1.setAttribute('class','para');
    p1.innerHTML = "Occupation: "+data[i].occupation[0];
    
    var p2 = document.createElement('p')
    p2.setAttribute('class','para');
    p2.innerHTML = "Nickname: "+data[i].nickname;

    var p3 = document.createElement('p')
    p3.setAttribute('class','para');
    p3.innerHTML = "Realname: "+data[i].portrayed;
    
    
    cardBody.append(image,p,p1,p2,p3);
    card.append(cardHeader, cardBody);
    col2.append(card);
    col1.append(col2);
    row.appendChild(col1);
    }
    container.appendChild(row);
    
    document.body.append(container);
}

// Fetch API call for Breaking Bad Characters
fetch('https://breakingbadapi.com/api/characters')
.then(res=>res.json())
.then((data)=>{
    randomFacts(data)
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})