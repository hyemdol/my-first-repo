// https://openweathermap.org/
const API_KEY = "ef302cb044596c0184b057371d547b71";


//1 검색버튼 눌렀을 때 도서정보 가져오기
const searchBtn = document.getElementById("search-btn")
searchBtn.addEventListener('click', getWeather)//날씨 가져오는 함수)


function getWeather() {
    //console.log('get Weather')
    const cityInp = document.getElementById('city-inp');
    console.log('입력된 값:', cityInp.value);

    if(cityInp.value){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInp.value}&appid=${API_KEY}&lang=kr&units=metric`;
        fetch(url)
        .then((response) => {
            if(!response.ok) {throw new Error('HTTP error')}
          return response.json();
        })
        .then((data) => {
        console.log(data);
        console.log("온도1", data["main"]["temp"]);
        console.log("온도2", data.main.temp);
        console.log("설명", data["weather"][0]["description"]);

        
        //화면에 출력하는 코드
        document.getElementById('degree').innerText = data.main.temp;
        
        //온도의 값에 따라서 온도 색을 바꾸는 코드

        document.getElementById('description').textContent = data["weather"][0]["description"];

        if (data.main.temp >= 10) {
            degree.style.color = "red";
        } else {
            degree.style.color = "blue";
        }
   
        }).catch((error) => {
      console.error(error);
    }) } else {
        window.alert('입력된 값이 없습니다')
    }

}

