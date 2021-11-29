import React from "react";

import FruitBar from "./FruitBar";
import Label from "./Label";
import Counter from "./Counter";
import Button from "./Button";
import "./App.css";

function App() {
  function handleSubmit(e) {
    console.log(`form sent!`, {
      name,
      lastname,
      age,
      zipcode,
      counterBanaan,
      counterAardbei,
      counterKiwi,
      remark,
      checkTermsandCond,
    });

    e.preventDefault();
  }

  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [remark, setRemark] = React.useState("");
  const [checkTermsandCond, setCheck] = React.useState(false);

  const [delivery, setDelivery] = React.useState("");

  const [counterBanaan, setCounterBanaan] = React.useState(0);
  const [counterAardbei, setCounterAardbei] = React.useState(0);
  const [counterAppel, setCounterAppel] = React.useState(0);
  const [counterKiwi, setCounterKiwi] = React.useState(0);

  function resetCountFunction() {
    setCounterBanaan(0);
    setCounterAardbei(0);
    setCounterAppel(0);
    setCounterKiwi(0);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

      <FruitBar title="Bananen 🍌" />

      <Counter value={counterBanaan} setValue={setCounterBanaan} />

      <FruitBar title="Aarbeien 🍓" />

      <Counter value={counterAardbei} setValue={setCounterAardbei} />

      <FruitBar title="Appels 🍏" />

      <Counter value={counterAppel} setValue={setCounterAppel} />

      <FruitBar title="Kiwi's 🥝" />

      <Counter value={counterKiwi} setValue={setCounterKiwi} />


        <Button type="button" title="Reset" resetCount={resetCountFunction} />


      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Persoonlijke informatie</legend>
            <Label
              labelname="naam"
              label="naam: "
              type="text"
              placeholder="Henkie"
              labelValue={name}
              setLabelValue={setName}
            />
            <br />
            <br />
            <Label
              labelname="achternaam"
              label="Achternaam: "
              type="text"
              placeholder="Henkbroek"
              labelValue={lastname}
              setLabelValue={setLastname}
            />
            <br />
            <br />
            <Label
              labelname="age"
              label="Leeftijd: "
              type="number"
              placeholder="0"
              labelValue={age}
              setLabelValue={setAge}
            />
            <br />
            <br />
            <Label
              labelname="zipcode"
              label="Postcode: "
              type="text"
              placeholder="0000 AA"
              labelValue={zipcode}
              setLabelValue={setZipcode}
            />
            <br />
            <br />
            <label htmlFor="delivery">Bezorgfrequentie: </label>
            <select
              name="delivery"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
            >
              <option name="week">iedere week</option>

              <option name="twoWeeks">om de week</option>

              <option name="month">iedere maand</option>

              <option name="never">nooit</option>
            </select>
            <br />
            <br />
            <input type="radio" name="deliverytime" value="overdag" />
            <label htmlFor="overdag">Overdag</label>
            <br />
            <input type="radio" name="deliverytime" value="avond" />
            <label htmlFor="avond">'s Avonds</label>
            <br />
            <br />
            <legend>Opmerkingen</legend>
            <textarea
              name="remarks"
              placeholder="Opmerkingen"
              cols="30"
              rows="10"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
            <br />
            <br />
            <input
              type="checkbox"
              name="checkbox"
              checked={checkTermsandCond}
              onChange={(e) => setCheck(!checkTermsandCond)}
            />
            Ik ga akkoord met de voorwaarden
            <br />
            <br />
            <button type="submit">Send</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
