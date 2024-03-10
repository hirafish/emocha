export const FetchFromPython=async ()=>{
    const response=await fetch("http://localhost:8000/fastapi",{
      method:"GET",
      headers:{
          "Content-Type":"application/json"
        }
      }
    );
    if(!response.ok){
      console.log("error status:"+String(response.status));
    }
    const data=await response.json();
    return data;
  };