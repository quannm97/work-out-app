import IndianaJoneImg from "../images/trainerPick/IndianaJohn.png";
import ArnoldImg from "../images/trainerPick/Arnorld.png";
import ClerkImg from "../images/trainerPick/clerk.png";
import ReynoyImg from "../images/trainerPick/Reynold.jpg";
import JohnWickImg from "../images/trainerPick/JohnWick.png";

function Trainer(name, price, img, age, location, description, id) {
    return {
        id,
        name,
        price,
        img,
        age,
        location,
        description,
    };
}

const IndianaJone = new Trainer(
    "IndianaJone",
    25,
    IndianaJoneImg,
    50,
    "Ha Noi",
    "Adventure",
    0
);
const Arnold = new Trainer("Bruce", 35, ArnoldImg, 40, "HCM", "Millionare", 1);
const Clerk = new Trainer("Clerk", 45, ClerkImg, 45, "Moon", "Steel Maker", 2);
const Reynoy = new Trainer("Raynoy", 55, ReynoyImg, 50, "Mar", "Super Hero", 3);
const JohnWick = new Trainer(
    "JohnWick",
    65,
    JohnWickImg,
    50,
    "Viet Nam",
    "Assasin",
    4
);

const TRAINER_DATA = [IndianaJone, JohnWick, Arnold, Reynoy, Clerk];

export default TRAINER_DATA;
