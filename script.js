// console.log("hello");
$("#submit").click(function(){
    let data = Array.from(document.querySelectorAll("#form-data input")).reduce((acc, input)=>({...acc,[input.id]: input.value}), {});
    console.log(data);
});