// 1. 글쓰기 폼 초기 숨기기
// 2. + 버튼 클릭 시 글쓰기 폼 보이기
const writeForm = document.querySelector('#write_form');
const writeBtn = document.querySelector('#write_fab');
const writeContents = document.querySelector('#write_contents');
const confirmBtn = document.querySelector('#confirm_btn');
//const errorP = writeForm.querySelector('.error');
console.log(writeForm, writeBtn,writeContents,confirmBtn,);

writeForm.style.display = 'none'; //1
writeBtn.addEventListener('click',function(e){ //2
    e.preventDefault;
    writeForm.style.display = 'block';
})
confirmBtn.addEventListener('click',function(){
    if(writeContents.value == ''){
    //html 파일에 태그가 준비된 경우
    //errorP.style.color = '#f00';
    //errorP.textContent = '할일을 입력하세요';
    // html 파일에 태그가 없고 js에서 태그를 객체로 생성한 경우
    const errorP = document.createElement('p');
    errorP.innerHTML = '<em>할일을 </em> 입력하세요';
    writeForm.appendChild(errorP);
    } 
    // 할일을 적은 상태
    if(writeContents.value != ''){//textarea의 값이 빈 값이 아닌 경우 참
        const allCon = document.querySelector('#all_con');// ol 선택(자식요소삽입위해 부모를 선택)
        const li = document.createElement('li'); //생성위치 (클릭이벤트안)
        const dateA = document.createElement('a'); //클릭할때마다 생성 <a></a>
        const a = document.createElement('a'); //클릭할때마다 생성
        dateA.classList.add('date'); //기존css의 디자인 통일을 위해서 같은 이름등록
        dateA.textContent = '04.03'; //오늘 날짜 대입 (문자열)
        dateA.href = '#';  // a태그 생성시 속성없이 기본생성 <a>, href 속성 추가대입
        li.appendChild(dateA); //li 부모안 마지막 자식위치에 날짜 a삽입(먼저시작하는순서로 해야 나중에올 a가 마지막 자식위치로 들어감)
        a.innerHTML = writeContents.value; //createElement로 생성한게 아닌 기존 태그값을 대입
        li.appendChild(a); //날짜 다음 순서로 삽입하는 create 객체 삽입
        a.href = '#';
        li.classList.add('contents'); //기존 클래스와 일치해서 디자인 적용 목적
        li.classList.add('contents4'); //기존 클래스와 일치해서 디자인 적용 목적
        allCon.appendChild(li); //allCon > li > dateA + a 
        writeForm.style.display = 'none'; //등록한 후 글쓰기 팝업창 숨김 
        //append의 순서를 주의하며 정리해도됨. 현재 작성 순서는 동작 순서임.
    }
})

// 글쓰기 폼에 엔터 클릭 시
// 폼에 할일이 없다면 '<p>입력하세요</p>' 경고 출력
// 폼에 할일이 있다면 글쓰기 폼 닫히고 기존 할일 목록에 추가하기

