function func(data: unknown){
    if(data != null && typeof data === "object" && "name" in data){
        console.log(data.name)
    }
}