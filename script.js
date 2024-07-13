document.addEventListener('DOMContentLoaded', () => {
  const maxLength = 27;
  const chars = '0123456789abcdef';

  // 입력 박스와 라벨을 생성합니다.
  const inputContainer = document.getElementById('inputContainer');
  for (let i = 1; i <= maxLength; i++) {
    const label = document.createElement('label');
    label.textContent = i;
    label.classList.add('form-label', 'me-2');
    inputContainer.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.className = 'input-box form-control d-inline mb-2';
    input.id = `char${i}`;
    inputContainer.appendChild(input);
  }

  // 길이 설정 버튼
  document.getElementById('setLengthBtn').addEventListener('click', () => {
    const lengthInput = parseInt(document.getElementById('lengthInput').value, 10);
    for (let i = 1; i <= maxLength; i++) {
      const input = document.getElementById(`char${i}`);
      if (i <= lengthInput) {
        input.disabled = false;
        input.classList.remove('disabled');
      } else {
        input.disabled = true;
        input.classList.add('disabled');
      }
    }
  });

  // 완전 랜덤 문자열 생성
  document.getElementById('generateFullRandomBtn').addEventListener('click', () => {
    let result = '';
    for (let i = 0; i < maxLength; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('fullRandomResult').textContent = result;
  });

  // 고정 문자를 사용하여 랜덤 문자열 생성
  document.getElementById('generateFixedRandomBtn').addEventListener('click', () => {
    const lengthInput = parseInt(document.getElementById('lengthInput').value, 10);
    let result = new Array(lengthInput).fill(null);

    // 입력된 고정 문자를 가져옵니다.
    for (let i = 1; i <= lengthInput; i++) {
      const charInput = document.getElementById(`char${i}`).value;
      if (charInput) {
        result[i - 1] = charInput;
      }
    }

    // 나머지 부분을 랜덤 문자로 채웁니다.
    for (let i = 0; i < lengthInput; i++) {
      if (result[i] === null) {
        result[i] = chars[Math.floor(Math.random() * chars.length)];
      }
    }

    document.getElementById('fixedRandomResult').textContent = result.join('');
  });



    // 1.결과 복사 버튼
    document.getElementById('copyResultBtn1').addEventListener('click', () => {
      const resultText = document.getElementById('fullRandomResult').textContent;
      if(resultText){
        navigator.clipboard.writeText(resultText)
        .then(() => {
          alert('완전 랜덤 문자열을 복사 하였습니다.');
        })
        .catch(err => {
          console.error('클립보드 복사 실패:', err);
        });
       
      }else{
        alert('완전 랜덤 문자열을 생성해 주세요.');
      }
  
    });


  // 2.결과 복사 버튼
  document.getElementById('copyResultBtn2').addEventListener('click', () => {
    const resultText = document.getElementById('fixedRandomResult').textContent;
    if(resultText){
      navigator.clipboard.writeText(resultText)
      .then(() => {
        alert('고정 문자로 문자열을 복사 하였습니다.');
      })
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
      });
     
    }else{
      alert('고정 문자로 문자열을 생성해 주세요.');
    }

  });







});
