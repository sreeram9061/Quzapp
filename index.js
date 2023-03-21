const Qstions=[
    {
        qustion:"Where was India's first women's university established ?",
        a:'Delhi',
        b:'Kolkata',
        c:'Mumbai',
        d:'Bangalore',
        right:'c'
    },
    {
        qustion:"Where is the Keshopur Ramsar Site situated?",
        a:'Punjab',
        b:'Kerala',
        c:'Tamilnadu',
        d:'Delhi',
        right:'a'
    },
    {
        qustion:'What is the total number of members in BIMSTEC?',
        a:'9',
        b:'7',
        c:'2',
        d:'8',
        right:'b'
    },
 //{
 //    qustion:'How is first primeminister of india',
 //    a:'indira gandhi',
 //    b:'Mahatma gandhi',
 //    c:'Jawaharlal Nehru',
 //    d:'rahul gandhi',
 //    right:'c'
 //},
 //{
 //    qustion:"How many times does concerning, the clock's hands coincide in a day?",
 //    a:'24 Times',
 //    b:'16 Times',
 //    c:'34 Times',
 //    d:'22 Times',
 //    right:'d'
 //},
 //{
 //    qustion:'How is first primeminister of india',
 //    a:'indira gandhi',
 //    b:'Mahatma gandhi',
 //    c:'Jawaharlal Nehru',
 //    d:'rahul gandhi',
 //    right:'c'
 //},
 //{
 //    qustion:"Where is the Keshopur Ramsar Site situated?",
 //    a:'Punjab',
 //    b:'Kerala',
 //    c:'Tamilnadu',
 //    d:'Delhi',
 //    right:'a'
 //},
 //{
 //    qustion:'What is the total number of members in BIMSTEC?',
 //    a:'9',
 //    b:'7',
 //    c:'2',
 //    d:'8',
 //    right:'b'
 //},
   
    
    
]

const UserDetails=[]

let name=document.getElementById('name')
let email=document.getElementById('emai')
const informpage=document.querySelector('.informpage')
let alt
const qustioncontainer =document.querySelector('.qustioncontainer')
let i=-1
let len=0;


const qustion=document.getElementById('qustions')
const quisAnswer=[
    document.getElementById('btncontainer1_btn1'),
    document.getElementById('btncontainer1_btn2'),
    document.getElementById('btncontainer2_btn1'),
    document.getElementById('btncontainer2_btn2')
]
const identiy=['a','b','c','d']

//------Front Page Next Button
document.getElementById('btn').addEventListener('click',()=>{
    if(name.value==''){
        alt='Name'
    }else if(email.value==''){
        alt='Email' 
    }
    if(name.value=='' || email.value==''){
        alert(`Enter your ${alt}`)
    }else{
        if(!validateEmail(email.value)){
            alert("It's not a valid email")
        }else{
                UserDetails.push({name:name.value,email:email.value})
                informpage.style.display="none"
                qustioncontainer.style.display="flex"
                qustionOption()
        }
    }
})


//------Email validation
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


//------Qustion and option setting
function qustionOption(){
    len++
    let j=-1
          let index
          i++
          qustion.innerText=Qstions[i].qustion
          i<10 ?  index=`0${i+1}/${Qstions.length}`: index=`${i+1}/${Qstions.length}`
          document.getElementById('qustionnumber').innerText=index
          quisAnswer.forEach(e=>{
               j++
              for(let ite in Qstions[i]){ 
                  if(ite==identiy[j]){
                      e.innerText=Qstions[i][ite]
                  }
              }
          })
}

let Answer;
let AnseweOptionclick
let answerClick=false
//------Answer Option Select  
quisAnswer.map((e,i)=>{
    AnseweOptionclick=false
    
         e.addEventListener('click',()=>{
            answerClick=true
            if(!AnseweOptionclick){
               
                AnseweOptionclick=true
                e.style.border='1px solid rgb(200, 61, 85)'
                e.style.color='rgb(200, 61, 85)'
                if(i==0) Answer='a'
                if(i==1) Answer='b'
                if(i==2) Answer='c'
                if(i==3) Answer='d'

            }else{

                quisAnswer.map(el=>{
                    el.style.border='1px solid rgb(36, 75, 95)'
                    el.style.color='white'
                    e.style.border='1px solid rgb(200, 61, 85)'
                    e.style.color='rgb(200, 61, 85)'
                    if(i==0) Answer='a'
                    if(i==1) Answer='b'
                    if(i==2) Answer='c'
                    if(i==3) Answer='d'
                })
            }
          })
    
})

//------Next Button Click Action
document.getElementById('next').addEventListener('click',()=>{
    if(AnseweOptionclick){
            getAnswerReesetStyles()
            
        if(len!=Qstions.length && answerClick){
            answerClick=false
            qustionOption()
        }else if(!answerClick){
          alert('Please select a answer')
        }
       
    }else{
        alert('Please select a answer')
    }
})


//------Get Answer And Reeset Styles
function getAnswerReesetStyles(){
    quisAnswer.map((e)=>{
        e.style.border=null
        e.style.color=null
    })
    UserDetails.push({right:`${Answer}`})
    if(len==Qstions.length){
        qustioncontainer.style.display="none"
        document.querySelector('.container .card').style.display="none"
        document.querySelector('.thankyoumsg').style.display="flex"
        getData()
    }
    
}

//------Get User data check it is true or not
function getData(){
    console.log(UserDetails)
    let True=0
    let False=0
    
   for(let i=0;i<Qstions.length;i++){
       
      if(Qstions[i].right==UserDetails[i+1].right){
        True++

      }else{

        False++
      }
       
   }
   console.log(`${True} ${False}`) 
} 


