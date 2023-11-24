type SuccessResponese = {
    status: 'Success';
    data:{
        id: string;
        name: string;
    }
}

type ErrorResponse = {
    status: 'Error';
    errorMessage: string
}

type UserAPIResponse = SuccessResponese | ErrorResponse

function handleResponse(res: UserAPIResponse){
    if(res.status === 'Success'){
        console.log(res.data.name)
    } else {
        console.log(res.errorMessage)
    }

}

/**
 * Can only use literal value like 'Success' for discriminated union
 */