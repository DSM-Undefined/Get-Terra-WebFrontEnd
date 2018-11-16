let problem = document.getElementById('problem');
let timeSet = document.getElementById('timeSet');
let listKey = document.getElementById('list_key');
let main = document.getElementById('main_wrapper');
let booth = document.getElementById('list_booth');
let token = localStorage.getItem('JWT')
let price = document.getElementById('price')
let state = document.getElementById('state')
let circle1;
let circle2;
let circle3;
let circle4;
let grade1;
let grade2;
let grade3;
let grade4;
let gradeper1;
let gradeper2;
let gradeper3;
let gradeper4;
let answerElement;
let wapper1 
let wapper2 
let wapper3 
let wapper4 
let stringHtml = [''];
let boothButton;
let postList = [];
let boothList = [];
let resultList = [];
let node;
let l = 0;

function priceFunction() {
    main.innerHTML = `
    <div id="grade_wrapper">
            <div id="result_header">
                <h1 id="result_title">등수</h1>
                <div id="result_title_right">
                    <h3 id="goto_situation">현황보기</h3>
                    <div>></div>
                </div>
            </div>
            <div id="result_main">
                <div>
                    <div class="result_main_circles" id="result_circle_1">
                        <div><p id="grade_result_count_1">0</p>개부스<br>(<p id="grade_result_percent_1">0</p>%)</div>
                    </div>
                    <div class="stairs" id="stairs_1">1</div>
                </div>
                <div>
                    <div class="result_main_circles" id="result_circle_2">
                        <div><p id="grade_result_count_2">0</p>개부스<br>(<p id="grade_result_percent_2">0</p>%)</div>
                    </div>
                        <div class="stairs" id="stairs_2">2</div>
                </div>
                <div>
                    <div class="result_main_circles" id="result_circle_3">
                        <div><p id="grade_result_count_3">0</p>개부스<br>(<p id="grade_result_percent_3">0</p>%)</div>
                    </div>
                    <div class="stairs" id="stairs_3">3</div>
                </div>
                <div>
                    <div class="result_main_circles" id="result_circle_4">
                        <div><p id="grade_result_count_4">0</p>개부스<br>(<p id="grade_result_percent_4">0</p>%)</div>
                    </div>
                </div>
            </div>
        `
        circle1 = document.getElementById('result_circle_1')
        circle2 = document.getElementById('result_circle_2')
        circle3 = document.getElementById('result_circle_3')
        circle4 = document.getElementById('result_circle_4')
        grade1 = document.getElementById('grade_result_count_1')
        grade2 = document.getElementById('grade_result_count_2')
        grade3 = document.getElementById('grade_result_count_3')
        grade4 = document.getElementById('grade_result_count_4')
        gradeper1 = document.getElementById('grade_result_percent_1')
        gradeper2 = document.getElementById('grade_result_percent_2')
        gradeper3 = document.getElementById('grade_result_percent_3')
        gradeper4 = document.getElementById('grade_result_percent_4')


        axios.get('http://ec2.istruly.sexy:5000/status/ranking', {
            headers: {
                "Authorization" : "Bearer " + token
            }
        })
        .then(response => {
            console.log(response)
            resultList = response.data.list
            /*resultList.sort(function (a, b) {
                return a.ownCount - b.ownCount
            })*/

            grade1.childNodes[0].nodeValue = resultList[0].ownCount
            circle1.style.backgroundColor = resultList[0].teamId
            gradeper1.childNodes[0].nodeValue = resultList[0].percent
            grade2.childNodes[0].nodeValue = resultList[1].ownCount
            circle2.style.backgroundColor = resultList[1].teamId
            gradeper2.childNodes[0].nodeValue = resultList[1].percent
            grade3.childNodes[0].nodeValue = resultList[2].ownCount
            circle3.style.backgroundColor = resultList[2].teamId
            gradeper3.childNodes[0].nodeValue = resultList[2].percent
            grade4.childNodes[0].nodeValue = resultList[3].ownCount
            circle4.style.backgroundColor = resultList[3].teamId
            gradeper4.childNodes[0].nodeValue = resultList[3].percent

        })
}

