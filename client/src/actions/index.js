import axios from 'axios';
export function getBooks(
    limit = 10, skip = 0, order = 'asc', list='') {
  const request = axios
    .get(
      `http://localhost:3001/api/books?limit=${limit}
  &skip=${skip}&order=${order}`
    )
    .then(response => {if(list){
        return [...list,...response.data]
    }else{
        return[...response.data]
    } 
  });
  return {
    type: 'GET_BOOKS',
    payload: request
  };
}

export function getBookWithReviewer(id){

  const request= axios.get(`/api/getBook?id=${id}`)
  return (dispatch)=>{
    request.then(({data})=>{
        let book=data;
        axios.get(`/api/getReviewer?id=${book.OwnerID}`)
        .then(({data})=>{
          let response={
            book,
            reviewer:data
          }
          console.log(response)
          dispatch({
            type:'GET_BOOK_W_REVIEWER',
            payload:response
          })
        })
        
    })
  }
}
export function clearBookWithReviewer(){
  return {
    type:'CLEAR_BOOK_W_REVIEWER',
    payload:{
      book:{},
      reviewer:{}
    }
  }
}
//-----------USER------------//

export function loginUser({email,password}){
  const request= axios.post('/api/login',{email,password})
  .then(response=> response.data)
  return{
    type:'USER_LOGIN',
    payload:request
  }
}

export function auth(){
  const request=axios.get('/api/auth')
  .then(response=>response.data)

  return {
    type:'USER_AUTH',
    payload:request
  }
}