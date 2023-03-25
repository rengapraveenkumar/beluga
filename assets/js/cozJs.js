var loadFile = function(event) {
	var p_image = document.getElementById('preview_dispaly_image');
	var op_image = document.getElementById('output_dispaly_image');
	p_image.src = URL.createObjectURL(event.target.files[0]);
	op_image.src = URL.createObjectURL(event.target.files[0]);
};

function setTime()
{
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const ampm = currentDate.getHours()>=12?'PM':'AM';
    
    // show in specific format
    let monthDateYear = ("0" + (month+1).toString()).slice(-2) + '/' + ("0" + (date).toString()).slice(-2) + '/' + year;
    let hourMin = hour + ":" + min;
    
    document.getElementById('opStrDate').innerHTML = monthDateYear;
    document.getElementById('opStrTime').innerHTML = hourMin;
    document.getElementById('opStrAmPm').innerHTML = ampm;

    document.getElementById('pStrDate').innerHTML = monthDateYear;
    document.getElementById('pStrTime').innerHTML = hourMin;
    document.getElementById('pStrAmPm').innerHTML = ampm;
}


// function divide() {
//     var txt;
//     txt = document.getElementById('a').value;
//     var text = txt.split(".");
//     var str = text.join('.</br>');
//     document.write(str);
// }



function repeatvalue() {
    setTime();

    var txtName = document.getElementById("getName");
    var opLblName = document.getElementById("opSetName");
    var pLblName = document.getElementById("pSetName");
    opLblName.innerHTML = txtName.value;
    pLblName.innerHTML = txtName.value;

    var strChat = document.getElementById("getChat");
    var txt = strChat.value.split(";;");
    console.log(txt);
    strChat = txt.join('<br>');
    console.log(strChat);
    var opChatlbl = document.getElementById("opSetChat");
    var pChatlbl = document.getElementById("pSetChat");
    pChatlbl.innerHTML = strChat;
    opChatlbl.innerHTML = strChat;
 }