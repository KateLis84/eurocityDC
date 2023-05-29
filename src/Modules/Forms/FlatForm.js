import {React, useEffect} from "react";
import $ from 'jquery';
import IconsRadio from '../../Components/Filters/Radio/RadioTest.js';
import 'jquery-mask-plugin/dist/jquery.mask.min'; 

export default function FlatForm() {

  useEffect(()=>{
     $("#phone").mask("(999) 999-9999");
  }, [])

  return (
    <>
      <div class="form">
        <div class="form-toggle"></div>
        <div class="form-panel one">
          <div class="form-header">
            <h1>Зв'яжіться з менеджером </h1>
          </div>
          <div class="form-content">
            <form>
              <div class="form-group">
                <label for="username">Ім'я</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="phone">Контактний номер телефону</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required="required"
                  data-parsley-ui-enabled="false"
                  data-parsley-minlength="14"
                  data-parsley-maxlength="14"
                />
              </div>
              <div class="form-group">
                <label class="form-remember">
                  <IconsRadio/>
                </label>
              </div>
              <div class="form-group">
                <button type="submit">Надіслати</button>
              </div>
            </form>
          </div>
        </div>
        <div class="form-panel two">
        </div>
      </div>
    </>
  );
}