export const maskPhone = (v) => {
    v = v.replace(/\D/g, "");

	if(v.length === 1) v = "(" + v;
	else{
		v = v.replace(/^(\d\d)/g, "($1) ");
		if(v.length > 13) v = v.replace(/(\d{4})(\d)/, "$1-$2");
		else v = v.replace(/(\d{4})(\d)/, "$1-$2");
	}

    return v.substring(0,14);
}

export const maskCellphone = (v) => {
    v = v.replace(/\D/g, "");

	if(v.length === 1) v = "(" + v;
	else{
		v = v.replace(/^(\d\d)/g, "($1) ");
		if(v.length > 13) v = v.replace(/(\d{5})(\d)/, "$1-$2");
		else v = v.replace(/(\d{4})(\d)/, "$1-$2");
	}

    return v.substring(0,15 );
}

export const verifyCellphone = (v) => {
    let r = v.substr(5,1);
    if(r === 9) return true;
    else return false;
}

export const required = (v) => {}
export const minLength = (v, min) => {}
export const maxLength = (v, max) => {}