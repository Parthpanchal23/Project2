/* add your code here */
document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(content);
    let UserListUL = document.getElementById("paintings").children[0];
    try {
        for (let index = 0; index < content.length; index++) {
            let imageName = userData[index]['id'];
            let liElement = document.createElement('li');
            liElement.dataset.uid = index;
            liElement.addEventListener("click", displayUserData);
            liElement.myParam = userData;
            liElement.innerHTML = `<img src="./images/small/${imageName}.jpeg" width="400px" height="150px">`;
            UserListUL.append(liElement)
        }
    }
    catch { }

    function displayUserData(data) {

        let index = this.getAttribute('data-uid');
        let img = data.currentTarget.myParam[index]['id'];
        let artist = data.currentTarget.myParam[index]['artist'];
        let titile = data.currentTarget.myParam[index]['title'];
        let description = data?.currentTarget?.myParam[index]['features'][index]['description'];

        var container = document.getElementById('details').children[1];

        let feature = data.currentTarget.myParam[index]['features'];

        var upperLeftX = data?.currentTarget?.myParam[index]['features'][index]['upperLeft'][0];
        var upperLeftY = data?.currentTarget?.myParam[index]['features'][index]['upperLeft'][0];
        var lowerRightX = data?.currentTarget?.myParam[index]['features'][index]['lowerRight'][0];
        var lowerRightY = data?.currentTarget?.myParam[index]['features'][index]['lowerRight'][1];

        var width = lowerRightX - upperLeftX;
        var height = lowerRightY - upperLeftY;

        var overlayDiv = document.createElement('div');

        overlayDiv.className = 'box';
        overlayDiv.style.left = upperLeftX + 'px';
        overlayDiv.style.top = upperLeftY + 'px';
        overlayDiv.style.width = width + 'px';
        overlayDiv.style.height = height + 'px';

        overlayDiv.addEventListener('mouseenter', function () {
            document.getElementById("description").style.display = 'block';
            document.getElementById('description').innerHTML = description ? description : "";
        });

        overlayDiv.addEventListener('mouseleave', function () {
            document.getElementById("description").style.display = 'none';

        });

        container.appendChild(overlayDiv);

        document.getElementById('title').innerHTML = titile;
        document.getElementById('artist').innerHTML = artist;
        document.getElementById('full').src = `./images/large/${img}.jpeg`;

    }
});