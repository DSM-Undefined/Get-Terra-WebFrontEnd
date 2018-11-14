let problem = document.getElementById('problem');
let problemOX = document.getElementById('problemOX');
let listKey = document.getElementById('list_key');
let main = document.getElementById('main_wrapper');
let booth = document.getElementById('list_booth');
let token = localStorage.getItem('JWT')
let boothButton;
let postList = [];
let boothList = [];
let node;

function boothButtonFunction() {
    for(let i = 0; i < 12; i++) {
        node = document.getElementsByClassName('booth_main_textBox')[i];
        boothList[i] = {"boothName": node.childNodes[1].value}
    }
    
    boothList.filter(i => {
        if(i.boothName !== "") {
            postList.push(i);
        }
    })

    axios.post("http://52.78.227.70:5000/booth", {params : {
        "edits" : postList
        },
        header : { "Content-Type": "application/json",
        "Authorization": "Bearer " + token}
    }, 
    )
    .then(response => {
        console.log(response)
    })
}

function boothFunction() {
    main.innerHTML = 
    `<div id="booth_wrapper">
    <div id="booth_header">
        <h1 id="booth_title">부스</h1>
    </div>
    <div id="booth_main">
        <div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_1">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_2">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_3">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_4">
                     
                </div>
            </div>
        </div>
        <div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_5">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_6">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_7">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_8">
                     
                </div>
            </div>
        </div>
        <div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_9">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_10">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_11">
                     
                </div>
            </div>
            <div>
                 
                <div class="booth_main_textBox">
                    <input type="text" placeholder="부스이름" id="booth_main_boothName_12">
                     
                    </div>
            </div>
        </div>
        <div>
            <button id="view_question">문제 보기</button>
            <button id="goto_creat_game">부스 생성하기</button>
            <button id="qrCode_downlode">qr코드 다운로드하기</button>
        </div>
    </div>
</div>`

boothButton = document.getElementById('goto_creat_game')
boothButton.addEventListener('click', boothButtonFunction)


}

function listKeyFunction() {
    main.innerHTML = 
    `<div id="CertificationCode">
    <div id="code_box1"><h4>인증코드란?</h4><p>플레이어들이 게임에 참가하기위해<br>필요한 코드입니다.<br>이 페이지에서 인증코드를 다시<br>확인 할 수 있습니다.</p></div>                
    <div id="code_box2">당신의 인증코드는<p id="certification_code"></p>입니다</div>
    </div>`
    

    let successNode = document.getElementById('certification_code').firstChild;
    let failedNode = document.getElementById('code_box2');

    (() => axios.get('http://52.78.227.70:5000/session/new', {    
        headers: { "Content-Type": "application/json",
                "Authorization": "Bearer " + token}
    },
    )
    .then(response => {
        alert("인증코드 발급에 성공하셨습니다.")
        successNode.nodeValue = response.data.serial_number;
    })
    .catch(reject => {
        failedNode.childNodes[0].nodeValue = "인증코드 발급 실패"
        failedNode.removeChild(failedNode.childNodes[1])
        failedNode.removeChild(failedNode.childNodes[1])
        alert("인증코드 발급에 실패하셨습니다.")
        })
    )();
    console.log('aa')
}

listKey.addEventListener('click', listKeyFunction)
//problemOX.addEventListener('click', problemOXFunction)
booth.addEventListener('click', boothFunction)
