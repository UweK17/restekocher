import fridge from "../img/fridge-5930424_1920.png";
import './info.css';

export const Info = () => {
  return (
    <div>
      <div className="d-flex">
        <a href="https://www.youtube.com/watch?v=GYK-NfOo7b4" target="_blank" ><img src={fridge} style={{ width: 300 }} alt="bild" className="beat"/></a>
        <div className="m-4 p-5">
          <div>
            Lieber ratloser Mensch, wenn du nicht weißt, was du kochen sollst, bist
            du hier genau richtig.
          </div>
          <div>Kennst du dieses Gefühl, was essen zu wollen, aber nicht weißt was?</div>
          <div>Du schaust in den Kühlschrank..........nichts!</div>
          <div>Du schaust in alle Schubladen..........nichts!</div>
          <div>Du schaust in alle Regale..............nichts!</div>
          <div>ABER............................das stimmt nicht!</div>
          <div>Sag mir eine Zutat, und ich zaubere Dir ein leckeres Essen!</div>
        </div>

      </div>
    </div>
  );
};
