import React from 'react'

const Tab4 = () => {
  return (
    <>
      <p style={{ fontSize: '30px' }}>
        <strong>Unstoppable Domains 이메일 사용 방법</strong>
      </p>
      <p
        style={{
          width: 'fit-content',
          padding: '5px 10px',
          borderRadius: '15px',
          color: '#fff',
          backgroundColor: '#698BEF'
        }}
      >
        Step 1. 이메일 연결하기
      </p>
      <p style={{ textAlign: 'center' }}>
        <img
          style={{ border: '0.5px solid #bebebe' }}
          src='/images/findOut/tab_3/900_findout_40.jpg'
          alt='900_findout_40'
        />
      </p>
      <p>연동하고 싶은 개인 이메일 계정을 입력합니다.</p>
      <p
        style={{
          width: 'fit-content',
          padding: '5px 10px',
          borderRadius: '15px',
          color: '#fff',
          backgroundColor: '#698BEF',
          marginTop: 50
        }}
      >
        Step 2. 변경사항 저장하기
      </p>
      <p>맨 아래에 있는 ‘변경 사항 확인(Confirm Changes)’을 클릭해야 변경사항이 저장됩니다.</p>
      <p
        style={{
          width: 'fit-content',
          padding: '5px 10px',
          borderRadius: '15px',
          color: '#fff',
          backgroundColor: '#698BEF',
          marginTop: 50
        }}
      >
        Step 3. 이메일 활성화하기
      </p>
      <p style={{ textAlign: 'center' }}>
        <img
          style={{ border: '0.5px solid #bebebe' }}
          src='/images/findOut/tab_3/900_findout_41.png'
          alt='900_findout_41'
        />
      </p>
      <p>
        기본적으로 비활성화되어 있습니다. 좌측 메뉴에서 ‘Email’을 클릭하고 우측 화면에서 활성화 스위치를 전환합니다.
      </p>
      <p
        style={{
          width: 'fit-content',
          padding: '5px 10px',
          borderRadius: '15px',
          color: '#fff',
          backgroundColor: '#698BEF',
          marginTop: 50
        }}
      >
        Step 4. 이메일 주소 확인하기
      </p>
      <p style={{ textAlign: 'center' }}>
        <img
          style={{ border: '0.5px solid #bebebe' }}
          src='/images/findOut/tab_3/900_findout_42.png'
          alt='900_findout_42'
        />
      </p>
      <p>Unstoppable 이메일 주소와 개인 이메일 주소가 연결된 것을 확인합니다.</p>
      <p
        style={{
          width: 'fit-content',
          padding: '5px 10px',
          borderRadius: '15px',
          color: '#fff',
          backgroundColor: '#698BEF',
          marginTop: 50
        }}
      >
        Step 5. 이메일 보내기
      </p>
      <p>
        Unstoppable 이메일은 이메일 프록시 서비스를 사용하며, 도메인의 @ud.me로 메시지를 주고 받을 수 있습니다. 외부
        사용자는 익명 이메일 주소인 UD CNS@ud.me로만 연락할 수 있고, Unstoppable Domains은 해당 UD CNS에 연결해 놓은
        개인 이메일로 전달합니다. Unstoppable 이메일에 회신하는 경우, 개인 이메일에서 보내도 진짜 이메일은 비공개로
        유지되고, 대신 UD CNS@ud.me로 표시됩니다.
      </p>
    </>
  )
}

export default Tab4
