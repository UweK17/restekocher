import fridge from "../img/fridge-5930424_1920.png";
export const Info = () => {
  return (
    <div>
      <h1>Willkommen beim ResteKocher!</h1>
      <p>
        Lieber ratloser Mensch, wenn du nicht weißt, was du kochen sollst, bist
        du hier genau richtig.
      </p>
      <img src={fridge} style={{ width: 300 }} alt="" />
    </div>
  );
};
