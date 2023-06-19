import "./App.css";
// import cemera from "./image/cemera.jpeg";
import film from "./image/Vector_Smart_Object (1).png";
import smart from "./image/Vector_Smart.png";
import group from "./image/Group_1_copy.png";
import layer from "./image/Layer_1.png";
import reel from "./image/Vector_Smart_Object.png";
import reel2 from "./image/Vector_Smart_Object_copy_5.png";
import ractangle from "./image/ractangle.png";
import watch from "./image/watch.png";
import rectangle3 from "./image/Rectangle_3.png";
import rectangle4 from "./image/Rectangle_4.png";
import rectangle5 from "./image/Rectangle_5.png";
import rectangle6 from "./image/Rectangle_6.png";
import rectangle7 from "./image/Rectangle_7.png";
import rectangle8 from "./image/Rectangle_8.png";
import footer from "./image/Footer_.png";
function App() {
  return (
    <div className="">
      <div className="App bg-dark">
        <div>
          <img className="mt-5" src={smart} style={{ width: "60vw" }} alt="" />
        </div>

        <div>
          <img
            className="mt-1 mb-3"
            src={group}
            style={{ width: "60vh" }}
            alt=""
          />
        </div>
        <h3 className="text-white mt-4 fw-bold">
          Ignite your filmaking Dreams!
        </h3>
        <div className="text-white">
          Do you have a know for creating beautiful cinematic experience?
        </div>
        <div className="text-white">
          Promote your film and contest on your social Media platform from 25th
          July to 31th Aug
        </div>
        <h3 className="text-white mt-3 fw-bold">
          Grap the change to win an anamzing
        </h3>
        <h4 className="" style={{ color: "lightseagreen" }}>
          cash prize worth Rs 1,00,000/-
        </h4>
        <h4 className="my-5 py-5 text-white fw-bold">ABOUT THE CHALLENGE</h4>
        <div class="d-flex text-white p-5 my-5 justify-center">
          <div class="col-6 text-white">
            <h6 className="fw-bold" style={{ color: "lightseagreen" }}>
              The spotlight shifts to God's Own Country - Kerala
            </h6>
            <p className="px-5 mx-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.Lorem Ipsum is simply
              dummy text of the printing and typesetting.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.{" "}
            </p>
          </div>
          <div className="col-6">
            <img src={layer} style={{ width: 200 }} alt="" />
            <img src={reel} style={{ width: 200 }} alt="" />
          </div>
        </div>
        <h4 className="mt-5 pt-5 text-white fw-bold">
          The MODUS OPERANDI IS VERY SIMPLE
        </h4>
        <h4 className="text-white fw-bold mb-5 pb-5">
          FOR ANY FILMAKKER TO FOLLOW
        </h4>
        <div
          class="row m-5"
          style={{
            height: "35vh",
            width: "90vw",
            backgroundImage: `url(${reel2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 1,
          }}>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={ractangle}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={watch}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={rectangle3}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={rectangle4}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={rectangle5}
              style={{ width: 50, height: 50 }}
              alt=""
            />
          </div>
        </div>
        <div
          class="row m-5"
          style={{
            height: "35vh",
            width: "90vw",
            backgroundImage: `url(${reel2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 1,
          }}>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={rectangle6}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={rectangle7}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
          <div class="col text-white m-3 p-2">
            <img
              className="p-2"
              src={rectangle8}
              style={{ width: 50, height: 50 }}
              alt=""
            />
            <h6>Short Film Submission Period:</h6>
            <p style={{ color: "lightseagreen" }}>15th June 2022 to </p>
            <p style={{ color: "lightseagreen" }}>20th July 2023</p>
          </div>
        </div>
        <h4 className="mt-5 my-5 text-white fw-bold">
          IMPORTANT DETAILS & TIMELINE
        </h4>
        <div class="d-flex pt-5">
          <p class="col-6 text-white px-5 mx-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.Lorem Ipsum is simply dummy
            text of the printing and typesetting.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.{" "}
          </p>
          <div className="col-6">
            <img src={film} style={{ height: 300 }} alt="" />
          </div>
        </div>
        <h4 className="mt-5 my-5 text-white fw-bold">TERMS & CONDITIONS</h4>
        <div className="text-white p-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <h4 className="mt-5 mb-3 text-white fw-bold">
          WHAT'S IN IT FOR THE FILMMAKERS
        </h4>
        <div className="p-5 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div class="row mt-5" style={{ height: 250 }}>
          <img src={footer} alt="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
