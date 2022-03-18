//*****Have a small request to user please download my file in computer then uncomment the line 32 to 42 bcz
//*****that api is best and give different results for every request and is also with out quotation
//*****And delete the line 11 to 30 
var btn = document.getElementById("btn");
  var btn1= document.getElementById("btn");
btn1.addEventListener("click", store=()=>{
   localStorage.setItem("high", 0);
  location.reload();
});
btn.addEventListener("click", fun1);
// fetch dummytext from website
//*********************************************************** fetch dummytext from website*****************************************************************
function fun1() {
  const d = new Date();
  window.start_time = d.getTime();
  var x = document.getElementById("inpu").value;
  fetch(`paragraph.txt`)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("text5").innerText = " ";
      var txt =data
      window.txt2 = data;
      console.log(txt);
      Com(txt);
    });
    //this is not secure and has no https so its api is not fetching in github you may install it in your pc
  //*****************************************This is faster than existing one but not https so not supported or fetching in github****************************************************
//   fetch(`http://metaphorpsum.com/paragraphs/${x}/10`)
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       document.getElementById("text5").innerText = "";
//       var txt = data;
//       window.txt2 = data;
//       //   console.log(txt)
//       Com(txt);
//     });
//  *******************************************************************************************************************************************************************
  // Node(no cros)
  // timer
  var y = document.getElementById("inpu2").value;
  //checking times up
  function timer() {
    if (y == 0) {
      console.log("ram ji");
      var rel = confirm(
        "😃ho gaya khatam! tata! 🙋‍♂️🤟bye!bye! phir test karna cahate ho kya?"
      );
      if (rel == true) {
        location.reload();
        location.href = "https://kunalshaw79.github.io/typing_test1/";
//         rel = false;
//         y = y - 1;
      }
    } else {
      y = y - 1;
      document.getElementById("timer1").innerText = y;
    }
  }
  setInterval(timer, 1000);
  setInterval(fun2, 2000);
}
//******************************************************** auto scrollig defines the difficulty*****************************************************************
fun2 = () => {
  var x = document.getElementById("inpu").value;
  u = x * 1.4;
  document.getElementById("text5").scrollBy(0, `${u}`);
};

//*************************************************************************all in one function***************************************************************
function Com(txt) {
  var txt_arr = txt.split(" ");
   //***************************************************for coluring text**************************************************************************************
  appening_each_txt_in_span = () => {
    txt_array = txt.split(" ");
    txt_array.forEach((char) => {
      const charem = document.createElement("em");
      charem.innerText = char + " ";
      document.getElementById("text5").appendChild(charem);
      window.quotespanarray = document.querySelectorAll("em");
    });
  };
  appening_each_txt_in_span();
  //comparing both fetched txt with input txt
  document.getElementById("text2").addEventListener(
    "input",
    (compare = (e) => {
      if (
        e.keyCode == 32 ||
        e.keyCode == 13 ||
        e.keyCode == 8 ||
        e.keyCode == 20
      ) {
        console.log("skip this event");
      }
      {
//***********************************************counting and checking error************************************************************************************
        var txt_in = document.getElementById("text2").value;
        var txt_in_arr = txt_in.split(" ");
        window.corr = 0;
        window.incorr = 0;
        for (let i = 0; i <= txt_in_arr.length; i++) {
          if (txt_in_arr[i] == null) {
            window.quotespanarray[i].classList.remove("correct");
            window.quotespanarray[i].classList.remove("incorrect");
          } else if (txt_in_arr[i] == txt_arr[i]) {
            window.corr++;
            window.quotespanarray[i].classList.add("correct");
            window.quotespanarray[i].classList.remove("incorrect");
            // console.log(window.quotespanarray[i].innerText)
          } else if (txt_in_arr[i] != txt_arr[i]) {
            window.incorr++;
            window.quotespanarray[i].classList.add("incorrect");
            window.quotespanarray[i].classList.remove("correct");
          }
        }
        var d = new Date();
        window.endtime = d.getTime();
        calculate_result();
        // console.log(window.quotespanarray)
      }
    })
  );
}
//********************************************************calculating and inserting data********************************************************************
function calculate_result() {
  total_word = document.getElementById("text2").value;
  total_word_count = total_word.split(" ").length;
  var time = (window.endtime - window.start_time) / 1000;
  speed = Math.round(((window.corr - window.incorr) * 60) / time);
  window.speed1 = Math.round(((window.corr - window.incorr) * 60) / time);
  accuracy = Math.round((window.corr * 100) / total_word_count);
  document.getElementById("speed").innerText = "" + speed;
  document.getElementById("error").innerText = "" + window.incorr;
  document.getElementById("accu").innerText = ":" + accuracy;
  high_score();
}
//*************************************************checking and storing highscore in local storage*************************************************************

var high_speed = 0;
function high_score() {
  if (localStorage.getItem("high") == undefined) {
    high_speed = window.speed1;
    localStorage.setItem("high", JSON.stringify(high_speed));
  } else if(localStorage.getItem("high") != undefined || localStorage.getItem("high") != null) {
//     let new_high_score = JSON.parse(localStorage.getItem("high"));
    if (window.speed1 < high_speed) {
      console.log("jai shree ram");
    } else if (window.speed1 > high_speed) {
      high_speed = window.speed1;
      localStorage.setItem("high", JSON.stringify(high_speed));
    }
    document.getElementById("highscore").innerText = JSON.parse(localStorage.getItem("high"));
    // console.log(new_high_score);
  }
}
high_score();
