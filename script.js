function createNode(element)
{
    return document.createElement(element);
}

function append(parent,el)
{
    return parent.appendChild(el);
}

const ul = document.getElementById("authors");

const url = 'https://randomuser.me/api/?results=10' ;        //result=10 because we 10 peoples result


fetch(url)
.then((resp) => resp.json())    //response in json response
.then(function(data){                   //after request is succesfull promise is returned
    let authors = data.results;

    return authors.map(function(author){
        let li = createNode('li'),
        img = createNode('img');
        span = createNode('span');

        img.src=author.picture.medium;
        span.innerHTML=`${author.name.first} ${author.name.last} `;

        append(li,img);
        append(li,span);
        append(ul,li);
    })
})             