function stateFunction() {
    main.innerHTML = `
    <div id="mainPage_situationResult_wrapper">
    <div id="situation_wrapper">
    <div id="situation_header">
        <h1 id="situation_title">현황</h1>
        <div id="situation_title_right">
            <h3 class="goto_grade">등수보기</h3>
            <div>></div>
        </div>
    </div>   
    <div id="situation_main">
        <div id = "s1m">
        </div>
        <div id = "s2m">
        </div>
        <div id = "s3m">
        </div>
        <div id = "s4m">
        </div>
    </div>
                        </div>
                    `
    wapper1 = document.getElementById('s1m')
    wapper2 = document.getElementById('s2m')
    wapper3 = document.getElementById('s3m')
    wapper4 = document.getElementById('s4m')

    stringHtml[0] = ['']
    stringHtml[1] = ['']
    stringHtml[2] = ['']
    stringHtml[3] = ['']
    axios.get('http://ec2.istruly.sexy:5000/status/booth', {
        headers : {
            "Authorization" : "Bearer " + token
        } 
    })
    .then(response => {
        l = 0;
        console.log(response)
        response.data.booths.map(i => {
            l++;
            stringHtml[ Math.floor((l-1)/4) ] +=
            `<div style = "background-color: ${i.ownTeam};" class="situation_club">${i.boothName}</div>`
        
        })
        wapper1.innerHTML = stringHtml[0]
        wapper2.innerHTML = stringHtml[1]
        wapper3.innerHTML = stringHtml[2]
        wapper4.innerHTML = stringHtml[3]
    })

    setInterval(() => {
        stringHtml[0] = ['']
        stringHtml[1] = ['']
        stringHtml[2] = ['']
        stringHtml[3] = ['']
        axios.get('http://ec2.istruly.sexy:5000/status/booth', {
            headers : {
                "Authorization" : "Bearer " + token
            } 
        })
        .then(response => {
            l = 0;
            console.log(response)
            response.data.booths.map(i => {
                l++;
                stringHtml[ Math.floor((l-1)/4) ] +=
                `<div class="situation_club">${i.boothName}</div>`
            
            })
            wapper1.innerHTML = stringHtml[0]
            wapper2.innerHTML = stringHtml[1]
            wapper3.innerHTML = stringHtml[2]
            wapper4.innerHTML = stringHtml[3]
        })
    }, 6000)
    
}

function problemFunction() {
    main.innerHTML = `
    <div id="multipleQuizSubmit_wrapper">
    <div id="multipleQuizSubmit_header">
        <h1 id="multipleQuizSubmit_title">객관식 문제 제출</h1>
    </div>
    <div id="multipleQuizSubmit_main">
        <div id="multipleQuizSubmit_main_top">
            <textarea type="text" id="multipleQuizSubmit_valueSubmit" placeholder="문제를 입력하세요"></textarea>
        </div>
        <div id="multipleQuizSubmit_main_middle">
            <div>
                <p class = "click">1</p>
                <input type="text" id="multipleQuizSubmit_answer_1" placeholder="답안을 입력하세요">
            </div>
            <div>
                <p class = "click">2</p>
                <input type="text" id="multipleQuizSubmit_answer_2" placeholder="답안을 입력하세요">
            </div>
            <div>
                <p class = "click">3</p>
                <input type="text" id="multipleQuizSubmit_answer_3" placeholder="답안을 입력하세요">
            </div>
            <div>
                <p class = "click">4</p>
                <input type="text" id="multipleQuizSubmit_answer_4" placeholder="답안을 입력하세요">
            </div>
        </div>
        <div id="multipleQuizSubmit_main_bottom">
            <button id="multipleQuiz_submit">제출하기</button>
        </div>
    </div>
</div>
`
let click = document.getElementsByClassName('click');
let problemButton = document.getElementById('multipleQuiz_submit')
    let content = document.getElementById('multipleQuizSubmit_valueSubmit')
    let quiz1 = document.getElementById('multipleQuizSubmit_answer_1')
    let quiz2 = document.getElementById('multipleQuizSubmit_answer_2')
    let quiz3 = document.getElementById('multipleQuizSubmit_answer_3')
    let quiz4 = document.getElementById('multipleQuizSubmit_answer_4')

    click[0].addEventListener('click', clickFunction)
    click[1].addEventListener('click', clickFunction)
    click[2].addEventListener('click', clickFunction)
    click[3].addEventListener('click', clickFunction)
    problemButton.addEventListener('click', problemButtonFunction)

    function clickFunction(e) {
        for(let i = 0; i < 4; i++)
        click[i].classList.remove('view')
        e.target.classList.add('view')

      //  console.log(e.target)
        answerElement = e.target;
    }


    function problemButtonFunction () {
                
        for(let i = 0; i < 4; i++) {
            if(click[i].classList.contains('view') !== null)
            {
                break;
            }
            if(i == 3) {
                alert('답을 설정하지 않았습니다!')
                return;
            }
        }
        console.log('a')
        let answer = answerElement.parentNode.childNodes[3].value

    axios.post('http://ec2.istruly.sexy:5000/problem', {
        "edits": [
            {
                "content" :  content.value,
                "answer" : answer,
                "choices" : [
                    quiz1.value, quiz2.value, quiz3.value, quiz4.value
                ]
            }
        ]
    },  {headers: { "Content-Type": "application/json",
    "Authorization": "Bearer " + token }
})
    .then(() => {
        alert("문제 제출에 성공하셨습니다!")
    })
}
}

