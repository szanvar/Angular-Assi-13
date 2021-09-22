export class ValidationService 
{
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) 
    {
      let config :any = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address...Please enter valid email',
        'invalidPhone' : 'Invalid phone number',
        'minlength': `Minimum length ${validatorValue.requiredLength}`,
        'maxlength' :`Maximum length ${validatorValue.requiredLength}`
      };
  
      return config[validatorName];
    }
  
    static emailValidator(control : any) 
    {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) 
      {
        return null;
      } 
      else 
      {
        return { 'invalidEmailAddress': true };
      }
    }

    static phoneValidator(control : any)
    {
      if(control.value.match(/^[789]\d{9}$/))
      {
        return null;
      }  
      else
      {
        return {'invalidPhone' : true};
      }

    }
}

