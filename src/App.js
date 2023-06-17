import "./App.css";
// import cemera from "./image/cemera.jpeg";
import film from "./image/Vector_Smart_Object (1).png";
import smart from "./image/Vector_Smart.png";
import group from "./image/Group_1_copy.png";
import layer from "./image/Layer_1.png";
import reel from "./image/Vector_Smart_Object.png";
import reel2 from "./image/Vector_Smart_Object_copy_5.png";
import ractangle from "./image/ractangle.png"
import watch from './image/watch.png'
function App() {

    return (
        <div className="">
            <div className="App bg-dark">
              <div><img className="mt-5" src={smart} style={{ width: 250 }} /></div>
                
              <div><img className="mt-1 mb-3" src={group} style={{ width: 200 }} /></div>
                <h3 className="text-white">Ignite your filmaking Dreams!</h3>
                <div className="text-white">
                    Do you have a know for creating beautiful cinematic
                    experience?
                </div>
                <div className="text-white">
                    Promote your film and contest on your social Media platform
                    from 25th July to 31th Aug
                </div>
                <h3 className="text-white">Grap the change to win an anamzing</h3>
                <h4 className="" style={{color:"green"}}>cash prize worth Rs 1,00,000/-</h4>
                <h4 className="my-5 text-white">ABOUT THE CHALLENGE</h4>
                <div class="d-flex text-white p-3">
                    <div class="col text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting.Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting
                        industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.{" "}
                    </div>
                    <div className="">
                        <img src={layer} style={{ width: 260 }} /><img src={reel} style={{ width: 260 }} />
                    </div>
                </div>
                <h4 className="mt-2 text-white">The MODUS OPERANDI IS VERY SIMPLE</h4>
                <h4 className="text-white">FOR ANY FILMAKKER TO FOLLOW</h4>
                <div class="row mt-5 ml-5 mr-5" style={{
                height:100,
                width:"90vw",
                backgroundImage: `url(${reel2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 1,
            }}>
                    <div class="col border border-1 d-flex justify-content-center"><img className="p-2" src={ractangle} style={{width:50,height:50}} /></div>
                    <div class="col border border-1 text-white"><img className="p-2" src={watch} style={{width:50,height:50}} /></div>
                    <div class="col border border-1 text-white"><img className="p-2" src={ractangle} style={{width:50,height:50}} /></div>
                    <div class="col border border-1 text-white"><img className="p-2" src={ractangle} style={{width:50,height:50}} /></div>
                    <div class="col border border-1 text-white"><img className="p-2" src={ractangle} style={{width:50,height:50}} /></div>
                </div>
                <div class="row mt-5"style={{
                height:100,
                width:"90vw",
                backgroundImage: `url(${reel2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 1,
            }}>
                    <div class="col border border-1 text-white"><img className="p-2" src={watch} style={{width:50,height:50}} /></div>
                    <div class="col border border-1 text-white">Column</div>
                    <div class="col border border-1 text-white">Column</div>
                </div>
                <h4 className="mt-5 my-5 text-white">IMPORTANT DETAILS & TIMELINE</h4>
                <div class="d-flex p-5">
                    <div class="col text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting.Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting
                        industry.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.{" "}
                    </div>
                    <div>
                        <img src={film} style={{ height: 430 }} />
                    </div>
                </div>
                <h4 className="mt-5 my-5 text-white">TERMS & CONDITIONS</h4>
                <div className="text-white p-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <h4 className="mt-5 mb-3 text-white">WHAT'S IN IT FOR THE FILMMAKERS</h4>
                <div className="p-5 text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div class="row mt-5">
                    <div class="col border border-1 d-flex flex-column d-flex justify-content-start">
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                    </div>
                    <div class="col border border-1 d-flex flex-column d-flex justify-content-start">
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                    </div>
                    <div class="col border border-1 d-flex flex-column d-flex justify-content-start">
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                    </div>
                    <div class="col border border-1 d-flex flex-column d-flex justify-content-start">
                        <div class="text-white">Column</div>
                        <div class="text-white">Column</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