function timeSetFunction() {
    main.innerHTML = `
    <div id="userControl_wrapper">
    <div id="userControl_header">
        <h1 id="userControl_title">유저 관리</h1>
    </div>
    <div id="userControl_main">
        <div id="userControl_main_middle">
            <div>시간 설정</div>
            <div>
                <p>시작/종료시간을 설정하세요</p>
                <div>
                    <div class="img_clock"></div>
                    <input type="number" min = "0" max = "2" id="userControl_startHH" value="0">
                    <input type="number" min = "0" max = "9" id="userControl_startH" value="0">
                    <p>:</p>
                    <input type="number" min = "0" max = "5" id="userControl_startMM" value="0">
                    <input type="number" min = "0" max = "9" id="userControl_startM" value="0">
                    <p>~</p>
                    <input type="number" min = "0" max = "2" id="userControl_endHH" value="0">
                    <input type="number" min = "0" max = "9" id="userControl_endH" value="0">
                    <p>:</p>
                    <input type="number" min = "0" max = "5" id="userControl_endMM" value="0">
                    <input type="number" min = "0" max = "9" id="userControl_endM" value="0">
                </div> 
            </div>
        </div>
        <div id="userControl_main_bottom">
            <button id = "userControl_submit">제출하기</button>
        </div>
    </div>
</div> 
    `

    let userControlButton = document.getElementById('userControl_submit')
    userControlButton.addEventListener('click', userControlButtonFunction)

    function userControlButtonFunction() {
        let start = document.getElementById('userControl_startHH').value + document.getElementById('userControl_startH').value + ":" + document.getElementById('userControl_startMM').value + document.getElementById('userControl_startM').value + ":00"
    let end = document.getElementById('userControl_endHH').value + document.getElementById('userControl_endH').value + ":" + document.getElementById('userControl_endMM').value + document.getElementById('userControl_endM').value + ":00"
        let date = new Date();
        let dayYear = date.getFullYear();
        let dayMonth = date.getMonth() + 1;
        let dayDay = date.getDate();
        let day = dayYear + '-' + dayMonth + '-' + dayDay
        console.log(dayYear)
        console.log("start " + day + " " + start,
                    "    end " + day + " " + end,)

        axios.put('http://ec2.istruly.sexy:5000/set-time', {
            "start" : day + " " + start,
            "end" : day + " " + end,
        },  {headers: { "Content-Type": "application/json",
        "Authorization": "Bearer " + token }
    })
        .then(() => {
            alert("시간 설정에 성공하셨습니다!")
        })
        .catch(() => {
            alert("시간 설정에 실패하셨습니다!")
        })
    }
}

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

    axios.post("http://ec2.istruly.sexy:5000/booth",  {"edits" : postList},{
        headers: { "Content-Type": "application/json",
        "Authorization": "Bearer " + token }
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
    <div id="code_box2">당신의 인증코드는<p id="certification_code">000000</p>입니다</div>
    </div>`
    

    let successNode = document.getElementById('certification_code').firstChild;
    let failedNode = document.getElementById('code_box2');

    (() => axios.get('http://ec2.istruly.sexy:5000/session/new', {    
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
}

problem.addEventListener('click', problemFunction)
listKey.addEventListener('click', listKeyFunction)
timeSet.addEventListener('click', timeSetFunction)
booth.addEventListener('click', boothFunction)
price.addEventListener('click', priceFunction)
state.addEventListener('click', stateFunction)