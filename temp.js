function getTempunit() {
    let input = document.getElementById("Temp");
    let result = document.getElementById("result1");
    let inputtype = document.getElementById("temp1");
    let resulttype = document.getElementById("temp2");
    let inputtypeval, resulttypeval;
    input.addEventListener("keyup", myResult);
    inputtype.addEventListener("change", myResult);
    resulttype.addEventListener("change", myResult);
    inputtypeval = inputtype.value;
    resulttypeval = resulttype.value;
    function myResult() {
      inputtypeval = inputtype.value;
      resulttypeval = resulttype.value;
      if (inputtypeval === resulttypeval) {
        result.value = Number(input.value);
      }
      if (inputtypeval === "celsius") {
        if (resulttypeval === "kelvin")
          result.value = Number(input.value) + 273.15;
        else if (resulttypeval === "fehrenite")
          result.value = Number(input.value) * 1.8 + 32;
      } else if (inputtypeval === "kelvin") {
        if (resulttypeval === "celsius")
          result.value = Number(input.value) - 273.15;
        else if (resulttypeval === "fehrenite")
          result.value = (Number(input.value) - 273.15) * 1.8 + 32;
      } else if (inputtypeval === "fehrenite") {
        if (resulttypeval === "celsius") result.value = Number(input.value) * 1.8;
        else if (resulttypeval === "kelvin")
          result.value = 1.8 * Number(input.value) + 459.67;
      }
    }
  }

  const livetime=document.querySelector(".calhead1");
  function timme(){
      let timee=new Date();
      livetime.innerText=timee.toLocaleTimeString("en-US",{hour12:false}).match(/\d{2}:\d{2}|[AMP]+/g).join('');
      setTimeout(timme,1000);
  }
  timme();