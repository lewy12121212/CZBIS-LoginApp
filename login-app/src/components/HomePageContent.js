import "../styles/global.css";
import "../styles/homePageContent.css";
import "bootstrap/dist/css/bootstrap.css";

const cardContent = [
    'Opis karty 1',
    'Opis karty 2',
    'Opis karty 3',
    'Opis karty 4',
    'Opis karty 5',
    'Opis karty 6',
]

const Card = (props) => {
    return (
        <div className={'main__card'}>
            <img width='200px' height='200px' src={'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={'img'} />
            <div className={'main__card__desc'}>{props.desc}</div>
        </div>
    )
}

export default function HomePageContent() {

  return (
    <div className={"main__row"}>
        <div>
            <div className={'menu'}>
                <ul>
                    <li>Strona główna</li>
                    <li>Lista zleceń</li>
                    <li>Kontakt</li>
                    <li>Ustawienia</li>
                </ul>
            </div>
        </div>

        <div className={'main__content'}>
            {cardContent.map((item, key) => {
                return (<Card  desc={item} key={key} />)
            })}
        </div>
    </div>
  );
}