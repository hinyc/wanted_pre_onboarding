# [ 원티드 프리온보딩 코스 ]  wanted_pre_onboarding

## Toggle
>### 구현한 방법과 이유에 대한 간략한 내용
>- 토글의 온/오프 상태를 가지고 상태에 따른 스타일을 변경하여 토글을 구현.
>### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
>- 토글 구현시 내부 색이 가로로 채워지는 동작을 구현할 때 고민을 많이했다. 
>- 내부에 빈박스를 생성해서 토글 상태에따라 폭을 조절하는 방법을 사용하여 해결.
>### 자세한 실행 방법
>- 토글 버튼을 클릭하면 상태가 true/false 로 변환.
>- true/flase 상태에따라 circle의 위치가 변경됨.
>- true 상태에서 내부 블럭의 폭이 토글버튼의 폭으로 변함.
>- false 상태에서 내부 블럭의 폭은 0으로 설정.


## Modal
>### 구현한 방법과 이유에 대한 간략한 내용
>- Open Modal 버튼 클릭시 모달창이 보이는 상태로 변경되어 모달창이 나타남.
>- 닫기 버튼이나, 모달창 외부 클릭시 모달 창이 닫힘.
>### 자세한 실행 방법
>- Open Modal 클릭시 showModal 상태가 false -> true로 변경.
>- showModal이 true 상태일 때 모달창이 보임.
>- 닫기 버튼이나 모달창 외부 클릭시 showModal 상태가 false가 되고 모달창이 안보이게됨.

## Tab
>### 구현한 방법과 이유에 대한 간략한 내용
>- 선택된 탭이 무엇인지 알수있도록 스타일이 변경되며, 선택된 탭에 따른 내용이 화면에 표시됨.
>### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
>- 토글 구현시 내부 색이 가로로 채워지는 동작을 구현할때 고민을많이했다. 해별방안은 내부에 빈박스를 생성해서 토글 상태에따라 폭을 조절하는 방법을 사용하여 해결하였다.
>### 자세한 실행 방법
>- 탭은 탭이름과 내용이 객체형태의 인자로 구성된 배열을 map 메서드를 이용해 생성함.
>- 각 탭은은 고유한 인덱스 값을 갖게됨.
>- 탭을 선택하면 탭의 인덱스가 select 상태로 설정됨.
>- select와 탭의 인덱스 값이 일치하면 전용 스타일이 지정되고, 해당되는 내용이 표시됨.

## Tag
>### 구현한 방법과 이유에 대한 간략한 내용
>- 태그와 인풋을 포함하는 태그를 생성하여 구현.
>- 각각의 태그는 자기자신을 삭제할 수 있는 버튼을 포함하고 있음.
>### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
>- 태그와 인풋창을 포함하는 태그의 포커스 효과 구현이 어려웠음.
>- 태그의 스타일에 다음 속성을 추가하여 인풋창을 선택했을때도 태그와 인풋을 모두 감싸고 있는 태그에 포커스 효과를 줄 수 있었음.
>```
>&:focus-within {}
>```
>### 자세한 실행 방법
>- 태그는 배열 형태로 tagList라는 상태로 저장됨.
>- 인풋창에 추가할 태그를 입력하고 엔터를 치게되면 tagList의 상태에 태그가 추가된 상태로 업데이트 됨.
>- tagList는 map 메서드를 이용해서 각각이 태그 스타일을 갖는 박스형태로 보여지게됨.
>- 태그박스내에는 해당 태그를 삭제 할 수있는 버튼을 포함하고 있으며,이 버튼은 태그박스가 생성될 때 tagList의 인덱스를 가지고있음.
>- 삭제버튼을 누르면 해당 인덱스의 태그를 제외한 나머지 인자들의 배열을 tagList로 업데이트 하게됨.

## AutoComplete
>### 구현한 방법과 이유에 대한 간략한 내용
>- autoCompleteList를 생성
>- 인풋창에 단어를 입력하면 해당 단어를 포함하고있는 배열의 인자들을 자동완성형태로 인풋창 아래에 보여줌.
>### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
>- 입력된 내용을 통해 자동완성 목록을 생성하는 방법을 생각하는게 어려웠음.
>- includes 메서드를 배열과, string에서 사용할 수 있는데, 배열에서만 사용 할 수 있다고 착각하여 고민을 오래함.
>- includes를 autoCompleteList의 인자에 사용해서 자동완성 목록을 생성 할 수 있었음.
>### 자세한 실행 방법
>- 인풋창에 내용을 입력함.
>- autoCompleteList의 인자를 순회하며 각 인자에 입력된 내용이 있는 경우만 필터링하여 dropDownList를 생성.
>- dropDownList의 길이가 0이 아닐 경우만 dropDownContainer가 보여지도록 조건 설정.
>- dropDownList의 단어를 선택할 경우 인풋창의 값이 선택한 단어로 변경됨.
>- 인풋창 오른쪽에 x버튼 클릭스 인풋창 내용 초기화 가능.

## ClickToEdit
>### 구현한 방법과 이유에 대한 간략한 내용
>- 이름, 나이 인풋창에 내용을 수정하고 마우스를 클릭할 경우 아래에 이름과 나이가 업데이트되어 표시됨.
>### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
>- 마우스 클릭시에만 아래에 보여지는 내용이 업데이트 되로록 구현하는데 어려웠음.
>- name, age 상태외에 내용을 보여주는 content 상태를 추가로 생성하여, 클릭이벤트 발생시에만 content상태를 업데이트 시켜서 구현. 
>### 자세한 실행 방법
>- name, age에 내용을 입력/수정 함.
>- 클릭 이벤트가 발생되며 content 상태가 업데이트됨.
>- content 상태 값을바탕으로 내용을 보여주기때문에 보여지는 내용도 업데이트됨.
