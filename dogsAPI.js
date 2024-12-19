let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
  let link = await getImg();
  let img = document.querySelector("img");
  img.setAttribute("src",link);
})

let url = 'https://dog.ceo/api/breeds/image/random';

async function getImg(){
    try{ 
    let res = await axios(url);
    return res.data.message;
    }catch(e){
        console.log("error - ",e);
        return "No image found"
    }

}