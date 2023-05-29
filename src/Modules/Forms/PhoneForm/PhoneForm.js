import React from "react";
import "./PhoneForm.scss";
import $ from "jquery";
import 'jquery-mask-plugin/dist/jquery.mask.min'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

export default function PhoneForm() {

  $(function($){
    $("#phone").mask("(999) 999-9999");
  });

  return (
    <form id="notify-me" data-validate="parsley">
      <label for="phone">
        <input
          type="tel"
          id="phone"
          name="phone"
          required="required"
          placeholder="573-555-5555"
          data-parsley-ui-enabled="false"
          data-parsley-minlength="14"
          data-parsley-maxlength="14"
          class="phone phoneInput"
          style={{outline: 'none'}}
        />
        <i className="fa fa-phone input-icon"><LocalPhoneIcon/></i>
      </label>
    </form>
  );
}
