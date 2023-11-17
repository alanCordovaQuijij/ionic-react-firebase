import * as Yup from "yup";

export function initailValues(){

    return {
        name: "",
    };

}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required("El nombre del canal es obligatorio"),
    })

}