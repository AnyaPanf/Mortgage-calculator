import { Input } from "./components/Input.js"
import { Checkbox } from "./components/Checkbox.js"
import { Cards } from "./components/Cards.js";
import Radio from "./components/Radio.js";
import { useState } from "react";

function App() {
  const [minInitialPayment, setMinInitialPayment] = useState(20)
  const [minTerm, setMinTerm] = useState(10)
  const [bankArr, setBankArr] = useState(["bank-vtb-new", "bank-gpb"])
  const [objectType, setObjectType] = useState('')
  const [productType, setProductType] = useState('USED')

  return (
    <div className="bank">
      <div className="container">
        <h1 bank__title>Настройка ипотеки</h1>
        <div className="bank__wrapper">
          <div className="bank__params">
            <div className="bank__inputs">
              <Input
                title='Срок кредита'
                options={[3, 10, 15, 20]}
                minRange={3}
                maxRange={20}
                unit={["год", "года", "лет"]}
                setValue={setMinTerm}
                value={minTerm}
              />
              <Input
                title='Первоначальный взнос'
                options={[10, 15, 30, 50, 80]}
                minRange={10}
                maxRange={80}
                unit={["%", "%", "%"]}
                setValue={setMinInitialPayment}
                value={minInitialPayment}
              />
            </div>
            <div className="bank__chekbox">
              <Checkbox setValue={setBankArr} value={bankArr} />
            </div>
            <div className="bank__radio">
              <Radio
                descr={"Тип объекта"}
                radioArr={[{ name: "Все", id: "ALL" }, { name: "Вторичка", id: "USED" }, { name: "Новостройка", id: "NEW" }]}
                setValue={setProductType}
                value={productType}
                groupId={"filtersProductType"}
              />
              <Radio
                descr={"Тип жилья"}
                radioArr={[{ name: "Дом", id: 'COTTAGE' }, { name: "Квартира", id: 'FLAT' }, { name: "Аппартаменты", id: 'APARTMENTS' }, { name: "Таунхаус", id: 'TOWNHOUSE' }]}
                setValue={setObjectType}
                value={objectType}
                groupId={"filtersObjectType"}
              />
            </div>
          </div>
          <div className="bank__cards">
            <Cards value={minInitialPayment}
              minTerm={minTerm}
              bankArr={bankArr}
              productType={productType} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
