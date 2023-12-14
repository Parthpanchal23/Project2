/* add your code here */
document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(content);
    let UserListUL = document.getElementById("paintings").children[0];
    try {
       // userContent Data
       for (let index = 0; index < content.length; index++) {
          let imageName = userData[index]['id'];
          let liElement = document.createElement('li');
          liElement.dataset.uid = index;
          liElement.addEventListener("click", displayUserData);
          liElement.myParam = userData;
          liElement.innerHTML=`<img src="./images/small/${imageName}.jpeg" width="400px" height="150px">`;//innerHtml = `<image src="images/small/${description}".jpg`;
          UserListUL.append(liElement)
       }
    }
    catch { }

    function displayUserData(data) {
        let index = this.getAttribute('data-uid')  ;
        let img =data.currentTarget.myParam[index]['id'];
        let artist =data.currentTarget.myParam[index]['artist'];
        let titile =data.currentTarget.myParam[index]['title'];
        let description =data.currentTarget.myParam[index]['features'][index]['description'];    
        document.getElementById('title').innerHTML = titile;
        document.getElementById('artist').innerHTML = artist;
        document.getElementById('full').src=`./images/large/${img}.jpeg`;
        document.getElementById('description').innerHTML = description;
     }
});