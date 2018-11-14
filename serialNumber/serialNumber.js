let token = localStorage.getItem('JWT')
let successNode = document.getElementById('show_key').firstChild;
let failedNode = document.getElementById('dlswmd_box2');

window.onload = axios.get('http://52.78.227.70:5000/session/new', {    
        headers: { "Content-Type": "application/json",
                   "Authorization": "Bearer " + token}
},
)
.then(response => {
    alert("인증코드 발급에 성공하셨습니다.")
    successNode.nodeValue = response.data.serial_number;
    //console.log(typeof response.data.access_token)
    //localStorage.setItem("JWT", response.data.access_token)
})
.catch(reject => {
    failedNode.childNodes[0].nodeValue = "인증코드 발급 실패"
    failedNode.removeChild(failedNode.childNodes[1])
    failedNode.removeChild(failedNode.childNodes[1])
    alert("인증코드 발급에 실패하셨습니다.")
})