import locale from "./locale.json";

const Main = ({lang})=> {

    return (
        <div>
           <h2>{locale.title[lang]}</h2>
           <p>{locale.content[lang]}</p>
        </div>
    )
}

export default Main;
