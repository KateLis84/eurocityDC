import { React, useEffect } from "react";
import "./FAQ.scss";

export default function FAQ() {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion .FAQButton");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  });

  return (
    <>
      <div className="FAQcontainer">
        <h2>Часто задавані питання</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button
              id="accordion-button-1"
              aria-expanded="false"
              className="FAQButton"
            >
              <span className="accordion-title">Яка ціна квартир?</span>
              <span className="FAQicon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Ціни на квартири різняться і залежать від різних факторів.
                Рекомендуємо звернутися до нашої компанії, щоб уточнити
                актуальні ціни та отримати детальну інформацію.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button
              id="accordion-button-2"
              aria-expanded="false"
              className="FAQButton"
            >
              <span className="accordion-title">
                Чи облаштовані квартири меблями?
              </span>
              <span className="FAQicon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Наші квартири продаються без меблів. Однак, власники мають
                можливість обладнати квартиру меблями за своїм смаком та
                вподобаннями.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button
              id="accordion-button-3"
              aria-expanded="false"
              className="FAQButton"
            >
              <span className="accordion-title">
                На скільки безпечно зараз купувати квартиру?
              </span>
              <span className="FAQicon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Незважаючи на поточну складну ситуацію, ми прагнемо забезпечити
                безпеку та надійність наших клієнтів. Наша компанія вживає всіх
                необхідних заходів, щоб гарантувати якість та надійність нашої
                нерухомості.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button
              id="accordion-button-4"
              aria-expanded="false"
              className="FAQButton"
            >
              <span className="accordion-title">
                Чи можна надалі здавати в оренду куплену квартиру?
              </span>
              <span className="FAQicon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Так, після придбання квартира повністю належить власнику, і він
                має право розпоряджатися нею за власним бажанням, включаючи
                здачу в оренду.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
