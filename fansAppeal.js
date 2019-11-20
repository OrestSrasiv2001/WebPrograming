
document.getElementById('addComment').onclick = function () {
    let comment = document.getElementById('commentBody');
    let author = currentName();
    let time = currentTime();
    let date = currentDate();
    const now = new Date();
    alert( now );
    if (comment.value !== "") {
        const div = document.createElement('div');
        div.innerHTML = `
                    <br>
                    <div class="row justify-content-center">
                        <div class="border border-silver rounded text-white" style="margin: 0 7% 4% 0; height: 5%">
                            <p>` + author + ` <br> ` + time + ` <br>` + date + `</p>
                            <p></p>
                            <p></p>
                        </div>
                            <div class="border border-silver rounded col-xs-12 col-sm-12 col-md-8 col-lg-8 text-white" style="margin: 0 1% 0 1%">
                            <p>` + comment.value + `</p>
                        </div>
                    </div>
                    <br>
                    <hr>
                  `;
        document.getElementById('container').append(div);
        comment.value = "";
        comment.author = "";
    } else {
        alert("Напишіть комментар!");
    }
};

function currentName() {
    let name = prompt("Введіть своє ім'я:");
    if (name === "") {
        return prompt("Введіть своє ім'я:");
    } else return name;
}

function currentTime() {
    let now = new Date();
    return now.getHours() + ":" + now.getMinutes();
}

function currentDate() {
    let now = new Date();
    return now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
}