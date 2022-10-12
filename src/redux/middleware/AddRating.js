import API from '../../Consts/apis';


export default function ADDRating(worker, rating, TOKEN) {
  return dispatch => {
    let formdata = new FormData();
    formdata.append("rating", rating)
    formdata.append("worker", worker)

fetch( API.AddRating, {
    method: 'POST',
    headers: {
      token: TOKEN,
    },
    body: formdata,
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
      console.log(json.code)
      if(json.code == 200){
        alert("Мы сохранили оценку. Спасибо что помагаете улучшить качество образования")
      }
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}
