import validateSpanishID from './validate-spanish-id';

export default function validate(fields, context = 'register') {
    let errors = {};
    if (context==='login')
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                errors[key] = {status: 'error', help: 'Please introduce a valid email.'};
            break;
            case 'password':
              if(fields[key] === '')
              errors[key] = {status: 'error', help: 'Please, introduce your password.'};
            break;
            case 'passwordValidation' :
              if(fields[key] === '' || fields[key] !== fields.password)
                  errors[key] = {status: 'error', help: 'The password does not match the original.'};
            break;

            default:
        }
    }
    else
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                    errors[key] = {status: 'error', help: 'Please introduce a valid email.'};
            break;
            case 'username' :
                if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Only letters are allowed in the Username field.'};
            break;
            case 'firstName':
              if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                  errors[key] = {status: 'error', help: 'Only letters are allowed in the FirstName field.'};
              break;
            case 'lastName':
              if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Only letters are allowed in the LastName field.'};
            break;
            case 'address':
                if(fields[key] === '')
                errors[key] = {status: 'error', help: 'Please provide your address.'};
            break;
            case 'country' :
              if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                  errors[key] = {status: 'error', help: 'Only letters are allowed in the Country field.'};
            break;
            case 'city' :
              if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                  errors[key] = {status: 'error', help: 'Only letters are allowed in the City field.'};
            break;
            case 'phone' :
                if(! /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(fields[key])
                    && ! /^(\+34|0034|34)?[ -]*(8|9)[ -]*([0-9][ -]*){8}/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Please provide a valid landline or mobile phone.'};
            break;
            case 'birthDate' :
                if(! /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(fields[key])
                    /*&& ! /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(fields[key])*/)
                    errors[key] = {status: 'error', help: 'Please enter a date like dd-mm-yyyy.'};
            break;
            case 'description' :
              if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                  errors[key] = {status: 'error', help: 'Only letters are allowed in your description.'};
            break;
            case 'nif' :
                if(!validateSpanishID(fields[key])?.valid)
                    errors[key] = {status: 'error', help: 'Please provide a valid NIF, NIE or CIF.'};
            break;
            case 'password' :
                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\_.*])(?=.{8,})/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'The password must contain at least 8 characters, uppercase, lowercase, a number and some special character.'};
            break;
            case 'passwordValidation' :
                if(fields[key] === '' || fields[key] !== fields.password)
                    errors[key] = {status: 'error', help: 'The password does not match the original.'};
            break;

            default:
        }
    }
    return errors;
}